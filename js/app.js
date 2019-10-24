const menu_button = document.querySelector(".menu__button");
menu_button.addEventListener("click", () => {
    const nav_container = document.querySelector(".nav__container");
    nav_container.classList.add("side-menu");
    
    const nav_items = document.querySelectorAll(".nav__list-item");
    nav_items.forEach(item => {
        item.classList.add("side-menu__list-item");
        item.classList.remove("nav__list-item");
    })   

});

