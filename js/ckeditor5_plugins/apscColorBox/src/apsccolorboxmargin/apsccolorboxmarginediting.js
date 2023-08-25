import {
  Plugin
} from 'ckeditor5/src/core';
import {
  Widget
} from 'ckeditor5/src/widget';
import ApscColorBoxMarginCommand from './apsccolorboxmargincommand';

export default class ApscColorBoxMarginEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  static get pluginName() {
    return 'ApscColorBoxMarginEditing';
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
      allowAttributes: 'apscmarginclass'
    });
    editor.conversion.attributeToAttribute({
      model: 'apscmarginclass',
      view: 'class'
    });

    /*
     * Commands for the buttons
     */
    editor.commands.add(
      'apscColorBoxMargin',
      new ApscColorBoxMarginCommand(editor)
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
          value: /\bmy-[\S]+/
        },
        model: {
          key: 'apscmarginclass',
          value: viewElement => {
            const regexp = /\bmy-([\S]+)/;
            const match = viewElement.getAttribute('class').match(regexp);
            return match[0];
          }
        }
      });
    conversion
      .for('downcast')
      .attributeToAttribute({
        model: 'apscmarginclass',
        view: modelAttributeValue => ({
          key: 'class',
          value: modelAttributeValue
        })
      });
  }
}
