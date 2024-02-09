const priceSlider = document.querySelector('.price__slider');

const middlePoint = (priceSlider.scrollWidth - priceSlider.clientWidth) / 2;
priceSlider.scrollLeft = middlePoint;
