const btn = document.querySelector(".btn");
const span = document.querySelector("#code");
const body = document.body;


function getRandomColor(){
    const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var color = '#';
    for(var i = 0;i<6;i++)
        color += hex[Math.floor(Math.random()*16)];
    return color;
}


btn.addEventListener('click', function(){
    const color = getRandomColor();
    // console.log(">>>>");
    console.log(color);
    body.style.backgroundColor = color;
    span.textContent = color;
});
