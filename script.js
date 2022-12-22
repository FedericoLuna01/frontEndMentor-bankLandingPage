const hamburger = document.querySelector('.nav__hamburger');
const ul = document.querySelector('.nav__list');
const opacity = document.querySelector('.opacity') 
const header = document.querySelector('header')
let flag = true;

hamburger.addEventListener('click', () => {
    if (flag) {
        flag = false;
        hamburger.src = '/images/icon-close.svg';
    } else {
        flag = true;
        hamburger.src = '/images/icon-hamburger.svg'
    }
    ul.classList.toggle('nav__list--active');
    opacity.classList.toggle('opacity--active');
    header.classList.toggle('header--active');
})

const item = document.querySelectorAll('.nav__item');

item.forEach(i => {
    i.addEventListener('click', () => {
        flag = true;
        hamburger.src = '/images/icon-hamburger.svg'
        ul.classList.remove('nav__list--active');
        opacity.classList.remove('opacity--active');
        header.classList.remove('header--active');
    })
});