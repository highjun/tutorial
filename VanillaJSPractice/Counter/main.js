const reset = document.querySelector(".reset");
const dec = document.querySelector(".dec");
const inc = document.querySelector(".inc");

var count = 0;

function changeDisplay(){
    const cnt = document.querySelector("#count");
    cnt.textContent = count;
    if(count === 0){
        cnt.style.color = 'black';
    }else if(count >0){
        cnt.style.color = 'green';
    }else{
        cnt.style.color = 'red';
    }
}

reset.addEventListener('click', function(){
    count = 0;
    changeDisplay();
});
inc.addEventListener('click', function(){
    count++;
    changeDisplay();
});
dec.addEventListener('click', function(){
    count--;
    changeDisplay();
});