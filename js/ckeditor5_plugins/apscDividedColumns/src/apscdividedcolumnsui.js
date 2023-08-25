/**
 * @file registers the apscDividedColumns toolbar button and binds functionality to it.
 */

import {
  Plugin
} from 'ckeditor5/src/core';
import {
  ButtonView,
  ContextualBalloon
} from 'ckeditor5/src/ui';
import icon from '../../../../icons/addKeyline.svg';

export default class ApscDividedColumnsUI extends Plugin {

  /**
   * @inheritdoc
   */
  static get requires() {
    return [ContextualBalloon];
  }

  init() {
    const editor = this.editor;

    // This will register the apscDividedColumns toolbar button.
    editor.ui.componentFactory.add('apscDividedColumns', (locale) => {
      const command = editor.commands.get('apscDividedColumns');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Divided Columns'),
        icon,
        tooltip: true,
        class: 'cke5-apscdividedcolumns-insert-button',
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('apscDividedColumns'),
      );
      return buttonView;
    });
  }
}
