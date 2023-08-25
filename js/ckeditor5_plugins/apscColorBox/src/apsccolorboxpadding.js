import { Plugin } from 'ckeditor5/src/core';
import ApscColorBoxPaddingEditing from './apsccolorboxpadding/apsccolorboxpaddingediting';
import ApscColorBoxPaddingUI from './apsccolorboxpadding/apsccolorboxpaddingui';

/**
 * The apsccolorbox align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:apsccolorbox/apsccolorboxpadding/apsccolorboxpaddingediting~ApscColorBoxPaddingEditing} and
 * {@link module:apsccolorbox/apsccolorboxpadding/apsccolorboxui~ApscColorBoxUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class ApscColorBoxPadding extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ ApscColorBoxPaddingEditing, ApscColorBoxPaddingUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ApscColorBoxPadding';
	}
}
