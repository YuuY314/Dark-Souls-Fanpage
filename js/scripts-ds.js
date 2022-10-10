const hamBtn = document.querySelector(".ham");
const topNav = document.querySelector(".topnav");

const page = document.querySelector(".page");
const start = document.querySelector(".start");
const menu = document.querySelector(".menu-option");
const select = document.querySelector(".select-btn"); //só tá pegando o primeiro elemento
const content = document.querySelector(".container");

hamBtn.addEventListener("click", () => {
    topNav.classList.toggle("hide");
});

page.addEventListener("keydown", () => {
    start.classList.add("hide");
    menu.classList.remove("hide");
});

select.addEventListener("click", () => {
    content.classList.remove("hide");
});