$(".owl-carousel").owlCarousel({

    nav: true,
    margin: 10,
    dots: false,
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            item: 1,
            nav: true
        },

        767: {
            item: 2,
            nav: true
        }
    },
});

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