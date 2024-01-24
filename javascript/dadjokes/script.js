
let dj = document.querySelector('p');

function jokes() {
    fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', {
        headers: {
            "X-Api-Key": "4MKMfzIIx+9KlgmjzgKioQ==ioLnKQ9BluRp6LYV"
        }
    })
        .then((result) => {
           return result.json()
        }).then((e) => {
              console.log(e[0].joke);
            return dj.innerText = e[0].joke

        })
}

document.querySelector("button").addEventListener('click', jokes)