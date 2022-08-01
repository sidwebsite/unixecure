/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/javascript/module/gotop.js":
/*!****************************************!*\
  !*** ./src/javascript/module/gotop.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "smoothScrollBackToTop": () => (/* binding */ smoothScrollBackToTop)
/* harmony export */ });
function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;
    
    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    };
};

function easeInOutCubic(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
};

/***/ }),

/***/ "./src/javascript/module/navbar.js":
/*!*****************************************!*\
  !*** ./src/javascript/module/navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dropdown": () => (/* binding */ dropdown),
/* harmony export */   "navbarHide": () => (/* binding */ navbarHide),
/* harmony export */   "navbarShow": () => (/* binding */ navbarShow)
/* harmony export */ });
function dropdown(e) {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if(e.target.matches('.dropdown') === true) {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
};


const navbar = document.querySelector('.navbar');
function navbarShow() {
    navbar.classList.add('navbar-active');
};
function navbarHide() {
    navbar.classList.remove('navbar-active');
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/javascript/main.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _module_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/navbar */ "./src/javascript/module/navbar.js");
/* harmony import */ var _javascript_module_gotop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../javascript/module/gotop */ "./src/javascript/module/gotop.js");
// scss

// ES 
// dropdown javascript

window.addEventListener('click', _module_navbar__WEBPACK_IMPORTED_MODULE_1__.dropdown);
// navbar javascript 
const barBtn = document.querySelector('.bar-btn');
barBtn.addEventListener('click', _module_navbar__WEBPACK_IMPORTED_MODULE_1__.navbarShow);
const navbarCloseBtn = document.querySelector('.navbar-close-btn');
navbarCloseBtn.addEventListener('click', _module_navbar__WEBPACK_IMPORTED_MODULE_1__.navbarHide);
// go top javascript 

const backToTopButton = document.querySelector('.gotop');
function scrollFunction(){
    if(window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    };
};
window.addEventListener('scroll', scrollFunction);
backToTopButton.addEventListener('click', _javascript_module_gotop__WEBPACK_IMPORTED_MODULE_2__.smoothScrollBackToTop);
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



})();

/******/ })()
;
//# sourceMappingURL=main.js.map?b2714e4f