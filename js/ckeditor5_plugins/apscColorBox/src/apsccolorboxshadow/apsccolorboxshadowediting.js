import {
  Plugin
} from 'ckeditor5/src/core';
import {
  Widget
} from 'ckeditor5/src/widget';
import ApscColorBoxShadowCommand from './apsccolorboxshadowcommand';

export default class ApscColorBoxShadowEditing extends Plugin {

  static get requires() {
    return [Widget];
  }

  static get pluginName() {
    return 'ApscColorBoxShadowEditing';
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
      allowAttributes: 'apscshadowclass'
    });
    editor.conversion.attributeToAttribute({
      model: 'apscshadowclass',
      view: 'class'
    });

    /*
     * Commands for the buttons
     */
    editor.commands.add(
      'apscColorBoxShadow',
      new ApscColorBoxShadowCommand(editor)
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
          value: /drop-shadow-[\S]+/
        },
        model: {
          key: 'apscshadowclass',
          value: viewElement => {
            const regexp = /drop-shadow-([\S]+)/;
            const match = viewElement.getAttribute('class').match(regexp);
            return match[0];
          }
        }
      });

    conversion
      .for('downcast')
      .attributeToAttribute({
        model: 'apscshadowclass',
        view: modelAttributeValue => ({
          key: 'class',
          value: modelAttributeValue
        })
      });
  }
}
