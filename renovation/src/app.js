// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import Testiminials from './views/components/testimonials/testimonials';
require('normalize.css');

$(() => {
 // Code here 
 Header.onClickMenu();
 Header.onClickShowMenu();
 Header.onClickActiveMenu();
 Testiminials.getAllTestimonials();
 Testiminials.setTestimonialPageActive();
});

$(document).ready(() => {
    Global.lazyLoad();
    // Portfolio.portfolio_isotope();
});

$(window).on('resize', () => {
    setTimeout(() => {
        Global.lazyLoad();
    }, 250);
});

window.onload = () => {

};