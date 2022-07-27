
export default function headerScroll() {
    const header = document.querySelector('.header');
    const win = window.pageYOffset;
    if(win > 50) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
}