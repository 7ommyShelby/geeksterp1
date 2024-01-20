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
    console.log(display);
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

    list.forEach((e) => {

        let content = document.createElement('div');
        let Name = document.createElement('p')
        let Country = document.createElement('p')
        let Score = document.createElement('p')
        content.classList.add('content');
        const inc = document.createElement('button')
        const dec = document.createElement('button')

        Name.innerText = e.name;
        Country.innerText = e.country;
        Score.innerText = e.score;
        inc.innerText = 'Increase';
        dec.innerText = 'Decrease';

        inc.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("clicked", Score.innerText)
            
            Score.innerText = e.score;
            
            domupdate(list);
            
        });

        // dec.addEventListener('click', decreasehandler);

        content.append(Name, Country, Score, inc, dec);
        display.appendChild(content);
        // console.log(display)
    });
}




console.log();


document.querySelector(".btn").addEventListener('click', creation);