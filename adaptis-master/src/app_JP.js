// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
require('normalize.css');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  Header.toggleDropDownMenu();
  Header.fixedMenu();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
