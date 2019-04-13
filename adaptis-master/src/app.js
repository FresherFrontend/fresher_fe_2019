// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
require('normalize.css');

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
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
