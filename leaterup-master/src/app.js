// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import Footer from './views/components/footer/footer';
import Chaps from './views/components/chapsComponent/chaps/chap';
require('normalize.css');

$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
  //header---
  Header.HomepageHoverFullImageOnMenuItem();

  // Header.HomepageHoverFullSubMenu('#JACKETINDX', '#JACKETSUB');
  // Header.HomepageHoverFullSubMenu('#CHAPINDX', '#CHAPSUB');

  Header.HeaderHoverMenu('#CHAPINDX', '.subNav');
  Header.HeaderHoverMenu('#JACKETINDX', '.subNav');

  Header.DisapearBottomNav('#JACKETINDX','#JACKETSUB','.botNav');
  Header.DisapearBottomNav('#CHAPINDX','#CHAPSUB','.botNav');

  Header.HamburgerSlideDown();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {
};
