/**
 * @file registers the apscColorBox toolbar button and binds functionality to it.
 */

import {
  Plugin,
  icons
} from 'ckeditor5/src/core';
import {
  ButtonView,
  ContextualBalloon
} from 'ckeditor5/src/ui';

export default class ApscColorBoxShadowUI extends Plugin {

  /**
   * @inheritdoc
   */
  static get requires() {
    return [ContextualBalloon];
  }

  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'ApscColorBoxShadowUI';
  }

  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add('apscColorBoxShadowToggle', (locale) => {
      const command = editor.commands.get('apscColorBoxShadow');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Toggle Shadow'),
        tooltip: true,
        withText: true,
        class: 'cke5-apsccolorbox-shadow-insert-button',
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
      //buttonView.bind( 'isOn' ).to( command, 'value', value => value === 'drop-shadow-md' );

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('apscColorBoxShadow')
      );
      return buttonView;
    });
  }
}
