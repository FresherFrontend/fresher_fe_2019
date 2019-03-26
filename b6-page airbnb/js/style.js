document.addEventListener("DOMContentLoaded", function() {

  $('#form-check input').datepicker({
      minDate: 0
  });
  $(document).on('click', '.ui-datepicker-next', function () {
    $(".ui-datepicker-title>span").hide('slide', { direction: 'left' }, 100).show('slide', { direction: 'right' }, 100);
    $(".ui-datepicker-calendar").hide('slide', { direction: 'left' }, 100).show('slide', { direction: 'right' }, 100);
  })
  
  $(document).on('click', '.ui-datepicker-prev', function () {
    $(".ui-datepicker-title>span").hide('slide', { direction: 'left' }, 100).show('slide', { direction: 'right' }, 100);
    $(".ui-datepicker-calendar").hide('slide', { direction: 'right' }, 100).show('slide', { direction: 'left' }, 100);
  })
});