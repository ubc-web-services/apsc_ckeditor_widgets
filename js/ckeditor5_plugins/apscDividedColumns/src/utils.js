import {
  isWidget
} from 'ckeditor5/src/widget';

/**
 * Returns a apscDividedColumns widget editing view element if one is selected.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getSelectedApscDividedColumnsWidget(selection) {
  const viewElement = selection.getSelectedElement();
  if (viewElement && isApscDividedColumnsWidget(viewElement)) {
    return viewElement;
  }
  return null;
}

/**
 * Returns a apscDividedColumns widget editing view element if one is among the selection's ancestors.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getApscDividedColumnsWidgetAncestor(selection) {
  const selectionPosition = selection.getFirstPosition();
  if (!selectionPosition) {
    return null;
  }
  let parent = selectionPosition.parent;
  while (parent) {
    if (parent.is('element') && isApscDividedColumnsWidget(parent)) {
      return parent;
    }
    parent = parent.parent;
  }
  return null;
}

// Checks if a given view element is a widget-divided-columns widget.
//
// @param {module:engine/view/element~Element} viewElement
// @returns {Boolean}
function isApscDividedColumnsWidget(viewElement) {
  return !!viewElement.hasClass('widget-divided-columns') && isWidget(viewElement);
}
