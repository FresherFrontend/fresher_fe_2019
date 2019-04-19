const Chaps ={
    SliderChap:()=>{
        var currIndex;
        $('.slider-img:first').fadeIn();
        $('.bullets').click(function() {
        $('.bullets').removeClass('selected');
        $(this).addClass('selected');
        currIndex = $(this).index()+1;
        $('.slider-img').fadeOut(0);
        $('.slider-img:nth-child('+currIndex+')').fadeIn(0);
        });
    },

    SlideInfoProduct:()=>{
    
      $('.tittle').on('click', function() {
        $('.productDetail .content').slideUp(300)
        $(this).parent('.productDetail').find('.content').slideDown(300)
        
      })
        
    }
};
export default Chaps;

var check_negative = function () {
    if ($("input[name=quant]").val() == "0") {
      $("#minus").prop("disabled", true)
    } else {
      $("#minus").prop("disabled", false)
    }
  }
  
  check_negative()
  
  $(".btn-number").on("click", function() {
    if ($(this).data("type") == "plus") {
      var current_val = $("input[name=quant]").val()
      $("input[name=quant]").val(parseInt(current_val) + 1)
      check_negative()
    }
    if ($(this).data("type") == "minus") {
      var current_val = $("input[name=quant]").val()
      $("input[name=quant]").val(parseInt(current_val) - 1)
      check_negative()
    }
  })
  
  $("#inputGroupSelect01").on("change", function() {
    if (parseInt($(this).val()) <= 30) {
      $("#select-quant").attr("hidden", true)
      console.log($("#select-quant"))
    } else {
      $("#select-quant").attr("hidden", false)
      console.log($("#select-quant"))
    }
  })


  // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}