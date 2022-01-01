const banner = document.querySelector('.banner-container');
const close_ = document.querySelector('.banner button');
const open_ = document.querySelector('.btn-hero');

open_.addEventListener('click',function(){
    banner.classList.add('open-banner');
});

close_.addEventListener('click',function(){
    banner.classList.remove('open-banner');
});