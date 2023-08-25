# apsc_ckeditor_widgets
A Drupal module to add some common widgets to CKeditor

## Working with the javascript

Plugin source should be added to
`js/ckeditor5_plugins/{pluginNameDirectory}/src` and the build tools expect this
directory to include an `index.js` file that exports one or more CKEditor 5
plugins. Note that requiring `index.js` to be inside
`{pluginNameDirectory}/src` is not a fixed requirement of CKEditor 5 or Drupal,
but a requirement of this starter template that can be changed in
`webpack.config.js` as needed.

In the module directory, run `yarn install` to set up the necessary assets. The
initial run of `install` may take a few minutes, but subsequent builds will be
faster.

After installing dependencies, plugins can be built with `yarn build` or `yarn
watch`. They will be built to `js/build/{pluginNameDirectory}.js`.  co

## CKEditor API
- v4: https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR.html
    - custom widget example:
        - https://ckeditor.com/docs/ckeditor4/latest/examples/simplebox.html
- v5: https://ckeditor.com/docs/ckeditor5/latest/api/index.html
    - plugin examples:
        - https://ckeditor.com/docs/ckeditor5/latest/framework/guides/plugins/creating-simple-plugin-timestamp.html
        - https://ckeditor.com/docs/ckeditor5/latest/framework/guides/tutorials/implementing-a-block-widget.html

## Drupal resources
- Dev Tools for CKE5 - https://www.drupal.org/project/ckeditor5_dev
- CKE5 Drupal API - https://www.drupal.org/docs/drupal-apis/ckeditor-5-api/overview
- Development guide - https://www.drupal.org/docs/core-modules-and-themes/core-modules/ckeditor-5-module/ckeditor-5-development

