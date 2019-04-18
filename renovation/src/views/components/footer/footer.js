const Footer = {
    // back_to_top
    backToTop:()=>{
		$(window).scroll(function(event) {
			var top = $(window).scrollTop();
			if(top >=150) {
				$('#back_to_top').css({right:"10px"});
			}else{
				$('#back_to_top').css({right:"-200px"});
			}
		});
		$('#back_to_top').click(function(event) {
			/* Act on the event */
			event.preventDefault();
			$('body, html').animate({scrollTop:0}, 1000);
		});
    }
    
}
export default Footer;