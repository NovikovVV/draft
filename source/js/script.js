const navigationContainer = document.querySelector('.navigation .container');
const menuToggle = document.querySelector('.menu__toggle');
const menu = document.querySelector('.menu');
const menuIconClosed = '<svg width="50" height="24"><use xlink:href="#menu-closed"></use></svg>';
const menuIconOpened = '<svg width="23" height="23"><use xlink:href="#menu-opened"></use></svg>';
const priceSlider = document.querySelector('.price__slider');

const middlePoint = (priceSlider.scrollWidth - priceSlider.clientWidth) / 2;
priceSlider.scrollLeft = middlePoint;


menuToggle.addEventListener('click', function () {
  menu.classList.toggle('menu--opened');
  menu.classList.contains('menu--opened')
  ?
  menuToggle.innerHTML = menuIconOpened : menuToggle.innerHTML = menuIconClosed;
  navigationContainer.classList.toggle('container--open')
})
