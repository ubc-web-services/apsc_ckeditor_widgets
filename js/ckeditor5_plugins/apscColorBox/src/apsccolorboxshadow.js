import { Plugin } from 'ckeditor5/src/core';
import ApscColorBoxShadowEditing from './apsccolorboxshadow/apsccolorboxshadowediting';
import ApscColorBoxShadowUI from './apsccolorboxshadow/apsccolorboxshadowui';

/**
 * The apsccolorbox align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:apsccolorbox/apsccolorboxshadow/apsccolorboxshadowediting~ApscColorBoxShadowEditing} and
 * {@link module:apsccolorbox/apsccolorboxshadow/apsccolorboxui~ApscColorBoxUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class ApscColorBoxShadow extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ ApscColorBoxShadowEditing, ApscColorBoxShadowUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ApscColorBoxShadow';
	}
}
