/*----------------------------------------------------*/
/*  Portfolio Isotope js
/*----------------------------------------------------*/
// var isotope = require('isotope-layout/dist/isotope.pkgd.min');
var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');

const Portfolio = {
    portfolio_isotope: () => {
        jQueryBridget('isotope', Isotope, $);
        if ($('.portfolio_filter ul li').length) {
            // Add isotope click function
            $(".portfolio_filter ul li").on('click', function() {
                $(".portfolio_filter ul li").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr("data-filter");
                $(".grid_portfolio_area").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
            });
        }
    },

};

export default Portfolio;