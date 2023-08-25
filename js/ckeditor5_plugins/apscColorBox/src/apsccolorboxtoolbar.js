import {
  Plugin
} from 'ckeditor5/src/core';
import {
  WidgetToolbarRepository
} from 'ckeditor5/src/widget';
import {
  getSelectedApscColorBoxWidget,
  getApscColorBoxWidgetAncestor
} from './utils';

/**
 * The apscColorBox toolbar class.
 *
 * @extends module:core/plugin~Plugin
 */
export default class ApscColorBoxToolbar extends Plugin {
  /**
   * @inheritDoc
   */
  static get requires() {
    return [WidgetToolbarRepository];
  }

  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'ApscColorBoxToolbar';
  }

  /**
   * @inheritDoc
   */
  afterInit() {
    const editor = this.editor;
    const widgetToolbarRepository = editor.plugins.get(WidgetToolbarRepository);
    const apscColorBoxContentToolbarItems = editor.config.get('apscColorBox.contentToolbar');
    const apscColorBoxToolbarItems = editor.config.get('apscColorBox.tableToolbar');

    if (apscColorBoxContentToolbarItems) {
      widgetToolbarRepository.register('apscColorBoxContent', {
        ariaLabel: editor.t('Color Box toolbar'),
        items: apscColorBoxContentToolbarItems,
        getRelatedElement: getApscColorBoxWidgetAncestor
      });
    }

    if (apscColorBoxToolbarItems) {
      widgetToolbarRepository.register('apscColorBox', {
        ariaLabel: editor.t('Color Box toolbar'),
        items: apscColorBoxToolbarItems,
        getRelatedElement: getSelectedApscColorBoxWidget
      });
    }
  }
}
