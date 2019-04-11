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
  Header.addClassCurrent();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
