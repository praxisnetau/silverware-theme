/* Loading Overlay
===================================================================================================================== */

import $ from 'jquery';

// Define Loading Overlay Defaults:

$.fn.loadingOverlay.defaults = {
  loadingClass: 'loading',
  overlayClass: 'loading-overlay',
  spinnerClass: 'loading-spinner',
  iconClass:    'loading-icon fa fa-refresh fa-spin',
  textClass:    'loading-text',
  loadingText:  'loading'
};
