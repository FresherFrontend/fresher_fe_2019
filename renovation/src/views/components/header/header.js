const Header = {
    toggleLanguageDropDownDesktop: () => {
        const languageBtn = document.querySelector('#dropdownLanguageBtn');
        const languageList = document.querySelector('#dropdownLanguageList');
        if (languageBtn && languageList) {
            languageBtn.addEventListener('click', (evt) => {
                evt.preventDefault();
                evt.stopPropagation();
                languageList.classList.toggle('open-language');
            });
            document.querySelector('body').addEventListener('click', () => {
                if (languageList.classList.contains('open-language')) languageList.classList.remove('open-language');
            });
        }
    },
    handleClickHamburgerOpenNav: () => {
        const hamburgerBtn = document.querySelector('.navigation button.navigation__hamburger-btn');
        const navMain = document.querySelector('.navigation nav');
        if (hamburgerBtn && navMain) {
            hamburgerBtn.addEventListener('click', (evt) => {
                evt.preventDefault();
                evt.stopPropagation();
                navMain.classList.add('nav__is-open');
                document.querySelector('body').classList.add('body__is__nav-open');
                document.querySelector('html').classList.add('body__is__nav-open');
            });
        }
    },
    handleClickCloseNav: () => {
        const closeNavs = document.querySelectorAll('.navigation .navigation__close-button button, .navigation__layout');
        const navMain = document.querySelector('.navigation nav');
        if (closeNavs && navMain) {
            [].forEach.call(closeNavs, (closeNav) => {
                closeNav.addEventListener('click', (evt) => {
                    evt.preventDefault();
                    evt.stopPropagation();
                    navMain.classList.remove('nav__is-open');
                    document.querySelector('body').classList.remove('body__is__nav-open');
                    document.querySelector('html').classList.remove('body__is__nav-open');
                });
            });
        }
    },


    onClickMenu: () => {
        // window.onClickMenu = Header.onClickMenu;
        var menuLv1s = document.querySelectorAll("span.btn_menu_lv2");
        var menuLv2 = document.querySelector("ul.ul_menu_lv2");
        var menuMobi = document.querySelector(".menu_mobile");
        menuLv1s.forEach(menuLv1 => {
            // var styleRotateLv1 = menuLv1.style.transform;
            // var styleDisplayLv2 = menuLv2.style.display;
            menuLv1.addEventListener('click', () => {
                if ("rotate(180deg)" == menuLv1.style.transform) {
                    menuLv1.style.transform = "rotate(0deg)";
                    menuLv2.style.height = "0";
                    menuMobi.style.height = "389.69px";
                } else {
                    menuLv1.style.transform = "rotate(180deg)";
                    menuLv2.style.height = "169px";
                    menuMobi.style.height = "558.69px";

                }
            });
        })
    },

    onClickShowMenu: () => {
        var menu = document.querySelector(".mobile_menu");
        var menuMobi = document.querySelector(".menu_mobile");
        menu.onclick = () => {
            let menu2 = document.querySelector(".mobile_menu");
            let getClassMoiMenu2 = menu2.getAttribute("class");

            if (getClassMoiMenu2 == "mobile_menu mobile_menu_icon") {
                menu2.setAttribute("class", "mobile_menu mobile_menu_icon_x");
                menuMobi.style.height = "389.69px";
            } else {
                menu2.setAttribute("class", "mobile_menu mobile_menu_icon");
                menuMobi.style.height = "0";
            }
        }
    }

};
export default Header;