/**
 * @file defines ApscColorBoxCommand, which is executed when the apscColorBox
 * toolbar button is pressed.
 */
// cSpell:ignore apsccolorboxediting

import {
  Command
} from 'ckeditor5/src/core';
import {
  defaultColorBoxStyles
} from '../../../config/config';

export default class ApscColorBoxCommand extends Command {

  /**
   * @inheritDoc
   */
  constructor(editor, attributeName) {
    super(editor);
    this.attributeName = attributeName;
  }

  execute() {
    const editor = this.editor;
    const model = this.editor.model;
    const selection = editor.model.document.selection;
    const selectedElement = selection.getSelectedElement();
    let modelApscColorBox = '';

    // Is the command triggered from the `tableToolbar`?
    if (selectedElement && selectedElement.is('element', 'colorBox')) {
      modelApscColorBox = selectedElement;
    } else {
      modelApscColorBox = selection.getFirstPosition().findAncestor('colorBox');
    }

    model.change((writer) => {
      // Insert <colorBox>*</colorBox> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createApscColorBox(writer));
    });
  }

  refresh() {
    const {
      model
    } = this.editor;
    const {
      selection
    } = model.document;
    const thiselement = selection.getFirstPosition().findAncestor('apscColorBox');

    // Determine if the cursor (selection) is in a position where adding a
    // colorBox is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'apscColorBox',
    );

    // If the cursor is not in a location where a colorBox can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
    if (thiselement) {
      this.value = true;
    } else {
      this.value = false;
    }
  }
}

function createApscColorBox(writer) {
  // Create instances of the three elements registered with the editor in
  // ubcaccordionediting.js.
  const apscColorBox = writer.createElement('apscColorBox', defaultColorBoxStyles, {
    class: 'widget-color-box'
  });
  const apscColorBoxInner = writer.createElement('apscColorBoxInner');

  // Append the title and description elements to the apscColorBox, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(apscColorBoxInner, apscColorBox);
  writer.appendElement('paragraph', apscColorBoxInner);

  // Return the element to be added to the editor.
  return apscColorBox;
}
