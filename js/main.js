const menu = document.querySelector('.Header__nav-menu');
const header_menu =document.querySelector('.Header__menu')

menu.addEventListener('click',add);

function add() {
    if (header_menu.classList.contains('menu-show')){
        header_menu.classList.remove('menu-show')
    }
    else{
        header_menu.classList.add('menu-show')
    }
}