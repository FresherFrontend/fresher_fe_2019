// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import Testiminials from './views/components/testimonials/testimonials';
import Home from './views/components/home/home';

require('normalize.css');
require('slick-carousel');

$(() => {
 // Code here 
 
});

$(document).ready(() => {
    Global.lazyLoad();
    // Portfolio.portfolio_isotope();
    Header.onClickMenu();
    Header.onClickShowMenu();
    Header.onClickActiveMenu();
    Home.slider();
    Testiminials.getAllTestimonials();
    Global.setPageActive('.bgr_content_testimonial','.menu_right_lv1__testimonial');
    
});

$(window).on('resize', () => {
    setTimeout(() => {
        Global.lazyLoad();
    }, 250);
});

window.onload = () => {

};