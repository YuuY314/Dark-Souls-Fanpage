const page = document.querySelector(".page");
const start = document.querySelector(".start-box");
const menu = document.querySelector(".menu-option");
const select = document.querySelectorAll(".select-btn");
const content = document.querySelectorAll("#content");
const bossCard = document.querySelectorAll(".boss-card");

page.addEventListener("keydown", () => {
    start.classList.add("hide");
    menu.classList.remove("hide");
});

select.forEach(option => {
    option.addEventListener("click", () => content.forEach(container => {
        container.classList.remove("hide");
    }));
});

bossCard.forEach(boss => {
    boss.addEventListener("click", () => {
        alert("Ainda está em desenvolvimento")
    });
});