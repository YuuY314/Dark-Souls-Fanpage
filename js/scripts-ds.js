const page = document.querySelector(".page");
const start = document.querySelector(".start-box");
const menu = document.querySelector(".menu-option");
const select = document.querySelectorAll(".select-btn");
const content = document.querySelectorAll("#content");

page.addEventListener("keydown", () => {
    start.classList.add("hide");
    menu.classList.remove("hide");
});

select.forEach(option => {
    option.addEventListener("click", () => content.forEach(container => {
        container.classList.remove("hide");
    }));
});