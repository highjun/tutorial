const btn_container = document.querySelector('.btn-container');
const passage= document.querySelector('.passage');
var active = 0;

for(var i in contents){
    var btn = document.createElement('button');
    btn.id = i;
    btn.textContent = contents[i]['title'];
    btn.addEventListener('click', function (){
        var num_ = this.id;
        btn_container.children[active].classList.remove('active');
        btn_container.children[num_].classList.add('active');
        active = num_;
        passage.children[0].textContent = contents[num_]['title'];
        passage.children[1].textContent = contents[num_]['passage'];
    })
    btn_container.appendChild(btn);
}

btn_container.children[0].classList.add('active');
passage.children[0].textContent = contents[0]['title'];
passage.children[1].textContent = contents[0]['passage'];
