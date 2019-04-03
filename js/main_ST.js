(function ($) {
	"use strict";
	/*Add class active*/
	$(".menu-desktop .main-menu .menu-item-lv1 a").on("click", function() {
		$(".main-menu .menu-item-lv1 a").removeClass("active");
		$(this).addClass("active");
	});

	/*Add class on_hover*/
	$("li.menu-item-lv2").on("mouseenter", function() {	
		$(this).addClass("on_hover");
		$(this).prevAll().removeClass("on_hover");
		$(this).nextAll().removeClass("on_hover");
	});
})(jQuery);