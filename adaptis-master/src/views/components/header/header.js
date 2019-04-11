const Header = {
  toggleDropDownMenu: () => {
    $(".hamburger").on("click", function () {
      $(this).toggleClass("menu_active");
      $('.main-menu nav ul').toggle(200, 'linear');    
    });
  },

  fixedMenu: () => {
    var navbarFix = $("#js-navbar-fixed");
    var headerOffset = navbarFix.offset().top + 100;
    $(window).on('scroll',function () {
        if ($(window).scrollTop() > headerOffset) {
            navbarFix.addClass('fixed').removeClass("unfixed");
        } else {
            navbarFix.addClass('unfixed').removeClass("fixed");
        }
    });
  },

  addClassCurrent: () => {
    $(".header-general .menu-item a").on("click", function() {
      $('.menu-item a').removeClass("current");
      $(this).addClass("current");
    });
  },
};
export default Header;
