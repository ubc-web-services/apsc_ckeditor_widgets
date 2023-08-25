import {
  isWidget
} from 'ckeditor5/src/widget';

/**
 * Returns a apscColorBox widget editing view element if one is selected.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getSelectedApscColorBoxWidget(selection) {
  const viewElement = selection.getSelectedElement();
  if (viewElement && isApscColorBoxWidget(viewElement)) {
    return viewElement;
  }
  return null;
}

/**
 * Returns a apscColorBox widget editing view element if one is among the selection's ancestors.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getApscColorBoxWidgetAncestor(selection) {
  const selectionPosition = selection.getFirstPosition();
  if (!selectionPosition) {
    return null;
  }
  let parent = selectionPosition.parent;
  while (parent) {
    if (parent.is('element') && isApscColorBoxWidget(parent)) {
      return parent;
    }
    parent = parent.parent;
  }
  return null;
}

// Checks if a given view element is a widget-color-box widget.
//
// @param {module:engine/view/element~Element} viewElement
// @returns {Boolean}
function isApscColorBoxWidget(viewElement) {
  return !!viewElement.hasClass('widget-color-box') && isWidget(viewElement);
}
