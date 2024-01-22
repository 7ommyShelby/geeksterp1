//asdding data in obj add is triggerred store info
// sorting induced in function get array
//dom update (button events) call sort
//


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

    console.log(list);

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

    list.forEach((player) => {

        let content = document.createElement('div');
        let Name = document.createElement('p')
        let Country = document.createElement('p')
        let Score = document.createElement('p')
        content.classList.add('content');
        const inc = document.createElement('button')
        const dec = document.createElement('button')
        const del = document.createElement('button')

        Name.innerText = player.name;
        Country.innerText = player.country;
        Score.innerText = player.score;
        inc.innerText = 'Increase';
        inc.classList.add('plus');
        dec.innerText = 'Decrease';
        dec.classList.add('minus');
        del.innerText = 'Delete';
        del.classList.add('remove')


        // inc.addEventListener('click', (e) => {

        // });

        dec.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("clicked", e)
            const index = list.findIndex(item => item.name === player.name);
            if (index !== -1) {
                list[index].score -= 5;
                Score.innerText = list[index].score;
                console.log(index)
            }
            domupdate(list);
        });

        del.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("clicked", e)
            const index = list.findIndex(item => item.name === player.name);
            if (index !== -1) {
                list.splice(index, 1);
                console.log(index)
            }
            domupdate(list);
        });

        content.append(Name, Country, Score, inc, dec, del);
        display.appendChild(content);
        // console.log(display)
    });
}

display.addEventListener("click", (e) => {
    if (e.target.classList.contains("plus")) {
        e.preventDefault();
        console.log("clicked", e)
        const index = list.findIndex(item => item.name === e.target.parentElement.firstElementChild.innerText);
        if (index !== -1) {
            list[index].score += 5;
            e.target.parentElement.children[2].innerText = list[index].score;
            console.log(index)
        }
        domupdate(list);
    }
})

console.log();

document.querySelector(".btn").addEventListener('click', creation);