const hamBtn = document.querySelector(".ham");
const topNav = document.querySelector(".topnav");

const page = document.querySelector(".page");
const menu = document.querySelector(".menu");
const content = document.querySelector(".container");

hamBtn.addEventListener("click", () => {
    topNav.classList.toggle("hide");
});

page.addEventListener("keydown", () => {
    menu.classList.add("fade");
    setTimeout(() => {
        menu.classList.add("hide");
        content.classList.remove("hide");
    }, 750);
});