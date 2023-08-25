/**
 * @file registers the apscExpand toolbar button and binds functionality to it.
 */

import {
  Plugin
} from 'ckeditor5/src/core';
import {
  ButtonView,
  ContextualBalloon
} from 'ckeditor5/src/ui';
import icon from '../../../../icons/resize.svg';

export default class ApscExpandUI extends Plugin {

  /**
   * @inheritdoc
   */
  static get requires() {
    return [ContextualBalloon];
  }

  init() {
    const editor = this.editor;

    // This will register the apscExpand toolbar button.
    editor.ui.componentFactory.add('apscExpand', (locale) => {
      const command = editor.commands.get('apscExpand');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Expanded Width Region'),
        icon,
        tooltip: true,
        class: 'cke5-apscexpand-insert-button',
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('apscExpand'),
      );
      return buttonView;
    });
  }
}
