let filtertype = document.querySelector('.filterbutton');
let selecttypes = document.querySelector('#filter');


async function findtypes() {
    let fetchedtypes = await fetch('https://pokeapi.co/api/v2/type/')

    let types = await fetchedtypes.json();
     console.log(types);

    types.results.forEach(element => {
        let options = document.createElement('option');
        // options.value = element.name
        options.setAttribute('value', element.url)
        options.innerText = element.name
        // console.log(element.name);
        selecttypes.appendChild(options);
    });

}


let display = document.querySelector('.display');

async function pokeball() {

    display.innerHTML = "";

    let arr = [];

    let data = await fetch(`${selecttypes.value}`);

    let pokemon = await data.json()

    // console.log(pokemon.pokemon)

    pokemon.pokemon.forEach((e) => {

        arr.push(e.pokemon)

    })

    // console.log(selecttypes.value);

    arr.forEach(async (elem) => {
        let listoftypes = await fetch(elem.url)
        let finaltype = await listoftypes.json();
        //    console.log(finaltype);   object here

        let div = document.createElement('div')
        let img = document.createElement('img')
        img.setAttribute('src', finaltype.sprites.front_default);
        let names = document.createElement('span');
        names.classList.add('name')
        let txttype = document.createElement('span')
        txttype.innerText = finaltype.types[0].type.name;
        txttype.innerText = finaltype.types[1].type.name;
        txttype.classList.add('type')
        names.innerText = finaltype.name;
        div.append(img, names, txttype);
        display.append(div);
        // console.log(finaltype.sprites.front_default)
    })

    // console.log(arr,"click");
}


// async function pokedextab() {
//     let pd = await fetch('https://pokeapi.co/api/v2/type/');
//     let pdjson = await pd.json();
//     //  console.log(pdjson.results);

//     pdjson.results.forEach(async (element) => {
//         let a = await fetch(element.url);
//         let b = await a.json()
//         //   console.log(b.pokemon);
//         b.pokemon.map(async(e) => {

//         })
//     })

// }


async function pokedextab() {
    let pd = await fetch('https://pokeapi.co/api/v2/type/');
    let pdjson = await pd.json();

    let xmen = pdjson.results.map(async (e) => {
        let a = await fetch(e.url);
        let b = await a.json();
        return b;
    })
    Promise.all(xmen).then(
        (res) => {
            //  console.log(res);
            res.forEach((e) => {
                // console.log(e.pokemon);
                e.pokemon.forEach(async (elem) => {
                    //  console.log(elem.pokemon.url);
                    let x = await fetch(elem.pokemon.url)
                    let y = await x.json();
                    // console.log(y);
                    let div = document.createElement('div')
                    let img = document.createElement('img')
                    img.setAttribute('src', y.sprites.front_default)
                    let txt = document.createElement('span')
                    txt.classList.add('name')
                    let txttype = document.createElement('span')
                    txttype.classList.add('type')
                    // txttype.innerText = y.types[0].type.name;


                    y.types.forEach((e)=>{
                       console.log(e.type.name);
                    })

                    txt.innerText = y.name;
                    div.append(img, txt, txttype);
                    display.append(div);
                })
            })
        }
    )
    //   console.log(xmen);
}

//txttype.innerText = y.types[1].type.name;
pokedextab();

findtypes();

filtertype.addEventListener('click', pokeball)