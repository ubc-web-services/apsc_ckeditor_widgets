import { Plugin } from 'ckeditor5/src/core';
import ApscColorBoxBackgroundEditing from './apsccolorboxbackground/apsccolorboxbackgroundediting';
import ApscColorBoxBackgroundUI from './apsccolorboxbackground/apsccolorboxbackgroundui';

/**
 * The apsccolorbox align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:apsccolorbox/apsccolorboxbackground/apsccolorboxbackgroundediting~ApscColorBoxBackgroundEditing} and
 * {@link module:apsccolorbox/apsccolorboxbackground/apsccolorboxbackgroundui~ApscColorBoxBackgroundUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class ApscColorBoxBackground extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ ApscColorBoxBackgroundEditing, ApscColorBoxBackgroundUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ApscColorBoxBackground';
	}
}
