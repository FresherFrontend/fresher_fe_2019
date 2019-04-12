// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import Portfolio from './views/components/portfolio/portfolio';

require('normalize.css');

$(() => {
    // Code here 
    Header.onClickMenu();
    Header.onClickShowMenu();
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
// require('normalize.css');
// // require('isotope-layout');

// $(() => {
//     // Code here
// });

// $(document).ready(() => {
//     Global.lazyLoad();
//     
// });

// $(window).on('resize', () => {
//     setTimeout(() => {
//         Global.lazyLoad();
//     }, 250);
// });

// window.onload = () => {

// };