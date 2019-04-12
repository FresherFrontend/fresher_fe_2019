const slide = {
  Slider_owl: () => {
    $('.hotels_des').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      speed: 1000,
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
          breakpoint: 1000,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });   
  },
  Single_slide: () =>{
    $('.single_slide').slick({
      speed: 300
    });
  }
  ,
  Show_button: () =>{
    var button = document.querySelector('.slick-next');
    var button1 = document.querySelector('.slick-prev');
    var button3 = document.querySelectorAll('button');
    var hotel = document.querySelectorAll('.hotels_des');
    var china = document.getElementById('china');
    console.log(button3);
    
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
  },
  show_circle: () =>{
    var span = document.querySelectorAll(".country_name .name span");
    var name = document.querySelectorAll(".country_name .name");
    var slick_slide = document.querySelectorAll(".country_name .slick-slide");
    var next = document.querySelector('.slick-next');
      
    // for(let i=0 ; i < slick_slide.length ; i++){
    //   slick_slide[i].onclick = () =>{
    //     span[i-1].classList.remove('circle');
    //     span[i+1].classList.remove('circle');
    //     span[i+6].classList.remove('circle');
    //     span[i-6].classList.remove('circle');
    //     name[i].classList.add('selected');
    //     name[i-1].classList.remove('selected');
    //     name[i+1].classList.remove('selected');
    //   }  
    //   // next.onclick = () =>{
    //   //   name[i].classList.add('selected');
    //   //   name[i-1].classList.remove('selected');
    //   //   name[i+1].classList.remove('selected');
    //   //   name[i+6].classList.remove('selected');
    //   //   name[i-6].classList.remove('selected');
    //   // }   
    // }
  }
}

export default slide;