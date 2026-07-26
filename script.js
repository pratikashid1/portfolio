const menuBtn = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-menu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
});

const navbar = document.querySelector(".navbar");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if(currentScroll <= 0){
        navbar.classList.remove("hide");
        return;
    }

    if(currentScroll > lastScroll){
        // Scrolling Down
        navbar.classList.add("hide");
    }else{
        // Scrolling Up
        navbar.classList.remove("hide");
    }

    lastScroll = currentScroll;
});