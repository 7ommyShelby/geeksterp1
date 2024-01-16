let contaienr = document.querySelector(".emojis");
let input = document.querySelector('input');

input.addEventListener('keyup', (e)=>{
    display(input.value.toLowerCase());
});



function display(val=""){

    let filter = emojiList.filter((e)=>{
            return (e.aliases.some((elem)=>{
                return elem.startsWith(val)
            })) || (e.tags.some((x)=>{
                return(x.startsWith(val))
            }))
    })

    contaienr.innerHTML = "";
    filter.forEach(element => {
    let div = document.createElement("div");
    div.classList.add("label")
    div.innerHTML = `
    <p class="face">${element.emoji}</p>
    <p class="define">${element.aliases}</p>
    <p class="explain">${element.description}</p>
    `
    contaienr.appendChild(div);
    
});
};

window.onload = display();

