// scss
import '../scss/style.scss'
// ES 
// dropdown javascript
import { dropdown, navbarShow , navbarHide} from './module/navbar';
window.addEventListener('click', dropdown);
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