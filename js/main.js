$(document).ready(function() {
     $('.slide10 > .owl-carousel').owlCarousel({
        items:3,
        loop:false,
        Width:true,
        // center:true,        
        margin:10,
        URLhashListener:false,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                center:false
            },
            768:{
                items:2,
                nav:true,
                // center:true
                Width:true
            },
            992:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });
     $('.slide12 > .owl-carousel').owlCarousel({
        items:4,
        loop:false,
        Width:true,
        margin:10,
        URLhashListener:false,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                center:false
            },
            768:{
                items:2,
                nav:true,
                // center:true
                Width:true
            },
            992:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
});