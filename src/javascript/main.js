// scss
import '../scss/style.scss'
// ES 
// dropdown javascript
import { dropdown, navbarShow , navbarHide} from './module/navbar';
const navbarList = document.querySelector('.navbar-list');
const mediaSize = 991;
function collapseSubMenu() {
    navbarList.querySelector('li.active .dropdown-menu').removeAttribute('style');
    navbarList.querySelector('li.active').classList.remove('active');    
}
if(window.innerWidth <= mediaSize) {
    navbarList.addEventListener('click', (e) => {
        const menuItmeHasChildren = e.target.parentElement;
        const dropdownMenu = menuItmeHasChildren.querySelector('.dropdown-menu');
        if(menuItmeHasChildren.classList.contains('active')) {
            collapseSubMenu();
        } else {
            if(e.target.hasAttribute('data-toggle')) {
                if(navbarList.querySelector('li.active')) {
                    collapseSubMenu();
                };
                menuItmeHasChildren.classList.add('active');
                dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';
                console.log(dropdownMenu.scrollHeight);
            };
        }   
    });
};

// navbar javascript 
const barBtn = document.querySelector('.bar-btn');
barBtn.addEventListener('click', navbarShow);
const navbarCloseBtn = document.querySelector('.navbar-close-btn');
navbarCloseBtn.addEventListener('click', navbarHide);
// go top javascript 
import { smoothScrollBackToTop } from '../javascript/module/gotop';
const backToTopButton = document.querySelector('.gotop');
function scrollFunction(){
    if(window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    };
};
window.addEventListener('scroll', scrollFunction);
backToTopButton.addEventListener('click', smoothScrollBackToTop);