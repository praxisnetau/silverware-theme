/* Custom File Field
===================================================================================================================== */

import $ from 'jquery';

$('input.custom-file-input').on('change', function() {
  $(this).next('.custom-file-label').addClass('selected').html(this.files[0].name);
});
