$(".product, .support").owlCarousel({

    margin: 10,
    dots: false,
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },

        767: {
            items: 2,
            nav: false,
        },

        1024: {
            items: 3,
            nav: true,
        }
    },
});

$(".booked").owlCarousel({
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
            nav: false
        },

        767: {
            item: 2,
            nav: false
        },

        1024: {
            items: 4,
            nav: true,
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