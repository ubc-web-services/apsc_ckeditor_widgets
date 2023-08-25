/**
 * @file defines ApscExpandCommand, which is executed when the apscExpand
 * toolbar button is pressed.
 */
// cSpell:ignore apscexpandediting

import {
  Command
} from 'ckeditor5/src/core';

export default class ApscExpandCommand extends Command {

  /**
   * @inheritDoc
   */
  constructor(editor, attributeName) {
    super(editor);
    this.attributeName = attributeName;
  }

  execute(attributes) {
    const {
      model
    } = this.editor;

    model.change((writer) => {
      // Insert <apscExpand>*</apscExpand> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createApscExpand(writer, attributes));
    });
  }

  refresh() {
    const {
      model
    } = this.editor;
    const {
      selection
    } = model.document;
    const thiselement = selection.getFirstPosition().findAncestor('apscExpand');

    // Determine if the cursor (selection) is in a position where adding a
    // apscExpand is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'apscExpand',
    );

    // If the cursor is not in a location where a apscExpand can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
    if (thiselement) {
      this.value = true;
    } else {
      this.value = false;
    }
  }
}

function createApscExpand(writer, attributes) {
  // Create instances of the three elements registered with the editor in
  // apscexpandediting.js.
  const apscExpand = writer.createElement('apscExpand', {
    class: 'my-molecule-2 md---mx-organism-2'
  });
  const apscExpandInner = writer.createElement('apscExpandInner');

  writer.append(apscExpandInner, apscExpand);

  // The apscExpand text content will automatically be wrapped in a
  // `<p>`.
  writer.appendElement('paragraph', apscExpandInner);

  // Return the element to be added to the editor.
  return apscExpand;
}
