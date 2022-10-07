const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const hamBtn = document.querySelector(".ham");
const topNav = document.querySelector(".topnav");

const landingDs1 = document.querySelector("#container-ds1");
const landingDs2 = document.querySelector("#container-ds2");
const landingDs3 = document.querySelector("#container-ds3");

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