export function truncation(el, len) {
    const ellipsis = document.querySelectorAll(el);
    ellipsis.forEach(item => {
        if(item.textContent.length > len) {
            const textLen = item.textContent.substring(0,len) + '...'
            item.textContent = textLen
        };
    });

}