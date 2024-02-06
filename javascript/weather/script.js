let input = document.querySelector('input');
let display = document.querySelector('.display');


async function weather() {
    // let x = await fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${input.value}&apikey=3NkvA9A6qRo3PHIpnfjOR9ZWTDOAxgjF`, {
    //     header: {
    //         'accept': 'application/json'
    //     }
    // })


    // let y = await x.json();
    console.log(input.value);

    display.innerHTML = `
                <p>Temp <span>${y.data.values.temperature}</span></p>
                <p>pressure surface <span>${y.data.values.pressureSurfaceLevel}</span></p>
                <p>visiblity <span>${y.data.values.visibility}</span></p>
                <p>humidity <span>${y.data.values.humidity}</span></p>
    `


}


function throttle(mainFunction, delay) {
    let timerFlag = null; 

    return (...args) => {
      if (timerFlag === null) { 
        mainFunction(...args); 
        timerFlag = setTimeout(() => { 
          timerFlag = null; 
        }, delay);
      }
    };
  }
  

function debounce(func, timeout = 1500) {
    let timer = 0;
    return (...args) => {
        const now = new Date().getTime();
        if ((now - timer) < timeout)
            return;
        timer = now;
        func(...args)
    };
}

const processChange = debounce(weather);

window.addEventListener('keyup', processChange)


