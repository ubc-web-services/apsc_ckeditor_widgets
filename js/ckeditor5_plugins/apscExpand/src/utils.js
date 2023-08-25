import {
  isWidget
} from 'ckeditor5/src/widget';

/**
 * Returns a apscExpand widget editing view element if one is selected.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getSelectedApscExpandWidget(selection) {
  const viewElement = selection.getSelectedElement();
  if (viewElement && isApscExpandWidget(viewElement)) {
    return viewElement;
  }
  return null;
}

/**
 * Returns a apscExpand widget editing view element if one is among the selection's ancestors.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getApscExpandWidgetAncestor(selection) {
  const selectionPosition = selection.getFirstPosition();
  if (!selectionPosition) {
    return null;
  }
  let parent = selectionPosition.parent;
  while (parent) {
    if (parent.is('element') && isApscExpandWidget(parent)) {
      return parent;
    }
    parent = parent.parent;
  }
  return null;
}

// Checks if a given view element is a widget-expand widget.
//
// @param {module:engine/view/element~Element} viewElement
// @returns {Boolean}
function isApscExpandWidget(viewElement) {
  return !!viewElement.hasClass('widget-expand') && isWidget(viewElement);
}
