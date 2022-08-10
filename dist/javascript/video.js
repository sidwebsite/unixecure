/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/module/pagination.js":
/*!*********************************************!*\
  !*** ./src/javascript/module/pagination.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pagination": () => (/* binding */ pagination)
/* harmony export */ });
/* harmony import */ var _truncation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./truncation */ "./src/javascript/module/truncation.js");
// text truncation

const paginationClass = document.querySelector('.pagination');
const newsList = document.querySelector('.news-list');
function pagination(listData, nowPage) {
    const dataTotal = listData.length;
    // 要顯示在畫面上的資料數量，預設每一頁只顯示幾筆資料。
    const perPage = 9;
    // page 按鈕總數量公式 總資料數量 / 每一頁要顯示的資料
    const pageTotal = Math.ceil(dataTotal / perPage)
    // current page
    let currentPage = nowPage;
    // 最小值
    const minData = (currentPage * perPage) - perPage + 1; 
    // 最大值
    const maxData = (currentPage * perPage);
    // 先建立新陣列
    const data = [];
    listData.forEach((item, index) => {
        const num = index + 1;
        if ( num >= minData && num <= maxData) {
            data.push(item);
        };
    });
    // 用物件方式來傳遞資料
    const page = {
        pageTotal,
        currentPage,
        hasPage: currentPage > 1,
        hasNext: currentPage < pageTotal,
    };
    displayData(data);
    pageBtn(page);
}
// display data
function displayData(data) {
    let str = '';
    data.forEach( item => {
        const listContent = `<div class="col-md-4 list" data-date="${item.date}">
        <div class="card mb-5">
            <a href="${item.link}">
                <div class="card-img">
                    <img src="${item.image}" alt="">
                </div>
                <div class="card-body">
                    <h5>${item.title}</h5>
                </div>
            </a>
        </div>
    </div>`;
        str += listContent;
    });
    
    newsList.innerHTML = str;
    (0,_truncation__WEBPACK_IMPORTED_MODULE_0__.truncation)('.card-body h5', 25);
};

// page button
function pageBtn(page){
    let str = '';
    const total = page.pageTotal;
    // 顯示上一頁按鈕
    if(page.hasPage) {
        str += `<li class="page-item"><a class="page-link" href="javascript:;" data-page="${Number(page.currentPage) - 1}"><i class="fa-solid fa-caret-left"></i>上一頁</a></li>`
    } else {
        str += ``;
    };
    // 顯示當前頁數按鈕
    for(let i = 1; i <= total; i++){
        if(Number(page.currentPage) === i) {
            str +=`<li class="page-item active"><a class="page-link" href="javascript:;" data-page="${i}">${i}</a></li>`
        } else {
            str +=`<li class="page-item"><a class="page-link" href="javascript:;" data-page="${i}">${i}</a></li>`;
        };
    };
    // 顯示下一頁按鈕
    if(page.hasNext) {
        str += `<li class="page-item"><a class="page-link" href="javascript:;" data-page="${Number(page.currentPage) + 1}">下一頁<i class="fa-solid fa-caret-right"></i></a></li>`
    } else {
        str += ``;
    };      
    paginationClass.innerHTML = str;
};

/***/ }),

/***/ "./src/javascript/module/sort.js":
/*!***************************************!*\
  !*** ./src/javascript/module/sort.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decrease": () => (/* binding */ decrease),
/* harmony export */   "increase": () => (/* binding */ increase)
/* harmony export */ });
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination */ "./src/javascript/module/pagination.js");

const newsList = document.querySelector('.news-list');
const sortBtn = document.querySelector('.sort-btn');
const sortText = document.querySelector('.sort-text');
// 最新
function increase(listData, sortData, currentPage) {
    sortText.textContent = '最新';
    newsList.classList.remove('increase');
    newsList.classList.add('decrease');
    sortBtn.querySelector('.fa-solid').classList.add('fa-arrow-up-wide-short');        
    sortBtn.querySelector('.fa-solid').classList.remove('fa-arrow-down-wide-short');

    listData.sort((a, b) => {
        if(a.date < b.date) return 1;
        if(a.date > b.date) return -1;
        return 0;
    });
    sortData = listData;
    (0,_pagination__WEBPACK_IMPORTED_MODULE_0__.pagination)(sortData, currentPage);
}
// 最舊
function decrease(listData, sortData, currentPage) {
    sortText.textContent = '最舊';
        newsList.classList.add('increase');
        newsList.classList.remove('decrease');
        sortBtn.querySelector('.fa-solid').classList.remove('fa-arrow-up-wide-short');        
        sortBtn.querySelector('.fa-solid').classList.add('fa-arrow-down-wide-short');
        // decrease();
        listData.sort((a, b) => {
            if(a.date < b.date) return -1;
            if(a.date > b.date) return 1;
            return 0;
        });
        sortData = listData;
        (0,_pagination__WEBPACK_IMPORTED_MODULE_0__.pagination)(sortData, currentPage);
};

/***/ }),

/***/ "./src/javascript/module/truncation.js":
/*!*********************************************!*\
  !*** ./src/javascript/module/truncation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "truncation": () => (/* binding */ truncation)
/* harmony export */ });
function truncation(el, len) {
    const ellipsis = document.querySelectorAll(el);
    ellipsis.forEach(item => {
        if(item.textContent.length > len) {
            const textLen = item.textContent.substring(0,len) + '...'
            item.textContent = textLen
        };
    });

}

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
/*!*********************************!*\
  !*** ./src/javascript/video.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_truncation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/truncation */ "./src/javascript/module/truncation.js");
/* harmony import */ var _module_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/pagination */ "./src/javascript/module/pagination.js");
/* harmony import */ var _module_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/sort */ "./src/javascript/module/sort.js");
// text truncation

// list data
const videoListData = [
    {
        title: '資安忙什麼？落實企業資安威脅管理 有效管控企業資通安全',
        image: 'http://img.youtube.com/vi/jctp9xyl3PU/maxresdefault.jpg',
        link: 'video-content-01.html',
        date: '2022/07/08'
    },
    {
        title: '資安忙什麼？打造縱深防禦 架構端點安全防護',
        image: 'https://img.youtube.com/vi/Y0kq108JaAs/maxresdefault.jpg',
        link: 'video-content-02.html',
        date: '2022/03/18'
    }
];

// pagination

const paginationClass = document.querySelector('.pagination');
const newsList = document.querySelector('.news-list');
(0,_module_pagination__WEBPACK_IMPORTED_MODULE_1__.pagination)(videoListData, 1);
function switchPage(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A') return;
    const page = e.target.dataset.page;
    (0,_module_pagination__WEBPACK_IMPORTED_MODULE_1__.pagination)(videoListData, page);
}
paginationClass.addEventListener('click', switchPage);

// sort
let sortList = [];

const sortBtn = document.querySelector('.sort-btn');
let currentPage = 1;
sortBtn.addEventListener('click', () => {
    const page = paginationClass.querySelectorAll('li');
    page.forEach((item) => {
        if(item.classList.contains('active')) {
            currentPage = item.querySelector('a').dataset.page;
        }
    })
    if(newsList.classList.contains('increase')) {
        (0,_module_sort__WEBPACK_IMPORTED_MODULE_2__.increase)(videoListData, sortList, currentPage);
    } else {
        (0,_module_sort__WEBPACK_IMPORTED_MODULE_2__.decrease)(videoListData, sortList, currentPage);
    };
});
})();

/******/ })()
;
//# sourceMappingURL=video.js.map?155a7060