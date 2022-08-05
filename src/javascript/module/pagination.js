// text truncation
import { truncation } from './truncation';
const paginationClass = document.querySelector('.pagination');
const newsList = document.querySelector('.news-list');
export function pagination(listData, nowPage) {
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
    truncation('.card-body h5', 25);
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