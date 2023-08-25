/**
 * @file defines ApscDividedColumnsCommand, which is executed when the apscDividedColumns
 * toolbar button is pressed.
 */
// cSpell:ignore apscdividedcolumnsediting

import {
  Command
} from 'ckeditor5/src/core';

export default class ApscDividedColumnsCommand extends Command {

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
      // Insert <apscDividedColumns>*</apscDividedColumns> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createApscDividedColumns(writer, attributes));
    });
  }

  refresh() {
    const {
      model
    } = this.editor;
    const {
      selection
    } = model.document;
    const thiselement = selection.getFirstPosition().findAncestor('apscDividedColumns');

    // Determine if the cursor (selection) is in a position where adding a
    // apscDividedColumns is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'apscDividedColumns',
    );

    // If the cursor is not in a location where a apscDividedColumns can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
    if (thiselement) {
      this.value = true;
    } else {
      this.value = false;
    }
  }
}

function createApscDividedColumns(writer, attributes) {
  // Create instances of the three elements registered with the editor in
  // apscdividedcolumnsediting.js.
  const apscDividedColumns = writer.createElement('apscDividedColumns', {
    class: 'md--flex-grid keyline-v-short my-atom-1'
  });
  const apscDividedColumnsOne = writer.createElement('apscDividedColumnsOne');
  const apscDividedColumnsTwo = writer.createElement('apscDividedColumnsTwo');

  // Append the title and description elements to the apscDividedColumns, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(apscDividedColumnsOne, apscDividedColumns);
  writer.append(apscDividedColumnsTwo, apscDividedColumns);

  // The apscDividedColumnsTwo text content will automatically be wrapped in a
  // `<p>`.
  writer.appendElement('paragraph', apscDividedColumnsOne);
  writer.appendElement('paragraph', apscDividedColumnsTwo);

  // Return the element to be added to the editor.
  return apscDividedColumns;
}
