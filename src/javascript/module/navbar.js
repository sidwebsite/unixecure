export function dropdown(e) {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if(e.target.matches('.dropdown') === true) {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
};


const navbar = document.querySelector('.navbar');
export function navbarShow() {
    navbar.classList.add('navbar-active');
};
export function navbarHide() {
    navbar.classList.remove('navbar-active');
};