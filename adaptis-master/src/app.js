// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import Hover from './views/components/thework/thework';
require('normalize.css');
require('../src/assets/scripts/snake');
$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  Hover.hoverDir();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {

};
