
const displaylist = [];

function addplayer(e) {

    e.preventDefault()

    let first = document.getElementById("first")
    let last = document.getElementById("last")
    let country = document.getElementById("country")
    let score = document.getElementById("score")

    const data = {
        name: first.value + " " + last.value,
        country: country.value,
        score: Number(score.value)
    }
    displaylist.push(data);

    console.log(displaylist);

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
        displayscore.innerText = displaylist[i].score;
        inc.innerText = 'Increase';
        dec.innerText = 'Decrease';

        content.append(displayname, displaycountry, displayscore, inc, dec)
        display.appendChild(content);

        inc.addEventListener('click', (e) => {
            e.preventDefault()
            displaylist[i].score += 5;
            displayscore.innerText = displaylist[i].score;
        });

        dec.addEventListener('click', (e) => {
            e.preventDefault()
            displaylist[i].score -= 5;
            displayscore.innerText = displaylist[i].score;
        });

    }
    console.log(first.value, country.value, score.value)
}



document.querySelector(".btn").addEventListener('click', addplayer);