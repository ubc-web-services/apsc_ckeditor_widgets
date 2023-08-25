/**
 * @file defines ApscColorBoxAlignCommand.
 */
// cSpell:ignore apsccolorboxediting

import {
  Command
} from 'ckeditor5/src/core';
/**
 *
 * @extends module:core/command~Command
 */
export default class ApscColorBoxAlignCommand extends Command {
  /**
   * Creates a new `ApscColorBoxAlignCommand` instance.
   *
   * @param {module:core/editor/editor~Editor} editor The editor on which this command will be used.
   * @param {Object} options
   * @param {String} [options.active] The active class name
   * @param {String} attributeName The attribute that the active class is being applied to
   * @param {Object} classOptions The array of classes from which the allowed classes are taken
   */
  constructor(editor) {
    super(editor);
  }

  execute(options = {}) {
    const {
      editor
    } = this;
    const {
      model
    } = this.editor;
    const {
      selection
    } = editor.model.document;
    const selectedElement = selection.getSelectedElement();
    let modelElement = '';
    const currentvalue = options.value;
    const thisattribute = 'apscalignclass';

    // Is the command triggered from the `apscColorBox`?
    if (selectedElement && selectedElement.is('element', 'apscColorBox')) {
      modelElement = selectedElement;
    } else {
      modelElement = selection.getFirstPosition().findAncestor('apscColorBox');
    }

    model.change(writer => {
      if (selection.isCollapsed) {
        if (currentvalue) {
          writer.setAttribute(thisattribute, currentvalue, modelElement);
        } else {
          writer.removeAttribute(thisattribute, modelElement);
        }
      } else {
        const ranges = model.schema.getValidRanges(selection.getRanges(), thisattribute);
        for (const range of ranges) {
          if (currentvalue) {
            writer.setAttribute(thisattribute, currentvalue, range);
            this.isOn = true;
          } else {
            writer.removeAttribute(thisattribute, range);
            this.isOn = false;
          }
        }
      }
    });
  }

  refresh() {
    const {
      model
    } = this.editor;
    const {
      selection
    } = model.document;
    const thisattribute = 'apscalignclass';
    const thiselement = selection.getFirstPosition().findAncestor('apscColorBox');

    // Determine if the cursor (selection) is in a position where adding a
    // apscColorBox is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'apscColorBox',
    );

    // If the cursor is not in a location where a apscColorBox can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
    if (thiselement) {
      this.value = thiselement.getAttribute( thisattribute );
    } else {
      this.value = false;
    }
  }
}
