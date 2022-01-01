const btn = document.querySelector('.btn');
const video = document.querySelector('video');

btn.addEventListener('click', function (){
    btn.classList.toggle('slide');
    if(btn.classList.contains('slide')){
        //Pause
        video.pause();
    }else{
        video.play();
    }
});