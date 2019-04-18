var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
import '../../../../assets/scripts/imagesloaded.js';
const SpecialOffers2 = {
    showRegions: () => {
        $('button.region-dropdown-toggle').click(function(event) {
          event.preventDefault();
          $('.region-dropdown-menu').toggleClass('open');
        });
        $('body').click(function(event) {
          $(".region-dropdown-menu").removeClass('open');
        });
        $('button.region-dropdown-toggle,.region-dropdown-menu').click(function(event) {
          event.stopPropagation();
        });;
    },
    
    activeLiAndFilter: () => {
      $('.menu-sticky ul li a').click(function(event) {
        event.preventDefault();
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        var category = $(this).data('filter');
        if(category == '.all'){
          $('.new-special-offers').isotope({
          filter:'*'
          });
        }
        else{
          $('.new-special-offers').isotope({
            filter:category
          });
        }
      });
    },
    stickyMenu: () => {
      if($('.menu-sticky ul').length){
        var menuposition = $('.menu-sticky ul').offset().top - 50;
        $(window).scroll(function(event) {
          var bodyposition = $('html').scrollTop();
          if(bodyposition >= menuposition){
            $('.menu-sticky').addClass('is-sticky');
          }
          else{
            $('.menu-sticky').removeClass('is-sticky');
          }
        });
      }
    },
    filterOffers: () => {
      jQueryBridget( 'isotope', Isotope, $ );
      $('.new-special-offers').isotope({
        // options
        itemSelector: 'a.new-special-offers-item'
      });
    },
    wowJS: () => {
      new WOW().init();
    },
    loadMore: () => {
      //-------------------------------------//
  // init Isotope
      var $grid = $('.new-special-offers').isotope({
        itemSelector: 'none', // select none at first
        // nicer reveal transition
        visibleStyle: { transform: 'translateY(0)', opacity: 1 },
        hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
      });

      // initial items reveal
      $grid.imagesLoaded( function() {
        $grid.removeClass('are-images-unloaded');
        $grid.isotope( 'option', { itemSelector: 'a.new-special-offers-item' });
        var $items = $grid.find('a.new-special-offers-item');
        $grid.isotope( 'appended', $items );
      });

      //-------------------------------------//
      // hack CodePen to load pens as pages

      var nextPenSlugs = [
        '202252c2f5f192688dada252913ccf13',
        'a308f05af22690139e9a2bc655bfe3ee',
        '6c9ff23039157ee37b3ab982245eef28',
      ];

      function getPenPath() {
        var slug = nextPenSlugs[ this.loadCount ];
        if ( slug ) {
          return 'https://s.codepen.io/desandro/debug/' + slug;
        }
      }

      //-------------------------------------//
      // init Infinte Scroll

      // get Isotope instance
      var iso = $grid.data('isotope');

      $grid.infiniteScroll({
        path: getPenPath,
        status: '.page-load-status',
        // do not set append
        // do not set outlayer
      });

      // append items on load
      $grid.on( 'load.infiniteScroll', function( event, response, path ) {
        var $items = $( response ).find('a.new-special-offers-item');
        // append items after images loaded
        $items.imagesLoaded( function() {
          $grid.append( $items );
          $grid.isotope( 'insert', $items );
        });
      });
    }
    
  };
  export default SpecialOffers2;
  