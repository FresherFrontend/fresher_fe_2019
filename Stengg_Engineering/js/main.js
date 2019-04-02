
document.addEventListener("DOMContentLoaded", function(){
	onMouseoverListLv2();
	
});

function onMouseoverListLv2(){
	var getElementLv2s = document.getElementsByClassName("list_dropdown_lv2");
	for (var i = 0; i < getElementLv2s.length; i++) {
		let getElementLv2 = getElementLv2s[i]

		getElementLv2.onmouseover = function(){
			for (var j = 0; j < getElementLv2s.length; j++) {
				let subElementLv2 = getElementLv2s[j]
				subElementLv2.setAttribute("class", "list_dropdown_lv2")
			}
			this.setAttribute("class","list_dropdown_lv2 active")
		}

	}
}
var getSpanMenuIcons = document.querySelectorAll(".menu_icon")	
var getMenuMobis = document.querySelectorAll(".background_menu_mobi")
function onClickMenuIcon(){
	for (var j = 0; j < getSpanMenuIcons.length; j++) {
		let getSpanMenuIcon2 = getSpanMenuIcons[j];
		getSpanMenuIcon2.setAttribute("class","menu_icon active_icon");
	}


	for (var j = 0; j < getMenuMobis.length; j++) {
		let getMenuMobi = getMenuMobis[j]

		getMenuMobi.setAttribute("class","background_menu_mobi width_0")
	}
	
}

function onclickBackPC(){
	for (var j = 0; j < getSpanMenuIcons.length; j++) {
		let getSpanMenuIcon2 = getSpanMenuIcons[j];
		getSpanMenuIcon2.setAttribute("class","menu_icon");
	}


	for (var j = 0; j < getMenuMobis.length; j++) {
		let getMenuMobi = getMenuMobis[j]

		getMenuMobi.setAttribute("class","background_menu_mobi")
	}
}






