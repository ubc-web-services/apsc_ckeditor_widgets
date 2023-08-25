import {
  Plugin
} from 'ckeditor5/src/core';
import {
  Widget
} from 'ckeditor5/src/widget';
import ApscColorBoxBackgroundCommand from './apsccolorboxbackgroundcommand';

export default class ApscColorBoxBackgroundEditing extends Plugin {

  static get requires() {
    return [Widget];
  }

  static get pluginName() {
    return 'ApscColorBoxBackgroundEditing';
  }

  constructor(editor) {
    super(editor);
  }

  init() {
    const {
      editor
    } = this;
    this._defineConverters();
    /*
     * Map the attributes - in the model, each group gets a custom attribute to contain it, and these then map to the class attribute in the view
     */
    editor.model.schema.extend('apscColorBox', {
      allowAttributes: 'apscbackgroundclass'
    });
    editor.conversion.attributeToAttribute({
      model: 'apscbackgroundclass',
      view: 'class'
    });

    /*
     * Commands for the buttons
     */
    editor.commands.add(
      'apscColorBoxBackground',
      new ApscColorBoxBackgroundCommand(editor)
    );
  }

  _defineConverters() {
    // Converters are registered via the central editor object.
    const {
      conversion
    } = this.editor;
    conversion
      .for('upcast')
      .attributeToAttribute({
        view: {
          key: 'class',
          value: /\bbg-[\S]+/
        },
        model: {
          key: 'apscbackgroundclass',
          value: viewElement => {
            const regexp = /\bbg-([\S]+)/;
            const match = viewElement.getAttribute('class').match(regexp);
            return match[0];
          }
        }
      });
    conversion
      .for('downcast')
      .attributeToAttribute({
        model: 'apscbackgroundclass',
        view: modelAttributeValue => ({
          key: 'class',
          value: modelAttributeValue
        })
      });
  }
}
