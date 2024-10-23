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
import ApscExpandCommand from './apscexpandcommand';

// cSpell:ignore apscexpand insertapscexpandcommand

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with apscExpand as this model:
 * <apscExpand>
 *    <apscExpandDescription></apscExpandDescription>
 * </apscExpand>
 *
 * Which is converted for the browser/user as this markup
 * <div class="widget-expand my-molecule-2 md---mx-organism-2">
 * <p>Sample content</p>
 * </div>
 *
 * This file has the logic for defining the apscExpand model, and for how it is
 * converted to standard DOM markup.
 */
export default class ApscExpandEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  init() {
    const editor = this.editor;
    this._defineSchema();
    this._defineConverters();
    editor.model.schema.extend('apscExpand', {
      allowAttributes: ['class']
    });
    editor.conversion.attributeToAttribute({
      model: 'class',
      view: 'class'
    });
    editor.commands.add(
      'apscExpand',
      new ApscExpandCommand(editor),
    );
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <apscExpand>
   *    <apscExpandTitle></apscExpandTitle>
   *    <apscExpandDescription></apscExpandDescription>
   * </apscExpand>
   *
   * The logic in _defineConverters() will determine how this is converted to
   * markup.
   */
  _defineSchema() {
    // Schemas are registered via the central `editor` object.
    const schema = this.editor.model.schema;

    schema.register('apscExpand', {
      // Behaves like a self-contained object (e.g. an image).
      isObject: true,
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: '$block',
      allowContentOf: '$root',
      allowChildren: ['apscExpandInner'],
    });

    schema.register('apscExpandInner', {
      isLimit: true,
      allowIn: 'apscExpand',
      allowContentOf: '$root',
    });

    schema.addChildCheck((context, childDefinition) => {
      // Disallow apscExpand inside apscExpandDescription.
      // Disabled for Accordion
      /*
      if (
        context.endsWith('apscExpandDescription') &&
        childDefinition.name === 'apscExpand'
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
    // If <div class="widget-accordion"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <apscExpand> model.
    conversion.for('upcast').elementToElement({
      model: 'apscExpand',
      view: {
        name: 'div',
        classes: ['widget-expand'],
      },
    });

    conversion.for('upcast').elementToElement({
      model: 'apscExpandInner',
      view: {
        name: 'div',
      },
    });


    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    //
    // Instances of <apscExpand> are saved as
    // <div class="widget-expand my-molecule-2 md---mx-organism-2">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'apscExpand',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'widget-expand',
          },
        );
      },
    });

    // Instances of <apscExpandInner> are saved as
    // <div>{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'apscExpandInner',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div',
        );
      },
    });

    // Editing Downcast Converters. These render the content to the user for
    // editing, i.e. this determines what gets seen in the editor. These trigger
    // after the Data Upcast Converters, and are re-triggered any time there
    // are changes to any of the models' properties.
    //
    // Convert the <apscExpand> model into a container widget in the editor UI.
    conversion.for('editingDowncast').elementToElement({
      model: 'apscExpand',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createContainerElement('div', {
          class: 'widget-expand',
        });
        return toWidget(div, viewWriter, {
          label: 'APSC Expand widget',
          hasSelectionHandle: true
        });
      },
    });

    //Convert the <apscExpandInner> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'apscExpandInner',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div');
        return toWidgetEditable(div, viewWriter);
      },
    });

  }
}
