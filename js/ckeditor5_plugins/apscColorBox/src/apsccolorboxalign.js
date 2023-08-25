import { Plugin } from 'ckeditor5/src/core';
import ApscColorBoxAlignEditing from './apsccolorboxalign/apsccolorboxalignediting';
import ApscColorBoxAlignUI from './apsccolorboxalign/apsccolorboxalignui';

/**
 * The apsccolorbox align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:apsccolorbox/apsccolorboxalign/apsccolorboxalignediting~ApscColorBoxAlignEditing} and
 * {@link module:apsccolorbox/apsccolorboxalign/apsccolorboxui~ApscColorBoxUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class ApscColorBoxAlign extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ ApscColorBoxAlignEditing, ApscColorBoxAlignUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ApscColorBoxAlign';
	}
}
