
let minutes = document.querySelector("#min");
let seconds = document.querySelector("#sec");
let miliseconds = document.querySelector("#ms");

let timer = document.querySelector("#trigger");
let stamp = document.querySelector(".stamp");
let clearance

let min = 0;
let sec = 0;
let ms = 0;

timer.addEventListener('click', (e) => {
    e.preventDefault()


    if (e.target.id === "start") {

        clearance = setInterval(() => {
            ms += 1

            if (ms < 10) {
                miliseconds.innerText = `0${ms}`
            } else {
                miliseconds.innerText = `${ms}`
            }

            if (ms == 100) {
                ms = 0;
                miliseconds.innerText = `0${ms}`
                sec++
                console.log(sec);
                if (sec < 10) {
                    seconds.innerText = `0${sec}`
                } else {
                    seconds.innerText = `${sec}`
                }
            }

            if (sec == 60) {
                sec = 0;
                seconds.innerText = `0${sec}`
                min++
                if (min < 10) {
                    minutes.innerText = `0${min}`
                } else {
                    minutes.innerText = `${min}`
                }
            }

        }, 10);

        e.target.disabled = true;

        e.target.parentNode.children[0].style.display = 'none';
        e.target.parentNode.children[3].style.display = 'block';

    } else if (e.target.id === "stop") {

        console.log(sec)
        clearInterval(clearance)

        e.target.parentNode.children[0].disabled = false

        e.target.parentNode.children[0].style.display = 'block';

    } else if (e.target.id === "reset") {

        clearInterval(clearance);

        ms = 0;
        sec = 0;
        min = 0;

        miliseconds.innerText = `0${ms}`
        seconds.innerText = `0${sec}`
        minutes.innerText = `0${min}`

        e.target.parentNode.children[0].disabled = false
        e.target.parentNode.children[0].style.display = 'block';
        e.target.parentNode.children[3].style.display = 'none';
        stamp.innerHTML = "";
    }
    // console.log(sec)
    else if (e.target.id === "lap") {

        let record = document.createElement('p');
        record.innerText = `${min}:${sec}:${ms}`
        stamp.appendChild(record);

        e.target.parentNode.children[0].style.display = 'none';
    }

})

