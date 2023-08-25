import {
  Plugin
} from 'ckeditor5/src/core';
import {
  Widget
} from 'ckeditor5/src/widget';
import ApscColorBoxAlignCommand from './apsccolorboxaligncommand';

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
 *
 */
export default class ApscColorBoxAlignEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  static get pluginName() {
    return 'ApscColorBoxAlignEditing';
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
      allowAttributes: 'apscalignclass'
    });
    editor.conversion.attributeToAttribute({
      model: 'apscalignclass',
      view: 'class'
    });

    /*
     * Commands for the buttons
     */
    editor.commands.add(
      'apscColorBoxAlignment',
      new ApscColorBoxAlignCommand(editor)
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
          value: /\balign-[\S]+/
        },
        model: {
          key: 'apscalignclass',
          value: viewElement => {
            const regexp = /\balign-([\S]+)/;
            const match = viewElement.getAttribute('class').match(regexp);
            return match[0];
          }
        }
      });
    conversion
      .for('downcast')
      .attributeToAttribute({
        model: 'apscalignclass',
        view: modelAttributeValue => ({
          key: 'class',
          value: modelAttributeValue
        })
      });
  }
}
