import { Plugin } from 'ckeditor5/src/core';
import ApscColorBoxMarginEditing from './apsccolorboxmargin/apsccolorboxmarginediting';
import ApscColorBoxMarginUI from './apsccolorboxmargin/apsccolorboxmarginui';

/**
 * The apsccolorbox align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:apsccolorbox/apsccolorboxmargin/apsccolorboxmarginediting~ApscColorBoxMarginEditing} and
 * {@link module:apsccolorbox/apsccolorboxmargin/apsccolorboxui~ApscColorBoxUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class ApscColorBoxMargin extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ ApscColorBoxMarginEditing, ApscColorBoxMarginUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ApscColorBoxMargin';
	}
}
