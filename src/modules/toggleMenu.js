const toggleMenu = () => {
    const body = document.querySelector('body');
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li');
    const menuList = menu.querySelector('ul');
    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.menu') || target.matches('a.menuLi, .close-btn')) {
            handlerMenu();
        } else if (menu.classList.contains('active-menu') && !target.closest('.menu')) {
            handlerMenu();
        }
    });  
    
};
export  default toggleMenu;