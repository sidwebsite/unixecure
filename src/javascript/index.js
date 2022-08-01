// header Scroll
import headerScroll from './module/header';
window.addEventListener('scroll', headerScroll);
// wow.js
import wow from 'wow.js'; 
new wow().init();
// Counter
let started = false;
function countersFun() {
    const counters = document.querySelectorAll('.animate-number');
    let interval = 2000;
    counters.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-target"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
}
const counting = document.querySelector('.counting-container');
window.addEventListener('scroll', () => {
    if(window.scrollY >= (counting.offsetTop - 300)) {
        if(!started) {
            countersFun();
        }
        started = true;
    }
});
// text truncation
import { truncation } from './module/truncation';
truncation('.card-body h5', 25);
// video modal
const bannerVideoBtn = document.querySelector('.banner-video-btn');
const videoModal = document.querySelector('.video-modal');
const videoModalCloseBtn = document.querySelector('.video-modal-close-btn');
const video = document.querySelector('#video');
// const videoSrc = video.src;
bannerVideoBtn.addEventListener('click', (e) => {
    video.src += "?autoplay=1&amp;modestbranding=1&amp;showinfo=0";
    // e.preventDefault();
    document.body.classList.add('modal-open');
    videoModal.classList.add('show');
});
videoModalCloseBtn.addEventListener('click', () => {
    video.src = video.src.replace(/\?autoplay=1&amp;modestbranding=1&amp;showinfo=0/g, '');
    document.body.classList.remove('modal-open');
    videoModal.classList.remove('show')
});
// dashboard images slideshow
let slideIndex = 0;
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');
function showSlides() {	
	slides.forEach((slide, i) => {
		slide.style.display = "none";
	})
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}   
	dots.forEach((dot, i) => {
		dot.className = dot.className.replace(" active", "");
	})
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 5000); 
};
showSlides();