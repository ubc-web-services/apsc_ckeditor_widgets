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

export default class ApscColorBoxAlignUI extends Plugin {

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
    return 'ApscColorBoxAlignUI';
  }

  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('apscColorBoxAlignExpanded', (locale) => {
      const command = editor.commands.get('apscColorBoxAlignment');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Expand Width'),
        icon: icons.objectSizeFull,
        tooltip: true,
        class: 'cke5-apsccolorbox-align-expanded-button',
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('apscColorBoxAlignment', {
          value: 'align-expanded'
        })
      );
      return buttonView;
    });

    editor.ui.componentFactory.add('apscColorBoxAlignFull', (locale) => {
      const command = editor.commands.get('apscColorBoxAlignment');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Full Width'),
        icon: icons.objectFullWidth,
        tooltip: true,
        class: 'cke5-apsccolorbox-align-full-button',
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('apscColorBoxAlignment', {
          value: 'align-full'
        })
      );
      return buttonView;
    });

    editor.ui.componentFactory.add('apscColorBoxAlignLeft', (locale) => {
      const command = editor.commands.get('apscColorBoxAlignment');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Align left and wrap text'),
        icon: icons.objectLeft,
        tooltip: true,
        class: 'cke5-apsccolorbox-align-left-button',
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('apscColorBoxAlignment', {
          value: 'align-left'
        })
      );
      return buttonView;
    });

    editor.ui.componentFactory.add('apscColorBoxAlignCenter', (locale) => {
      const command = editor.commands.get('apscColorBoxAlignment');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Align Center'),
        icon: icons.objectCenter,
        tooltip: true,
        class: 'cke5-apsccolorbox-align-center-button',
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('apscColorBoxAlignment', {
          value: 'align-center'
        })
      );
      return buttonView;
    });

    editor.ui.componentFactory.add('apscColorBoxAlignRight', (locale) => {
      const command = editor.commands.get('apscColorBoxAlignment');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Align right and wrap text'),
        icon: icons.objectRight,
        tooltip: true,
        class: 'cke5-apsccolorbox-align-right-button',
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () => {
        editor.execute('apscColorBoxAlignment', {
          value: 'align-right'
        })
      });
      return buttonView;
    });
  }
}
