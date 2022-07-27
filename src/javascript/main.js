// scss
import '../scss/style.scss'
// ES mob
import { dropdown, navbarShow , navbarHide} from './module/navbar';
// 
window.addEventListener('click', dropdown);
// navbar
const barBtn = document.querySelector('.bar-btn');
barBtn.addEventListener('click', navbarShow);
const navbarCloseBtn = document.querySelector('.navbar-close-btn');
navbarCloseBtn.addEventListener('click', navbarHide);