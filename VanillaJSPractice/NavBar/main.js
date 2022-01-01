const links= document.querySelector('.links');
const toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click', function(){
    links.classList.toggle('toggle-clicked');
})