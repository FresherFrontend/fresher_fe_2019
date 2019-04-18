// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import Slider from './views/components/slider/slider';
// import Hover from './views/components/the_work_my/the_work_my';
import Hover from './views/components/thework/thework';
import Wow from './views/components/wow/wow';
require('normalize.css');
require('slick-carousel');
require('../src/assets/scripts/snake');
// require('../src/assets/scripts/jquery.hoverdir');
// require('../src/assets/scripts/modernizr');


$(() => {
  // Code here
});
$(document).ready(() => {
  Global.lazyLoad();
  Header.toggleDropDownMenu();
  Header.fixedMenu();
  Global.addClassCurrent('.theWorkPage', '#the_work');
  Global.addClassCurrentFooter('.theWorkPage', '#the_work_1');
  Global.addClassCurrent('.theAgencyPage', '#the_agency');
  Global.addClassCurrentFooter('.theAgencyPage', '#the_agency_1');
  Global.addClassCurrent('.theContactPage', '#contact');
  Global.addClassCurrentFooter('.theContactPage', '#contact_1');
  Global.changeColorLogo('.theWorkPage');
  Global.changeColorLogo('.theContactPage');
  Wow.useWow();
  Slider.showSlider();
  // Hover.hoverDiv();
  Hover.hoverDir();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
