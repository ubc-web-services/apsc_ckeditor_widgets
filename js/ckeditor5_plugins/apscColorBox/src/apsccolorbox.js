/**
 * @file This is what CKEditor refers to as a master (glue) plugin. Its role is
 * just to load the “editing” and “UI” components of this Plugin. Those
 * components could be included in this file, but
 *
 * I.e, this file's purpose is to integrate all the separate parts of the plugin
 * before it's made discoverable via index.js.
 */
// cSpell:ignore apsccolorboxediting apsccolorboxui

// The contents of ApscColorBoxUI and ApscColorBox editing could be included in this
// file, but it is recommended to separate these concerns in different files.
import ApscColorBoxEditing from './apsccolorboxediting';
import ApscColorBoxUI from './apsccolorboxui';
import ApscColorBoxToolbar from './apsccolorboxtoolbar';
import ApscColorBoxAlign from './apsccolorboxalign';
import ApscColorBoxBackground from './apsccolorboxbackground';
import ApscColorBoxPadding from './apsccolorboxpadding';
import ApscColorBoxMargin from './apsccolorboxmargin';
import ApscColorBoxShadow from './apsccolorboxshadow';
import {
  Plugin
} from 'ckeditor5/src/core';

export default class ApscColorBox extends Plugin {
  // Note that ApscColorBoxEditing and ApscColorBoxUI also extend `Plugin`, but these
  // are not seen as individual plugins by CKEditor 5. CKEditor 5 will only
  // discover the plugins explicitly exported in index.js.
  static get requires() {
    return [
      ApscColorBoxEditing,
      ApscColorBoxUI,
      ApscColorBoxToolbar,
      ApscColorBoxAlign,
      ApscColorBoxBackground,
      ApscColorBoxPadding,
      ApscColorBoxShadow,
      ApscColorBoxMargin
    ];
  }
}
