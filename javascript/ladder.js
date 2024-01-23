
const list = []

const firstname = document.querySelector("#first")
const lastname = document.querySelector("#last")
const playercountry = document.querySelector("#country")
const playerscore = document.querySelector("#score")
const display = document.querySelector('.display');

// creation
function creation(e) {

    e.preventDefault();

    const data = {
        name: firstname.value + " " + lastname.value,
        country: playercountry.value,
        score: Number(playerscore.value)
    }
    list.push(data);

    domupdate(list);

    // sort(list);

    // console.log(list);

    firstname.value = "";
    lastname.value = "";
    playercountry.value = "";
    playerscore.value = "";
}


//sorting

function sort(array) {
    array.sort((a, b) => {
        return b.score - a.score
    })
}

//domupdate display data
function domupdate(list) {

    display.innerHTML = "";

    sort(list);

    list.forEach((player, idx) => {

        let content = document.createElement('div');
        let Name = document.createElement('p')
        let Country = document.createElement('p')
        let Score = document.createElement('p')
        content.classList.add('content');
        let btns = document.createElement('div')
        btns.classList.add('btns');
        const inc = document.createElement('button')
        const dec = document.createElement('button')
        const del = document.createElement('button')

        Name.innerText = player.name;
        Country.innerText = player.country;
        Score.innerText = player.score;
        Country.style.textTransform='uppercase';

        inc.innerText = '+5';
        inc.classList.add('plus');
        dec.innerText = '-5';
        dec.classList.add('minus');
        del.innerText = 'Delete';
        del.classList.add('remove')

        content.append(Name, Country, Score, btns);
        btns.append(inc, dec, del )
        display.appendChild(content);

        content.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.classList.contains("remove")) {
                list.splice(idx, 1)
            } else if (e.target.classList.contains('plus')) {
                list[idx].score += 5
            } else if (e.target.classList.contains('minus')) {
                list[idx].score -= 5
            }
            domupdate(list)
        })

        console.log(idx);
    });

}


document.querySelector("form").addEventListener('submit', creation);