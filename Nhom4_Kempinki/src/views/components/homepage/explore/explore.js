const slide = {
  Slider_owl: () => {
    $('.hotels_des').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      speed: 1500,
      asNavFor: '.country_name'
    });
    $('.country_name').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.hotels_des',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3
          },
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });   
  },
  Single_slide: () =>{
    $('.single_slide').slick();
  }
  ,
  Show_button: () =>{
    var button = document.querySelector('.slick-next');
    var button1 = document.querySelector('.slick-prev');
    var hotel = document.querySelectorAll('.hotels_des');
    var china = document.getElementById('china');

    for(let j=0 ; j<hotel.length ; j++){
      hotel[j].onmouseover = () => {
        button.style.opacity = "1";
        button1.style.opacity = "1";
      }
      hotel[j].onmouseout = () => {
        button.style.opacity = "0";
        button1.style.opacity = "0";
      }
    }
  //   china.onmouseover = () => {
  //     button.style.display = "none";
  //  }
    
    // hotel.onmouseover = () => {
    //   button.style.opacity = "1";
    //   button1.style.opacity = "1";
    // }
    // hotel.onmouseout = () => {
    //   button.style.opacity = "0";
    //   button1.style.opacity = "0";
    // }
    button.onmouseover = () =>{
      button.style.opacity = "1";
      button1.style.opacity = "1";
    }
    button1.onmouseover = () =>{
      button1.style.opacity = "1";
      button.style.opacity = "1";
    }
  },
  show_circle: () =>{
    var span = document.querySelectorAll(".country_name .name span");
    var name = document.querySelectorAll(".country_name .name");
    var slick_slide = document.querySelectorAll(".country_name .slick-slide");
    for(let i=0 ; i < slick_slide.length ; i++){
      slick_slide[i].onclick = () =>{
        // span[i+1].classList.remove('circle');
        name[i].classList.add('selected');
      }     
    }
  }
}

export default slide;