<?php

namespace Drupal\apsc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "ApscCkeditorWidgets" plugin.
 *
 * @CKEditorPlugin (
 *   id = "ApscCkeditorWidgets",
 *   label = @Translation("ApscCkeditorWidgets"),
 *   module = "apsc_ckeditor_widgets"
 * )
 */
class ApscCkeditorWidgets extends CKEditorPluginBase {

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    $config = [];
    return $config;
  }

  /**
   * {@inheritdoc}
   */
  public function getDependencies(Editor $editor) {
    return [];
  }
}
