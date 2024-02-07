let input = document.querySelector('input');
let display = document.querySelector('.display');


switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day);
async function weather() {

    try {
        let x = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=cc436684a80bb4774325274fab92c0da&units=metric `)

        input.value ="";
        
        let y = await x.json();
        console.log(y);

        let src

        if (y.weather[0].main == 'Clouds') {
            src = './clouds.png'
        } else if (y.weather[0].main == 'Rain') {
            src = './storm.png'
        } else if (y.weather[0].main == 'Clear') {
            src = './sun.png'
        } else if (y.weather[0].main == 'Drizzle') {
            src = './drizzle.png'
        } else if (y.weather[0].main == 'Mist') {
            src = './haze.png'
        } else if (y.weather[0].main == 'Haze') {
            src = './haze1.png'
        } else if (y.weather[0].main == 'Smoke') {
            src = './carbon-dioxide.png'
        }

        display.innerHTML = `
        <div class="left">
            <p>${y.name}</p>
            <p>${day}</p>
            <p>Pressure : ${y.main.pressure} hPa</p>
            <p class = "humid"><span class="material-symbols-outlined">
            humidity_low
            </span>: ${y.main.humidity}%</p>
            <p class="wind">
            <span class="material-symbols-outlined">
            air
            </span>: ${y.wind.speed} km/hr
            </p>
        </div>

        <div class="mid">
            <img class="weather" src=${src} alt="">
            <p>${y.weather[0].description}</p>
        </div>
    
            <div class="right">
                <p class="temp">${y.main.temp}°C</p>
            </div>
        `

    }

    catch (error) {
        console.log(error);
        display.innerHTML = `City Not Found`
    }

}

document.querySelector('button').addEventListener('click', weather)


