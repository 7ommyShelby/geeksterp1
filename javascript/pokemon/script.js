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


        let flipcard = document.createElement('div')
        flipcard.classList.add('flip-card')
        let flipcardinner = document.createElement('div')
        flipcardinner.classList.add('flip-card-inner')
        let flipcardfront = document.createElement('div')
        flipcardfront.classList.add('flip-card-front')
        let img = document.createElement('img')
        img.setAttribute('src', finaltype.sprites.front_default)
        let txt = document.createElement('span')
        txt.classList.add('name')
        let txttype = document.createElement('span')
        txttype.classList.add('type')
        txttype.innerText = finaltype.types[0].type.name;

        if (txttype.innerText == "normal") {
            flipcardinner.style.backgroundColor = "grey";
        } else if (txttype.innerText == "flying") {
            flipcardinner.style.backgroundColor = "lightblue";
        } else if (txttype.innerText == 'ground') {
            flipcardinner.style.backgroundColor = "silver";
        } else if (txttype.innerText == "fire") {
            flipcardinner.style.backgroundColor = "crimson";
        } else if (txttype.innerText == 'fighting') {
            flipcardinner.style.backgroundColor = "brown";
        } else if (txttype.innerText == 'poison') {
            flipcardinner.style.backgroundColor = "violet";
        } else if (txttype.innerText == 'electric') {
            flipcardinner.style.backgroundColor = "yellow";
        } else if (txttype.innerText == 'water') {
            flipcardinner.style.backgroundColor = "aqua";
        }
        else if (txttype.innerText == 'rock') {
            flipcardinner.style.backgroundColor = "rosybrown";
        }
        else if (txttype.innerText == 'dark') {
            flipcardinner.style.backgroundColor = "pink";
        }
        else if (txttype.innerText == 'fairy') {
            flipcardinner.style.backgroundColor = "darkviolet";
        }
        else if (txttype.innerText == 'ice') {
            flipcardinner.style.backgroundColor = "cornflowerblue";
        }
        else if (txttype.innerText == 'bug') {
            flipcardinner.style.backgroundColor = "lightgreen";
        }
        else if (txttype.innerText == 'dragon') {
            flipcardinner.style.backgroundColor = "firebrick";
        }
        else if (txttype.innerText == 'psychic') {
            flipcardinner.style.backgroundColor = "darkgoldenrod";
        }
        else if (txttype.innerText == 'grass') {
            flipcardinner.style.backgroundColor = "lightgreen";
        }
        else if (txttype.innerText == 'ghost') {
            flipcardinner.style.backgroundColor = "slategrey";
        }
        else if (txttype.innerText == 'steel') {
            flipcardinner.style.backgroundColor = "mediumturquoise";
        }


        txt.innerText = finaltype.name;
        let flipcardback = document.createElement('div');
        flipcardback.classList.add('flip-card-back')
        let backname = document.createElement('span');
        let abilities = document.createElement('span');

        let str = "";
        finaltype.abilities.forEach((e) => {
            str += e.ability.name + ", ";
        })

        backname.innerText = finaltype.name
        abilities.innerText = str.slice(0, str.length - 2);


        flipcardback.append(backname, abilities)
        flipcardfront.append(img, txt, txttype);
        flipcardinner.append(flipcardfront, flipcardback)
        flipcard.append(flipcardinner);
        display.append(flipcard);




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


                    let flipcard = document.createElement('div')
                    flipcard.classList.add('flip-card')
                    let flipcardinner = document.createElement('div')
                    flipcardinner.classList.add('flip-card-inner')
                    let flipcardfront = document.createElement('div')
                    flipcardfront.classList.add('flip-card-front')
                    let img = document.createElement('img')
                    img.setAttribute('src', y.sprites.front_default)
                    let txt = document.createElement('span')
                    txt.classList.add('name')
                    let txttype = document.createElement('span')
                    txttype.classList.add('type')
                    txttype.innerText = y.types[0].type.name;

                    if (txttype.innerText == "normal") {
                        flipcardinner.style.backgroundColor = "grey";
                    } else if (txttype.innerText == "flying") {
                        flipcardinner.style.backgroundColor = "lightblue";
                    } else if (txttype.innerText == 'ground') {
                        flipcardinner.style.backgroundColor = "silver";
                    } else if (txttype.innerText == "fire") {
                        flipcardinner.style.backgroundColor = "crimson";
                    } else if (txttype.innerText == 'fighting') {
                        flipcardinner.style.backgroundColor = "brown";
                    } else if (txttype.innerText == 'poison') {
                        flipcardinner.style.backgroundColor = "violet";
                    } else if (txttype.innerText == 'electric') {
                        flipcardinner.style.backgroundColor = "yellow";
                    } else if (txttype.innerText == 'water') {
                        flipcardinner.style.backgroundColor = "aqua";
                    }
                    else if (txttype.innerText == 'rock') {
                        flipcardinner.style.backgroundColor = "rosybrown";
                    }
                    else if (txttype.innerText == 'dark') {
                        flipcardinner.style.backgroundColor = "pink";
                    }
                    else if (txttype.innerText == 'fairy') {
                        flipcardinner.style.backgroundColor = "darkviolet";
                    }
                    else if (txttype.innerText == 'ice') {
                        flipcardinner.style.backgroundColor = "cornflowerblue";
                    }
                    else if (txttype.innerText == 'bug') {
                        flipcardinner.style.backgroundColor = "lightgreen";
                    }
                    else if (txttype.innerText == 'dragon') {
                        flipcardinner.style.backgroundColor = "firebrick";
                    }
                    else if (txttype.innerText == 'psychic') {
                        flipcardinner.style.backgroundColor = "darkgoldenrod";
                    }
                    else if (txttype.innerText == 'grass') {
                        flipcardinner.style.backgroundColor = "lightgreen";
                    }
                    else if (txttype.innerText == 'ghost') {
                        flipcardinner.style.backgroundColor = "slategrey";
                    }
                    else if (txttype.innerText == 'steel') {
                        flipcardinner.style.backgroundColor = "mediumturquoise";
                    }

                    txt.innerText = y.name;
                    let flipcardback = document.createElement('div');
                    flipcardback.classList.add('flip-card-back')
                    let backname = document.createElement('span');
                    backname.classList.add("bn")
                    let abilities = document.createElement('span');
                    abilities.classList.add('ab')

                    let str = "";
                    y.abilities.forEach((e) => {
                        str += e.ability.name + ", ";
                    })

                    backname.innerText = y.name
                    abilities.innerText = str.slice(0, str.length - 2);


                    flipcardback.append(backname, abilities)
                    flipcardfront.append(img, txt, txttype);
                    flipcardinner.append(flipcardfront, flipcardback)
                    flipcard.append(flipcardinner);
                    display.append(flipcard);
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