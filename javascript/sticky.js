let btn = document.querySelector("#btn");
let paper = document.querySelector(".notes");
let ta = document.querySelector("textarea");
let sel = document.querySelector("input");
// let cut = document.querySelector(".close");
let btn2 = document.querySelector("#btn2");
let span = document.querySelector("span");



btn.addEventListener('click', (e) => {

    if (ta.value == "") {
        alert("tumse na ho payega!");
    }
    else {

        let container = document.createElement("div");
        container.classList.add("container");
        let sticky = document.createElement("p");
        sticky.innerText = `${ta.value}`;
        paper.appendChild(container);
        container.appendChild(sticky);
        container.style.backgroundColor = sel.value;
        ta.value = "";
        let close = document.createElement("button");
        close.classList.add("close");
        close.innerText = `Close`;
        container.appendChild(close);
        span.innerText = "";
    }

});

paper.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        console.log("clik delete")
        e.target.parentElement.remove();
    }
});

btn2.addEventListener('click', (e) => {
    console.log(e)
    paper.innerHTML = "";
});



