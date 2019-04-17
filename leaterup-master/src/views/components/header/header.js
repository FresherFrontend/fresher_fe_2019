const Header = {
    HomepageHoverFullImageOnMenuItem: () => {
        $(".smpics a").hover(function(){
            $(this).find('p').animate({"height":"100%"}).css({"display":"flex","flex-direction":"column","justify-content":"center"});
        },function(){
            $(this).find('p').css({"height":"fit-content"});
        }
        );
    },
    // HomepageHoverFullSubMenu: (menuClass, menuSub) => {
    //     $(menuClass).hover(function(){
    //             $(menuSub).slideDown(500);
    //         },function(){
    //             $(menuSub).slideUp(500);
    //         }
    //     );
    //     $(menuSub).hover(function(){
    //             $(menuSub).slideDown(500);
    //         },function(){
    //             $(menuSub).slideUp(500);
    //         }
    //     );
    // },

    HeaderHoverMenu:(menuClass, menuSub) =>{
        $(menuClass).hover(function(){
            $(menuSub).css("border-top","2px solid #000");
            },function(){
            $(menuSub).css({"border-top":"none","webkit-transition": "0.5s"});
            }
        );
        $(menuSub).hover(function(){
            $(menuSub).css("border-top","3px solid #000");
            },function(){
                $(menuSub).css({"border-top":"none","webkit-transition": "0.5s"});
            }
        );
    },
    DisapearBottomNav:(menuClass,menuSub,compo)=>{
        $(menuClass).hover(function(){
            $(compo).css({"display":"none","webkit-transition": "1s"});
            },function(){
                $(compo).css({"display":"flex","webkit-transition": "1s"});
                }
        );
        $(menuSub).hover(function(){
            $(compo).css({"display":"none","webkit-transition": "1s"});
            },function(){
                $(compo).css({"display":"flex","webkit-transition": "1s"});
                }
        );
    },
    HamburgerSlideDown:()=>{
        $(".hamburger").click(function(){
            $(".listNav").slideToggle(300);
          });
        $(".hamburger").click(function(){
            $("header").css({"position":"static"});
        });

    }

};
export default Header;

window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("myP").className = "botNav";
      document.getElementById("navbor").style.borderBottom="none";
      document.getElementById("ltherpic").style.height="20px";
      document.getElementById("srchbar").style.top="87px";
    } else {
      document.getElementById("myP").className = "test","navbor";
      document.getElementById("navbor").style.borderBottom="3px solid black";
      document.getElementById("ltherpic").style.height="40px";
      document.getElementById("srchbar").style.top="107px";
    }

  }
window.onresize = function() {
    if (document.body.onresize<768) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            document.getElementsByClassName("botNav").style.display="none";
        }
        
    }
};
