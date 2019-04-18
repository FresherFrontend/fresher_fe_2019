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
  Header.selectHotel();
  Header.selectRoom();
  Header.selectAdult();
  Header.selectChildren();
  Header.selectAge();
  Header.selectTypeCode();
  Header.scrollTopHeader();
  // Header.showBooking();
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
  Header.selectHotel();
  Header.selectRoom();
  Header.selectAdult();
  Header.selectChildren();
  Header.selectAge();
  Header.scrollTopHeader();
  Header.selectTypeCode();
  // Header.showBooking();
  Header.check();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
  Header.resetStart();
});

window.onload = () => {
  Header.selectLanguage();
  Header.selectDate();
  Mapbox.view();
  Header.scrollTopHeader();
  // Header.showBooking();
  Header.showMenu();
  Header.clickButton();
  Header.check();
};
