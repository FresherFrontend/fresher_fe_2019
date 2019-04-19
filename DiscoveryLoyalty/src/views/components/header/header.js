var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}


function clickOnOpenSidebarBtn() {
  var openSideBarBtn = document.querySelector('#navbar .open-sidenav');
  if (openSideBarBtn) {
    openSideBarBtn.addEventListener('click', function(e){
      openNav();
    });
  }
};

clickOnOpenSidebarBtn();

function openNav() {
  document.getElementById("mySidenav").style.width = "280px";
}

function clickOnCloseSidebarBtn(){
  var closeSideBarBtn = document.querySelector('#navbar .closebtn');
  if (closeSideBarBtn) {
    closeSideBarBtn.addEventListener('click', function(){
      closeNav();
    });
  }
};

clickOnCloseSidebarBtn();

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



function clickOnOpenLanguage(){
  var openLanguage = document.querySelector('#navbar .dropbtn');
  if(openLanguage){
      openLanguage.addEventListener('click', function(){
          openLanguageSelector();
      });    
  }
};

clickOnOpenLanguage();

function openLanguageSelector() {
  document.getElementById("myDropdown").classList.toggle("show");
}