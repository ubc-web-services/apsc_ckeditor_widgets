import {
  Plugin
} from 'ckeditor5/src/core';
import {
  toWidget,
  toWidgetEditable
} from 'ckeditor5/src/widget';
import {
  Widget
} from 'ckeditor5/src/widget';
import ApscColorBoxCommand from './apsccolorboxcommand';

// cSpell:ignore apsccolorbox apsccolorboxcommand

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with apscColorBox as this model:
 * <apscColorBox>
 *    <apscColorBoxInner></apscColorBoxInner>
 * </apscColorBox>
 *
 * Which is converted for the browser/user as this markup
 *<div class="widget-color-box">
 *  <div class="widget-content first-child--mt-0">
 *    <p></p>
 *  </div>
 * </div>
 *
 *
 * This file has the logic for defining the apscColorBox model, and for how it is
 * converted to standard DOM markup.
 */
export default class ApscColorBoxEditing extends Plugin {

  static get requires() {
    return [Widget];
  }

  init() {
    const editor = this.editor;
    editor.conversion.attributeToAttribute({
      model: 'class',
      view: 'class'
    });
    this._defineSchema();
    this._defineConverters();
    editor.commands.add(
      'apscColorBox',
      new ApscColorBoxCommand(editor),
    );
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <apscColorBox>
   *    <apscColorBoxInner></apscColorBoxInner>
   * </apscColorBox>
   *
   * The logic in _defineConverters() will determine how this is converted to
   * markup.
   */
  _defineSchema() {
    // Schemas are registered via the central `editor` object.
    const schema = this.editor.model.schema;

    schema.register('apscColorBox', {
      // Behaves like a self-contained object (e.g. an image).
      isObject: true,
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: '$block',
      allowChildren: ['apscColorBoxInner'],
    });

    schema.register('apscColorBoxInner', {
      isLimit: true,
      allowIn: 'apscColorBox',
      allowContentOf: '$root',
    });

    schema.addChildCheck((context, childDefinition) => {
      // Disallow apscColorBox inside apscColorBoxSecond.
      // Disabled for apscColorBox
      /*
      if (
        context.endsWith('apscColorBoxSecond') &&
        childDefinition.name === 'apscColorBox'
      ) {
        return false;
      }
      */
    });
  }

  /**
   * Converters determine how CKEditor 5 models are converted into markup and
   * vice-versa.
   */
  _defineConverters() {
    // Converters are registered via the central editor object.
    const {
      conversion
    } = this.editor;

    // Upcast Converters: determine how existing HTML is interpreted by the
    // editor. These trigger when an editor instance loads.
    //
    // If <div class="widget-color-box"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <apscColorBox> model.
    conversion.for('upcast').elementToElement({
      model: 'apscColorBox',
      view: {
        name: 'div',
        classes: 'widget-color-box',
      },
    });

    conversion.for('upcast').elementToElement({
      model: 'apscColorBoxInner',
      view: {
        name: 'div',
        classes: ['widget-content', 'first-child--mt-0'],
      },
    });

    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    //
    // Instances of <apscColorBox> are saved as
    // <div class="widget-color-box">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'apscColorBox',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'widget-color-box',
          },
        );
      },
    });

    // Instances of <apscColorBoxInner> are saved as
    // <div class="widget-content first-child--mt-0">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'apscColorBoxInner',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'widget-content first-child--mt-0',
          },
        );
      },
    });

    // Editing Downcast Converters. These render the content to the user for
    // editing, i.e. this determines what gets seen in the editor. These trigger
    // after the Data Upcast Converters, and are re-triggered any time there
    // are changes to any of the models' properties.
    //
    // Convert the <apscColorBox> model into a container widget in the editor UI.
    conversion.for('editingDowncast').elementToElement({
      model: 'apscColorBox',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createContainerElement('div', {
          class: 'widget-color-box',
        });
        return toWidget(div, viewWriter, {
          label: 'UBC Color Box widget',
          hasSelectionHandle: true
        });
      },
    });

    // Convert the <apscColorBoxInner> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'apscColorBoxInner',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'widget-content first-child--mt-0',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });
  }
}
