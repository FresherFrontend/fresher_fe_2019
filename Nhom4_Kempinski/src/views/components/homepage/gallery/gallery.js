const HomeGallery = {
    homeGalleryCarousel: () => {
        $(".gallery-slide").slick({
            slidesToShow: 5,
            arrows: true,
            responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
        });
    },
    homeGalleryCarouselInfo: () => {
      $('.gallery-item').fancybox({
        loop:true
      });
    }
  };
  export default HomeGallery;