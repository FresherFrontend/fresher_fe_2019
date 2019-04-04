 $(document).ready(function(){
  $(".parent1").hover(function(){
    var src = $(this).attr('src');
    $(".dropdown", this).slideDown();
    $('.img').attr('src','https://d26s194ubor3a7.cloudfront.net/-/media/solaniwa/cmn/icn-nav-01.svg?d=20190315t025445');
    $(this).css("color", "black");
  }, function(){
    $(".dropdown", this).stop().slideUp();
    $('.img').attr('src','https://d26s194ubor3a7.cloudfront.net/-/media/solaniwa/cmn/icn-nav-01-white.svg?d=20190315t025446');
    $(this).css("color", "white");
  });

  $(".icon").hover(function(){
    $(".label", this).css("display", "block");
    $(".label", this).jAnimate('slideInRight'); 
    $(".animated").css("animate-delay", "0s"); 
  }, function(){
    $(".label", this).jAnimate('slideInLeft');
    $(".label", this).css("display", "none");
    $(".animated").css("animate-delay", "0s");
  });

  $(".logo1").hover(function(){
    $(".logo2").slideDown();    
  }, function(){
    $(".logo2").stop().slideUp();
  });
});