import {
  Plugin
} from 'ckeditor5/src/core';
import {
  Widget
} from 'ckeditor5/src/widget';
import ApscColorBoxPaddingCommand from './apsccolorboxpaddingcommand';

export default class ApscColorBoxPaddingEditing extends Plugin {

  static get requires() {
    return [Widget];
  }

  static get pluginName() {
    return 'ApscColorBoxPaddingEditing';
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
      allowAttributes: 'apscpaddingclass'
    });
    editor.conversion.attributeToAttribute({
      model: 'apscpaddingclass',
      view: 'class'
    });

    /*
     * Commands for the buttons
     */
    editor.commands.add(
      'apscColorBoxPadding',
      new ApscColorBoxPaddingCommand(editor)
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
          value: /\bp-[\S]+/
        },
        model: {
          key: 'apscpaddingclass',
          value: viewElement => {
            const regexp = /\bp-([\S]+)/;
            const match = viewElement.getAttribute('class').match(regexp);
            return match[0];
          }
        }
      });
    conversion
      .for('downcast')
      .attributeToAttribute({
        model: 'apscpaddingclass',
        view: modelAttributeValue => ({
          key: 'class',
          value: modelAttributeValue
        })
      });
  }
}
