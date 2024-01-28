let filtertype = document.querySelector('.filterbutton');
let selecttypes = document.querySelector('#filter');

let find = document.querySelector('.find')

let colors = {
    fire: "orange",
    water:  "#19faf4",
    ice:    'blue',
    rock:   'brown',
    ghost: 'grey',
    dark:   '#7800a3',
    bug:    'lightgreen',
    electric: 'yellow',
    fighting:   '#f05f5f',
    flying: '#22c1c3',
    poison: '#c322b7',
    ground: '#5f8f83',
    steel:   '#a8beb8',
    grass:  '#22b600',
    psychic: '#ebaeee',
    dragon: '#ff903a',
    fairy:  '#94bbe9',
    normal: '#ebaeee'
}




//fetching types

async function findtypes() {
    let fetchedtypes = await fetch('https://pokeapi.co/api/v2/type/')

    let types = await fetchedtypes.json();

    types.results.forEach(element => {
        let options = document.createElement('option');

        options.setAttribute('value', element.url)

        options.innerText = element.name

        selecttypes.appendChild(options);
    });

}


let display = document.querySelector('.display');


async function pokeball() {
    
    let arr = [];

    let data = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302');

    let data1 = await data.json();

    let data2 = data1.results;

    arr = data2.map(async (e) => {

        let x = await fetch(e.url)
        let y = await x.json();
        return y

    })

    Promise.all(arr).then((res) => {
        pokemostodisplay(res)
    })
}

async function showtypes() {

    let x = await fetch(selecttypes.value);
    let y = await x.json()

  let pokedata =   y.pokemon.map(async (elem)=>{

        let x = await fetch(elem.pokemon.url);
        let y = await x.json()
        // console.log(y);
        return y
        
    })

    Promise.all(pokedata).then((res)=>{
        pokemostodisplay(res)
        // console.log(res);
    })  

}


//for display
function pokemostodisplay(array) {
display.innerHTML = "";
    array.forEach((e) => {

        let flipcard = document.createElement('div')
        flipcard.classList.add('flip-card')
        let flipcardinner = document.createElement('div')
        flipcardinner.classList.add('flip-card-inner')
        let flipcardfront = document.createElement('div')
        flipcardfront.classList.add('flip-card-front')
        let img = document.createElement('img')
        img.setAttribute('src', e.sprites.front_default)
        let txt = document.createElement('span')
        txt.classList.add('name')
        let txttype = document.createElement('span')
        txttype.classList.add('type')
        // txttype.innerText = e.types[0].type.name;

        let type = e.types.map((elem) => {
            let { name } = elem.type
            return name;
        })
        txttype.innerText = type;

        txt.innerText = e.name;
        let flipcardback = document.createElement('div');
        flipcardback.classList.add('flip-card-back')
        let backname = document.createElement('span');
        backname.classList.add("bn")
        let abilities = document.createElement('span');
        abilities.classList.add('ab')

        let str = "";
        e.abilities.forEach((e) => {
            str += e.ability.name + ", ";
        })

        backname.innerText = e.name
        abilities.innerText = str.slice(0, str.length - 2);

        if(e.types.length>1){
            flipcardinner.style.background = `linear-gradient(125deg, ${colors[type[0]]}  50%, ${colors[type[1]]} 50%)`
        }else if(e.types.length==1){
            flipcardinner.style.backgroundColor = colors[type]
        }




        flipcardback.append(backname, abilities)
        flipcardfront.append(img, txt, txttype);
        flipcardinner.append(flipcardfront, flipcardback)
        flipcard.append(flipcardinner);
        display.append(flipcard);

    })
}


findtypes()


window.onload = pokeball()

document.querySelector('.reset').addEventListener('click', pokeball )

filtertype.addEventListener('click', showtypes)

// find.addEventListener('click', (e)=>{
//     if(document.querySelector('input').value
//     )
// })