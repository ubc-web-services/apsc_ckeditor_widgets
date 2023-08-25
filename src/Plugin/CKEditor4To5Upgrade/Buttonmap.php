<?php

declare(strict_types=1);

namespace Drupal\apsc_ckeditor_widgets\Plugin\CKEditor4To5Upgrade;

use Drupal\Core\Plugin\PluginBase;
use Drupal\ckeditor5\HTMLRestrictions;
use Drupal\ckeditor5\Plugin\CKEditor4To5UpgradePluginInterface;
use Drupal\filter\FilterFormatInterface;

/**
 * @CKEditor4To5Upgrade(
 *   id = "apsc_ckeditor_widgets",
 *   cke4_buttons = {
 *     "color-box-widget",
 *     "divided-columns",
 *     "expand",
 *   },
 *   cke4_plugin_settings = {
 *   },
 *   cke5_plugin_elements_subset_configuration = {
 *   }
 * )
 *
 * @internal
 *   Plugin classes are internal.
 */
class Buttonmap extends PluginBase implements CKEditor4To5UpgradePluginInterface {

  /**
   * {@inheritdoc}
   */
  public function mapCKEditor4ToolbarButtonToCKEditor5ToolbarItem(string $cke4_button, HTMLRestrictions $text_format_html_restrictions): ?array {
    switch ($cke4_button) {

       case 'color-box-widget':
           return ['ApscColorBox'];

      case 'divided-columns':
            return ['ApscDividedColumns'];

      case 'expand':
            return ['ApscExpand'];

      default:
        throw new \OutOfBoundsException();
    }
  }

  /**
   * {@inheritdoc}
   */
  public function mapCKEditor4SettingsToCKEditor5Configuration(string $cke4_plugin_id, array $cke4_plugin_settings): ?array {
    throw new \OutOfBoundsException();
  }

  /**
   * {@inheritdoc}
   */
  public function computeCKEditor5PluginSubsetConfiguration(string $cke5_plugin_id, FilterFormatInterface $text_format): ?array {
    throw new \OutOfBoundsException();
  }

}
