// import './assets/styles/animation.css';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import slide from './views/components/homepage/explore/explore';
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
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
