// import './assets/styles/animation.css';
// import slide from './views/components/homepage/explore/explore';
import './assets/scripts/infinitescroll.js';
require('normalize.css');
require('slick-carousel');
import './assets/scripts/imagesloaded.js';

require('isotope-layout');
require('masonry-layout');
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import Experiences from './views/components/homepage/experiences/experiences';
import HomeGallery from './views/components/homepage/gallery/gallery';
import SpecialOffers from './views/components/homepage/specialoffers/specialoffers';
import SpecialOffers2 from './views/components/specialoffers/specialoffers/specialoffers';
import AboutUs from './views/components/aboutus/aboutus/aboutus';
import slide from './views/components/homepage/explore/explore';
import './assets/scripts/jquery.fancybox.min.js';


window.WOW = require('wowjs').WOW;
$(() => {
  
});

$(document).ready(() => {
  Global.lazyLoad();
  
  // slide.Show_button();
  // slide.show_circle();
  // slide.Single_slide();
  Experiences.experiencesCarousel();
  HomeGallery.homeGalleryCarousel();
  HomeGallery.homeGalleryCarouselInfo();
  SpecialOffers.specialOffersCarousel();
  
  SpecialOffers2.showRegions();
  SpecialOffers2.activeLiAndFilter();
  SpecialOffers2.stickyMenu();
  SpecialOffers2.wowJS();
  SpecialOffers2.filterOffers();
  SpecialOffers2.loadMore();
  
  slide.Slider_owl();
  AboutUs.Slider_owl2();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
