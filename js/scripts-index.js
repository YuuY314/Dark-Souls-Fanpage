const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
let count = 1;

const hamBtn = document.querySelector(".ham");
const topNav = document.querySelector(".topnav");

const landingDs1 = document.querySelector(".container-ds1");
const landingDs2 = document.querySelector(".container-ds2");
const landingDs3 = document.querySelector(".container-ds3");

hamBtn.addEventListener("click", () => {
    topNav.classList.toggle("hide");
});

nextBtn.addEventListener("click", () => {
    if(count > 3){
        count = 1;
    }

    if(count === 1){
        landingDs1.classList.add("hide");
        landingDs2.classList.remove("hide");
    } else if(count === 2){
        landingDs2.classList.add("hide");
        landingDs3.classList.remove("hide");
    } else {
        landingDs3.classList.add("hide");
        landingDs1.classList.remove("hide");
    }

    if(count <= 3){
        count++;
    }
});

prevBtn.addEventListener("click", () => {
    if(count > 3){
        count = 1;
    }

    if(count === 1){
        landingDs1.classList.add("hide");
        landingDs3.classList.remove("hide");
    } else if(count === 2){
        landingDs3.classList.add("hide");
        landingDs2.classList.remove("hide");
    } else {
        landingDs2.classList.add("hide");
        landingDs1.classList.remove("hide");
    }

    if(count <= 3){
        count++;
    }
});