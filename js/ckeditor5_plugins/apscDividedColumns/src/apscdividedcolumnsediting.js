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
import ApscDividedColumnsCommand from './apscdividedcolumnscommand';

// cSpell:ignore apscdividedcolumns insertapscdividedcolumnscommand

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with apscDividedColumns as this model:
 * <apscDividedColumns>
 *    <apscDividedColumnsOne></apscDividedColumnsOne>
 *    <apscDividedColumnsTwo></apscDividedColumnsTwo>
 * </apscDividedColumns>
 *
 * Which is converted for the browser/user as this markup
 * <div class="widget-divided-columns md--flex-grid keyline-v-short my-atom-1">
 * <div class="md--flex-1 first-child--mt-0"><p>First Column</p></div>
 * <div class="md--flex-2 first-child--mt-0"><p>Second Column</p></div>
 * </div>
 *
 * This file has the logic for defining the apscDividedColumns model, and for how it is
 * converted to standard DOM markup.
 */
export default class ApscDividedColumnsEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  init() {
    const editor = this.editor;
    this._defineSchema();
    this._defineConverters();
    editor.model.schema.extend('apscDividedColumns', {
      allowAttributes: ['class']
    });
    editor.conversion.attributeToAttribute({
      model: 'class',
      view: 'class'
    });
    editor.commands.add(
      'apscDividedColumns',
      new ApscDividedColumnsCommand(editor),
    );
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <apscDividedColumns>
   *    <apscDividedColumnsOne></apscDividedColumnsOne>
   *    <apscDividedColumnsTwo></apscDividedColumnsTwo>
   * </apscDividedColumns>
   *
   * The logic in _defineConverters() will determine how this is converted to
   * markup.
   */
  _defineSchema() {
    // Schemas are registered via the central `editor` object.
    const schema = this.editor.model.schema;

    schema.register('apscDividedColumns', {
      // Behaves like a self-contained object (e.g. an image).
      isObject: true,
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: '$block',
      //allowAttributes: ['class'],
      allowChildren: ['apscDividedColumnsOne', 'apscDividedColumnsTwo'],
    });

    schema.register('apscDividedColumnsOne', {
      isLimit: true,
      allowIn: 'apscDividedColumns',
      // Allow text only (e.g. text with attributes).
      allowContentOf: '$root',
    });

    schema.register('apscDividedColumnsTwo', {
      isLimit: true,
      allowIn: 'apscDividedColumns',
      allowContentOf: '$root',
    });

    schema.addChildCheck((context, childDefinition) => {
      // Disallow apscDividedColumns inside apscDividedColumnsTwo.
      // Disabled for Accordion
      /*
      if (
        context.endsWith('apscDividedColumnsTwo') &&
        childDefinition.name === 'apscDividedColumns'
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
    // If <div class="widget-divided-columns md--flex-grid keyline-v-short my-atom-1"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <apscDividedColumns> model.
    conversion.for('upcast').elementToElement({
      model: (viewElement, { writer }) => {
        return writer.createElement('apscDividedColumns', {
            class: viewElement.getAttribute('class')
        });
      },
      view: {
        name: 'div',
        classes: ['widget-divided-columns'],
      },
    });

    // If <div class="js-reveal__trigger accordion__trigger"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <apscDividedColumnsOne> model, provided it is a child element of <apscDividedColumns>,
    // as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'apscDividedColumnsOne',
      view: {
        name: 'div',
        classes: ['md--flex-1', 'first-child--mt-0'],
      },
    });

    // If <div class="js-reveal__target accordion__content clearfix"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <apscDividedColumnsTwo> model, provided it is a child element of
    // <apscDividedColumns>, as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'apscDividedColumnsTwo',
      view: {
        name: 'div',
        classes: ['md--flex-2', 'first-child--mt-0'],
      },
    });

    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    //
    // Instances of <apscDividedColumns> are saved as
    // <div class="widget-divided-columns md--flex-grid keyline-v-short my-atom-1">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'apscDividedColumns',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'widget-divided-columns',
          },
        );
      },
    });

    // Instances of <apscDividedColumnsOne> are saved as
    // <div class="js-reveal__trigger accordion__trigger" aria-expanded="false">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'apscDividedColumnsOne',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'md--flex-1 first-child--mt-0',
          },
        );
      },
    });

    // Instances of <apscDividedColumnsTwo> are saved as
    // <div class="js-reveal__target accordion__content clearfix" hidden>{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'apscDividedColumnsTwo',
      view: (modelElement, {
        writer
      }) => {
        return writer.createContainerElement(
          'div', {
            class: 'md--flex-2 first-child--mt-0',
          },
        );
      },
    });

    // Editing Downcast Converters. These render the content to the user for
    // editing, i.e. this determines what gets seen in the editor. These trigger
    // after the Data Upcast Converters, and are re-triggered any time there
    // are changes to any of the models' properties.
    //
    // Convert the <apscDividedColumns> model into a container widget in the editor UI.
    conversion.for('editingDowncast').elementToElement({
      model: 'apscDividedColumns',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createContainerElement('div', {
          class: 'widget-divided-columns',
        });
        return toWidget(div, viewWriter, {
          label: 'APSC Divided Columns widget',
          hasSelectionHandle: true
        });
      },
    });

    // Convert the <apscDividedColumnsOne> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'apscDividedColumnsOne',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'md--flex-1 first-child--mt-0',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <apscDividedColumnsTwo> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'apscDividedColumnsTwo',
      view: (modelElement, {
        writer: viewWriter
      }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'md--flex-2 first-child--mt-0',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });
  }
}
