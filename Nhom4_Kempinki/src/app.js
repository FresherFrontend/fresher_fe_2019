// import './assets/styles/animation.css';
<<<<<<< HEAD
// import slide from './views/components/homepage/explore/explore';
require('normalize.css');
require('slick-carousel');
require('isotope-layout');
=======
import slide from './views/components/homepage/explore/explore';
require('normalize.css');
require('slick-carousel');
>>>>>>> e8153545b07f7c88a34cd10a7b87a20a6bdaeef7
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import Experiences from './views/components/homepage/experiences/experiences';
import HomeGallery from './views/components/homepage/gallery/gallery';
import SpecialOffers from './views/components/homepage/specialoffers/specialoffers';
<<<<<<< HEAD
import SpecialOffers2 from './views/components/specialoffers/specialoffers/specialoffers';
=======
import Mapbox from './views/components/homepage/mapbox/mapbox';

>>>>>>> e8153545b07f7c88a34cd10a7b87a20a6bdaeef7
import './assets/scripts/jquery.fancybox.min.js';
import './assets/scripts/imagesloaded.js';
import './assets/scripts/infinitescroll.js';
window.WOW = require('wowjs').WOW;
$(() => {
  
});

$(document).ready(() => {
  Global.lazyLoad();
<<<<<<< HEAD
  // slide.Slider_owl();
  // slide.Show_button();
  // slide.show_circle();
  // slide.Single_slide();
=======
  slide.Slider_owl();
  slide.Show_button();
  slide.show_circle();
  slide.Single_slide();
>>>>>>> e8153545b07f7c88a34cd10a7b87a20a6bdaeef7
  Experiences.experiencesCarousel();
  HomeGallery.homeGalleryCarousel();
  HomeGallery.homeGalleryCarouselInfo();
  SpecialOffers.specialOffersCarousel();
  SpecialOffers2.showRegions();
  SpecialOffers2.activeLiAndFilter();
  SpecialOffers2.stickyMenu();
  SpecialOffers2.wowJS();
  SpecialOffers2.filterOffers();
  // SpecialOffers2.loadMore();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {
  Header.selectLanguage();
  Mapbox.view();
};
