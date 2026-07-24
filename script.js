const menuBtn = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-menu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
});