document.addEventListener("DOMContentLoaded", function() {

	var getsiblingAll = function (elem) {
		let siblingAll = [];
		let sibling = elem.parentNode.firstElementChild;

		while (sibling) {
			if (sibling.nodeType === 1 && sibling !== elem) {
				siblingAll.push(sibling);
			}
			sibling = sibling.nextElementSibling;
		}
		return siblingAll;

	};
	var getschidrenAll = function (elem) {
		let siblingAll = [];
		let sibling = elem.parentNode.firstElementChild;

		while (sibling) {
			if (sibling.nodeType === 1) {
				siblingAll.push(sibling);
			}
			sibling = sibling.nextElementSibling;
		}
		return siblingAll;

	};

	var activeHover = document.querySelectorAll('.dropdown-lv1');
	for (let i = 0; i < activeHover.length; i++) {
		activeHover[i].addEventListener("mouseover", function(){
			this.lastElementChild.classList.add('active');
		})
		activeHover[i].addEventListener("mouseout", function(){
			this.lastElementChild.classList.remove('active');
		})
	}
	var hover = document.querySelectorAll('.item-dropdown-lv2');
	for (let i = 0; i < hover.length; i++) {
		hover[i].addEventListener("mouseover", function(){
			this.classList.add('on-hover');
			let siblingAll = getsiblingAll(this);
			for (let i = 0; i < siblingAll.length; i++) {
				siblingAll[i].classList.remove('on-hover')
			}
		})
	}

	var iconBar = document.querySelector('.icon-bar');
	var wrapOverlay = document.querySelector('.wrap');
	var closeSlide = document.querySelector('.close-btn-box span')

	iconBar.addEventListener("click", function(){
		this.classList.add('open')
		document.querySelector('.nav-mobile-header').classList.add('show-up');
		wrapOverlay.classList.add('overlay-body');	
	});

	wrapOverlay.addEventListener("click", function(){
		document.querySelector('.nav-mobile-header').classList.remove('show-up');	
		this.classList.remove('overlay-body');
		iconBar.classList.remove('open');
	})
	closeSlide.addEventListener("click", function(){
		document.querySelector('.nav-mobile-header').classList.remove('show-up');	
		wrapOverlay.classList.remove('overlay-body');
		iconBar.classList.remove('open');
	})

	var showMenuLv2 = document.querySelectorAll('.next-view-lv2');
	for (let i = 0; i < showMenuLv2.length; i++) {
		let menuLv2 = showMenuLv2[i].nextElementSibling;
		if (menuLv2) {
			showMenuLv2[i].addEventListener("click", function(){
				menuLv2.classList.add('show-up');
				var content = this.parentNode.firstElementChild.innerHTML;
				this.parentNode.lastElementChild.firstElementChild.innerHTML = content;
			})
		}	
	}
	var goBackLv1 = document.querySelectorAll('.go-back-lv1');
	for (var i = 0; i < goBackLv1.length; i++) {
		goBackLv1[i].addEventListener("click", function(){
			this.parentNode.classList.remove('show-up');
		})
	}
	var showMenuLv3 = document.querySelectorAll('.next-view-lv3');
	for (let i = 0; i < showMenuLv3.length; i++) {
		let menuLv3 = showMenuLv3[i].nextElementSibling;
		if (menuLv3) {
			showMenuLv3[i].addEventListener("click", function(){
				menuLv3.classList.add('show-up');
				var content = this.parentNode.firstElementChild.innerHTML;
				this.parentNode.lastElementChild.firstElementChild.innerHTML = content;
			})
		}	
	}

	var goBackLv2 = document.querySelectorAll('.go-back-lv2');
	for (var i = 0; i < goBackLv2.length; i++) {
		goBackLv2[i].addEventListener("click", function(){
			this.parentNode.classList.remove('show-up');
		})
	}

	var searchHeader = document.querySelector('.search-header-box');
	searchHeader.addEventListener("click", function(){
		document.querySelector('.search-results-header').classList.add('d-block');
	})	
	document.querySelector('.search-header-device').addEventListener("click", function(){
		document.querySelector('.search-results-header').classList.add('d-block');
	})
	document.querySelector('.close-search-header-box').addEventListener("click", function(){
		document.querySelector('.search-results-header').classList.remove('d-block');
	})
});
