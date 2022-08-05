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
import { increase, decrease } from './module/sort';
const sortBtn = document.querySelector('.sort-btn');
const sortText = document.querySelector('.sort-text');
sortBtn.addEventListener('click', () => {
    if(newsList.classList.contains('increase')) {
        sortText.textContent = '最新';
        newsList.classList.remove('increase');
        newsList.classList.add('decrease');
        sortBtn.querySelector('.fa-solid').classList.add('fa-arrow-up-wide-short');        
        sortBtn.querySelector('.fa-solid').classList.remove('fa-arrow-down-wide-short');
        increase();
    } else {
        sortText.textContent = '最舊';
        newsList.classList.add('increase');
        newsList.classList.remove('decrease');
        sortBtn.querySelector('.fa-solid').classList.remove('fa-arrow-up-wide-short');        
        sortBtn.querySelector('.fa-solid').classList.add('fa-arrow-down-wide-short');
        decrease();
    };
});
