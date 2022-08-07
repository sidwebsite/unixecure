import { pagination } from './pagination';
const newsList = document.querySelector('.news-list');
const sortBtn = document.querySelector('.sort-btn');
const sortText = document.querySelector('.sort-text');
let i ,shouldSwitch , switching;
// 最新
export function increase(listData, sortData) {
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
    pagination(sortData, 1);
}
// 最舊
export function decrease(listData, sortData) {
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
        pagination(sortData, 1);
};