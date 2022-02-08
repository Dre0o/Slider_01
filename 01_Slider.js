let offset = 0;  // Смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset =offset + 400;
    if (offset > 3200) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-back').addEventListener('click', function(){
    offset =offset - 400;
    if (offset < 0) {
        offset = 3200;
    }
    sliderLine.style.left = -offset + 'px';
});
