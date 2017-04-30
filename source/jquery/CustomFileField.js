/* Custom File Field
===================================================================================================================== */

import $ from 'jQuery';

$('input.custom-file-input').on('change', function() {
  $(this).next('.custom-file-control').addClass('selected').html(this.files[0].name);
});
