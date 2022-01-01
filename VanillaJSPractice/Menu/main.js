const menus_dom = document.querySelector('.menus');
var filter="all";
function createMenuDOM(data){
    const new_menu= document.createElement('div');
    new_menu.classList.add('menu-item');
    new_menu.innerHTML = `
    <img class="menu-img"/>
    <div class="menu-info">
        <div class="menu-header">
            <h4 class="menu-name">NAME</h4>
            <div class="menu-price">PRICE</div>
        </div>
        <p class="menu-description">Description</p>
    </div>
    `;
    new_menu.querySelector('.menu-img').src = data['img'];
    new_menu.querySelector('.menu-name').textContent = data['title'];
    new_menu.querySelector('.menu-price').textContent ='$' + data['price'];
    new_menu.querySelector('.menu-description').textContent = data['desc'];
    menus_dom.appendChild(new_menu);
}
function changeMenu(){
    for(var idx in menus){
        if(filter!== "all"){
            if(menus[idx]['category'] === filter){
                createMenuDOM(menus[idx]);
            }
        }else{
            createMenuDOM(menus[idx]);
        }
    }
}

changeMenu();

function callback(event){
    menus_dom.innerHTML = '';
    if(filter !==event.target.textContent){
        filter = event.target.textContent;
        changeMenu();
    }
}

const buttons = document.querySelectorAll('button');
for(var idx in [0,1,2,3,4]){
    buttons[idx].addEventListener('click',callback);
}