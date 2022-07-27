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
    let interval = 3000;
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
})

