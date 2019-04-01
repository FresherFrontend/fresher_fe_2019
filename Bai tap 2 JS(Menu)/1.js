$(document).ready(function() {
	//an het noi dung cac ul lv4 dang hien thi
	$('ul.dropdown-lv4').css('display', 'none');
	//them active vao the a dau tien
	$("li.dropdown-lv1").find('li.dropdown-lv3:nth-of-type(1)>a').addClass('active');
	//khi the a active thi menu ben phai xo ra theo
	$('a.active').siblings('.dropdown-lv4').css('display', 'block');
		
	$('li.dropdown-lv3').hover(function() {
		//bo het active cac a ben trong khac
		$(this).siblings().find('a.active').removeClass('active');
		//them active vao the a ben trong
		$(this).children('a').addClass('active');
		//an het noi dung cac ul lv4 dang hien thi
		$(this).siblings().find('a').siblings('ul.dropdown-lv4').css('display', 'none');
		//hien thi noi dung ul lv4 tuong ung
		$(this).children('ul.dropdown-lv4').css('display', 'block');
	});

	//menu dien thoai
	$('.menu-button').click(function(event) {
		$('.menu-mobile').toggleClass('show');
		$('.dark-background').toggleClass('show');
	});
	$('.dark-background').click(function(event) {
		$(this).toggleClass('show');
		$('.menu-mobile').toggleClass('show');
		$('.bar1').toggleClass("rotate1");
		$('.bar2').toggleClass("rotate2");
		$('.bar3').toggleClass("rotate3");
	});
	$('.next-lv').click(function(event) {
		$(this).next().addClass('show');
	});
	$('.goback-button').click(function(event) {
		$(this).parent().toggleClass('show');
	});
	$('.close-button').click(function(event) {
		$('.menu-mobile').toggleClass('show');
		$('.dark-background').toggleClass('show');
		$('.bar1').toggleClass("rotate1");
		$('.bar2').toggleClass("rotate2");
		$('.bar3').toggleClass("rotate3");
	});
	$('.menu-button').click(function(event) {
		$('.bar1').addClass("rotate1");
		$('.bar2').addClass("rotate2");
		$('.bar3').addClass("rotate3");
	});
	//search
	$('.close-search').click(function(event) {
		$('.search-result').removeClass('show');
	});
	$('li.search a').click(function(event) {
		$('.search-result').addClass('show');
		return false;
	});
	$('a.close-search-btn').click(function(event) {
		$('.search-result').removeClass('show');
		return false;
	});
});
