const newsList = document.querySelector('.news-list');
let i ,shouldSwitch , switching;
// 最新
export function increase() {
    switching = true;
    while (switching) {
        switching = false;
        const list = newsList.querySelectorAll('.list');
        for (i = 0; i < (list.length - 1); i++) {
            shouldSwitch = false;
            if (Number(list[i].dataset.date.replace(/[\ |\/|\:|\,|\?]/g,"")) < Number(list[i + 1].dataset.date.replace(/[\ |\/|\:|\,|\?]/g,""))) {
                shouldSwitch = true;
                break;
            };
        };
        if (shouldSwitch) {
            list[i].parentNode.insertBefore(list[i + 1], list[i]);
            switching = true;
        };
    };
};
// 最舊
export function decrease() {
    switching = true;
    while (switching) {
        switching = false;
        const list = newsList.querySelectorAll('.list');
        for (i = 0; i < (list.length - 1); i++) {
            shouldSwitch = false;
            if (Number(list[i].dataset.date.replace(/[\ |\/|\:|\,|\?]/g,"")) > Number(list[i + 1].dataset.date.replace(/[\ |\/|\:|\,|\?]/g,""))) {
                shouldSwitch = true;
                break;
            };
        };
        if (shouldSwitch) {
            list[i].parentNode.insertBefore(list[i + 1], list[i]);
            switching = true;
        };
    };
};