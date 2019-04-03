$(function () {
	$(".menu-desktop .main-menu .menu-item-lv1 a").on("click", function() {
		$(".main-menu .menu-item-lv1 a").removeClass("active");
		$(this).addClass("active");
	});
	

	$("li.menu-item-lv2").on("mouseenter", function() {
		// $("li.menu-item-lv2").removeClass("on_hover");
		$(this).addClass("on_hover");
	});
	$("li.menu-item-lv2").on("mouseleave", function() {
		$("li.menu-item-lv2").removeClass("on_hover");
	});
});