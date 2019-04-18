// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import Testiminials from './views/components/testimonials/testimonials';
import Portfolio from './views/components/portfolio/portfolio';
import Home from './views/components/home/home';
import Footer from './views/components/footer/footer';

require('normalize.css');
require('slick-carousel');
require('lightbox2');

$(() => {
    // Code here 

});

$(document).ready(() => {
    Global.lazyLoad();
    Portfolio.portfolio_isotope();
    Header.onClickMenu();
    Header.onClickShowMenu();
    Header.onClickActiveMenu();
    Home.slider();
    Testiminials.getAllTestimonials();
    Global.setPageActive('.bgr_content_testimonial', '.menu_right_lv1__testimonial');
    Global.setPageActive('.portfolio_page', '.menu_right_lv1__portfolio');
    Global.setPageActive('.services_page', '.menu_right_lv1__services');
    Footer.backToTop();


});

$(window).on('resize', () => {
    setTimeout(() => {
        Global.lazyLoad();
    }, 250);
});

window.onload = () => {

};