let btn = document.querySelector(".toggle");
let screen = document.getElementsByTagName("body");
let hd = document.querySelector(".heading h1");
screen[0].style.backgroundColor = "white";
let cir = document.querySelector(".circle");


btn.addEventListener('click', () => {

    if (screen[0].style.backgroundColor == "white") {
        screen[0].style.backgroundColor = "black"
        hd.style.color = "white";
        cir.style.transform = "translateX(50px)"
    } 
    else if (screen[0].style.backgroundColor == "black") {
        screen[0].style.backgroundColor = "white"
        hd.style.color = "black";
        cir.style.transform = "translateX(0px)"
    }

    console.log(screen[0].style.backgroundColor);
});

