let container = document.querySelector('#search');
let query = document.querySelector('input');
let display = document.querySelector('.show');
let more = document.querySelector('.data');

let info = query.value
let x = 1;

async function photo() {
    let data = await fetch(`https://api.unsplash.com/search/photos?page=${x}&query=${info}&client_id=BcEUItfGZTTH9aVHXJMn9pR1OtM1Scbf1McGJRq8Is8`)

    let ans = await data.json();
    console.log(ans.results);
   
    ans.results.forEach(element => {
        let div = document.createElement('div');
        let tags = document.createElement('img');
        let txt = document.createElement('span');
        tags.setAttribute('src', element.urls.regular)
        txt.innerText = (element.alt_description)
        // console.log(element.description)
        display.appendChild(div)
        div.append(tags, txt)
    });

}

container.addEventListener('click', (e) => {
    display.innerHTML = "";
    x = 1;
    photo()
    more.style.display = 'block'
    console.log("once",x);
})


more.addEventListener('click', (e) => {
    x++;
    photo()
     console.log("final",x);
})

