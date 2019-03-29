$(document).ready(function() {
	$('li.dropdown-lv1').hover(function() {
		//them active
		$(this).addClass('active');
		//bo active cac li khac
		$(this).siblings().removeClass('active');
		//them active vao the a dau tien
		$(this).find('li.dropdown-lv3:nth-of-type(1)>a').addClass('active');
		//khi active thi menu ben phai xo ra theo
		$('a.active').siblings('.dropdown-lv4').css('display', 'block');
		//menu xo xuong
		$(this).children('ul.dropdown-lv2').slideToggle(400);
	}, function() {
		$(this).children('ul.dropdown-lv2').slideUp(100);
	});
	$('li.dropdown-lv3').hover(function() {
		$(this).addClass('active');
		$(this).children('a').addClass('active');
		//menu ben phai xo ra
		$(this).children('ul.dropdown-lv4').css('display', 'block');
	}, function() {
		$(this).children('ul.dropdown-lv4').css('display', 'none');
		$(this).children('a').removeClass('active');
	});

	//hover vao body thi bo active o li
	$('body').hover(function() {
		$('li.dropdown-lv1').removeClass('active');
	});
	//khi hover vào ô danh mục thì k chạy đoạn js khi hover vào body
	$('li.dropdown-lv1').hover(function(event) {
		event.stopPropagation();
	});

});
