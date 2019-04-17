const slide = {
  Slider_owl: () => {
    $('.hotels_des').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      speed: 1200,
      asNavFor: '.country_name'
    });
    $('.country_name').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.hotels_des',
      dots: true,
      speed: 300,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });   
  },
  Single_slide: () =>{
    $('.single_slide').slick({
      speed: 200
    });
  }
  ,
  Show_button: () =>{
    var button = document.querySelector('.slick-next');
    var button1 = document.querySelector('.slick-prev');
    var button3 = document.querySelectorAll('button');
    var hotel = document.querySelectorAll('.hotels_des');
    var china = document.getElementById('china');
    // var a  = document.querySelectorAll('.olapic-select-mobile');
    // console.log(a);
    
    for(let j=0 ; j<hotel.length ; j++){
      hotel[j].onmouseover = () => {
        button.style.opacity = "1";
        button1.style.opacity = "1";
        // button3.style.opacity = "1";
      }
      hotel[j].onmouseout = () => {
        button.style.opacity = "0";
        button1.style.opacity = "0";
      }
    }
    china.onmouseover = () => {
      button.style.display = "none";
      button1.style.display = "none";
    }
    china.onmouseout = () => {
      button.style.display = "block";
      button1.style.display = "block";
    }
    button.onmouseover = () => {
      button.style.opacity = ".9";
      button1.style.opacity = ".9";
    }
    button1.onmouseover = () =>{
      button1.style.opacity = ".9";
      button.style.opacity = ".9";
    }
  }
}

export default slide;