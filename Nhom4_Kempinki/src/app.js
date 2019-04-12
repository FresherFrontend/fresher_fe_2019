// import './assets/styles/animation.css';
import slide from './views/components/homepage/explore/explore';
require('normalize.css');
require('slick-carousel');
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import Experiences from './views/components/homepage/experiences/experiences';
import HomeGallery from './views/components/homepage/gallery/gallery';
import SpecialOffers from './views/components/homepage/specialoffers/specialoffers';
import Mapbox from './views/components/homepage/mapbox/mapbox';

import './assets/scripts/jquery.fancybox.min.js';
require('normalize.css');
require('slick-carousel');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  slide.Slider_owl();
  slide.Show_button();
  slide.show_circle();
  slide.Single_slide();
  Experiences.experiencesCarousel();
  HomeGallery.homeGalleryCarousel();
  HomeGallery.homeGalleryCarouselInfo();
  SpecialOffers.specialOffersCarousel();
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
