let btn1 = document.querySelector("#shape");
let btn2 = document.querySelector("#colour");
let cir = document.querySelector(".circle");
console.log(btn2);

let x = document.querySelector(".des");


let arr = ["first", "second", "diamond", "fifth", "sixth"]

function changeshape(){
    let idx = Math.floor(Math.random()*arr.length);
    console.log(idx)
    x.setAttribute("id", arr[idx]);
}



btn1.addEventListener('click', changeshape )


function colourchange(){
    let str = "0123456789abcdef";
    let colstr = "#";

    for(let i = 0; i<6; i++){
        let creation = Math.floor(Math.random()*str.length);
        colstr += str[creation]; 
    }
    cir.style.backgroundColor = colstr;
}

btn2.addEventListener('click', colourchange);