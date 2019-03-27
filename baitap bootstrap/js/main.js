// $(".owl-carousel").owlCarousel({
//   items: 3,
//   nav: true,
//   margin: 10,
//   dots: false,
//   loop: true,
//   autoplay: true,
//   autoplayTimeout: 3000,
//   autoplayHoverPause: false
// });

$(function() {
  var date = new Date();
  date.setDate(date.getDate());
  $(".datetime").datepicker({
    format: "mm/dd/yyyy",
    orientation: "top right",
    todayHightinght: true,
    startDate: date
  });
});
