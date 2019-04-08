// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import Portfolio from './views/components/portfolio/portfolio';
require('normalize.css');
// require('isotope-layout');

$(() => {
    // Code here
});

$(document).ready(() => {
    Global.lazyLoad();
    Portfolio.portfolio_isotope();
});

$(window).on('resize', () => {
    setTimeout(() => {
        Global.lazyLoad();
    }, 250);
});

window.onload = () => {

};