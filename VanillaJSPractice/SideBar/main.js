const toggle = document.querySelector('.aside-toggle');
const close = document.querySelector('.aside-close');

const container = document.querySelector('.aside-container');

toggle.addEventListener('click',function(){
    container.classList.toggle('show-aside');
});
close.addEventListener('click',function(){
    container.classList.remove('show-aside');
});