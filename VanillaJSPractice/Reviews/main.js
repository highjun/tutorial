// import reviews from './data';

const next = document.querySelector('.right');
const prev = document.querySelector('.left');

var cur = 0;

const profile = document.querySelector('.profile');
const name = document.querySelector('.name');
const position = document.querySelector('.position');
const summary = document.querySelector('.summary');

function changeProfile(){
    var get = reviews[cur];
    profile.src= get['img'];
    position.textContent = get['job'];
    name.textContent = get['name'];
    summary.textContent = get['text'];
}

changeProfile();

next.addEventListener('click',function(){
    cur = (cur+1)%reviews.length;
    changeProfile();
})

prev.addEventListener('click',function(){
    cur = (cur+reviews.length - 1)%reviews.length;
    changeProfile();
})