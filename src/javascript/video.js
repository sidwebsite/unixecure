// text truncation
import { truncation } from './module/truncation';
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
import { pagination } from './module/pagination';
const paginationClass = document.querySelector('.pagination');
const newsList = document.querySelector('.news-list');
pagination(videoListData, 1);
function switchPage(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A') return;
    const page = e.target.dataset.page;
    pagination(videoListData, page);
}
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
        increase(videoListData, sortList, currentPage);
    } else {
        decrease(videoListData, sortList, currentPage);
    };
});