const displaylist = [];

let first = document.getElementById("first")
let last = document.getElementById("last")
let country = document.getElementById("country")
let score = document.getElementById("score")

function addplayer(e) {

    e.preventDefault();

    const data = {
        name: first.value + " " + last.value,
        country: country.value,
        score: Number(score.value)
    }

    displaylist.push(data);

    displaylist.sort((a, b) => {
        return b.score - a.score;
    })

    // let display = document.querySelector(".display");
    // display.innerHTML = "";

    for (let i = 0; i < displaylist.length; i++) {

        // let content = document.createElement("div");
        // content.classList.add("content")
        // const displayname = document.createElement('p');
        // const displaycountry = document.createElement('p');
        // const displayscore = document.createElement('p');

        // const inc = document.createElement('button')
        // const dec = document.createElement('button')


        // displayname.innerText = displaylist[i].name;
        // displaycountry.innerText = displaylist[i].country;
        // displayscore.innerText = displaylist[i].score;
        // inc.innerText = 'Increase';
        // dec.innerText = 'Decrease';

        // inc.addEventListener('click', (e) => {
        //     e.preventDefault()
        //     displaylist[i].score += 5;
        //      displayscore.innerText = displaylist[i].score;
        //     // refresh()
        // })


        // dec.addEventListener('click', (e) => {
        //     e.preventDefault()
        //     displaylist[i].score -= 5;
        //      displayscore.innerText = displaylist[i].score;
        //     // refresh()
        // })

        // content.append(displayname, displaycountry, displayscore, inc, dec)
        // display.appendChild(content);
         refresh()
    }
}

function refresh() {

    displaylist.sort((a, b) => {
        return b.score - a.score;
    })

    let display = document.querySelector(".display");
    display.innerHTML = "";


    for (let i = 0; i < displaylist.length; i++) {

        let content = document.createElement("div");
        content.classList.add("content")
        const displayname = document.createElement('p');
        const displaycountry = document.createElement('p');
        const displayscore = document.createElement('p');


        const inc = document.createElement('button')
        const dec = document.createElement('button')

        displayname.innerText = displaylist[i].name;
        displaycountry.innerText = displaylist[i].country;
        // displayscore.innerText = displaylist[i].score;
        inc.innerText = 'Increase';
        dec.innerText = 'Decrease';

        inc.addEventListener('click', (e) => {
            e.preventDefault()
            displaylist[i].score += 5;
            // displayscore.innerText = displaylist[i].score;
            refresh()
        })


        dec.addEventListener('click', (e) => {
            e.preventDefault()
            displaylist[i].score -= 5;
            // displayscore.innerText = displaylist[i].score;
            refresh()
        })

        displayscore.innerText = displaylist[i].score;

        content.append(displayname, displaycountry, displayscore, inc, dec)
        display.appendChild(content);
    }

}


document.querySelector(".btn").addEventListener('click', addplayer);
