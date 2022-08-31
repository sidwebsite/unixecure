// list data
const newsListData = [
    {
        title: '智慧資安科技已通過技服中心聯防監控廠商的連通測試，包含G-SOC 1.0、G-SOC 2.0、EDR 連線測試作業！',
        image: './images/index-news-01.jpg',
        link: 'news-content-01.html',
        date: '2022/06/15'
    },
    {
        title: 'MOC資安監控維運中心已被國際認證具有軟體、數據及演算技術能力，已取得ISO20000、ISO27001與ISO27701 的國際認證',
        image: './images/index-news-02.jpg',
        link: 'news-content-02.html',
        date: '2022/03/18'
    }
];
// pagination
import { pagination } from './module/pagination';
const paginationClass = document.querySelector('.pagination');
const newsList = document.querySelector('.news-list');
// pagination display
pagination(newsListData, 1);
function switchPage(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A') return;
    const page = e.target.dataset.page;
    pagination(newsListData, page);
};
paginationClass.addEventListener('click', switchPage);
// sort
let sortList = [];
import { increase, decrease } from './module/sort';
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
        increase(newsListData, sortList, currentPage);
    } else {
        decrease(newsListData, sortList, currentPage);
    };
});