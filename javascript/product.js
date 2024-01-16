const products = [
    { id: 1, name: "Product-1", price: 100 },
    { id: 2, name: "Product-2", price: 200 },
    { id: 3, name: "Product-3", price: 300 },
    { id: 4, name: "Product-4", price: 100 },
    { id: 5, name: "Product-5", price: 200 },
    { id: 6, name: "Product-6", price: 300 }
];

var cart = products.map((elem) => {
    return {
        pid: elem.id,
        qty: 0,

    }
})

console.log(cart);

function updateproduct() {
    products.forEach(element => {
        let card = `
        <div class="prod">
            <div class="static">
                ${element.name}
            </div>
        <div>${element.price}</div>
            <div class="button">
                <button class="dec">-</button>
                <span class="val">${cart[element.id - 1].qty}</span>
                <button class="inc">+</button>
            </div>
        </div>
            `
        let div = document.createElement("div");
        div.innerHTML = card;

        document.querySelector(".rc").appendChild(div);
    });
}

updateproduct();

function updatechart(e, val) {
    document.querySelector(".cart").innerHTML = "";

    console.log(e.target.parentNode.parentNode.children[0].innerText);

    products.forEach((elem) => {
        if (elem.name == e.target.parentNode.parentNode.children[0].innerText) {
            elem.qty = val;
        }
    })
    console.log(products);

    let totalprice = 0;

    products.forEach((element) => {
        if (element.qty > 0) {
            let div = document.createElement("div");
            totalprice += element.qty * element.price;
            let ui = `
                 <div>
                     <p>${element.name}</p>
                     <p>Quantity: ${element.qty}</p>
                     <p>Price: ${element.price}</p>
                 </div>
                 `
            div.innerHTML = ui;
            document.querySelector(".cart").appendChild(div);
        }
    });

    document.querySelector("#ans").innerText = totalprice;

    if (document.querySelector(".cart").innerHTML == "") {

        document.querySelector(".cart").innerHTML = `
            <p>No Product Added To The Cart</p>
        `
    }
}

let change = document.querySelector(".rc");

change.addEventListener("click", (e) => {
    if (e.target.className === "dec") {
        // console.log(e.target.parentNode.children[1].innerText);
        if (e.target.parentNode.children[1].innerText > 0)
            e.target.parentNode.children[1].innerText--;
        let val = e.target.parentNode.children[1].innerText;
        updatechart(e, val);
        // console.log(e.target.className);
    } else if (e.target.className === "inc") {
        e.target.parentNode.children[1].innerText++;
        let val = e.target.parentNode.children[1].innerText;
        updatechart(e, val);
    }

});

window.onload = () => {
    document.querySelector(".cart").innerHTML = `
            <p>No Product Added To The Cart</p>
        `
}

