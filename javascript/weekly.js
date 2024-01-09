let btn = document.getElementById("but");
let date = document.getElementById("bday");
let para = document.getElementById("ans");

function age() {
    let curdate = new Date();
    let birth = new Date(date.value);
    let yourage = curdate.getFullYear() - birth.getFullYear();
    let mon = curdate.getMonth() - birth.getMonth();
    let day = curdate.getDate() - birth.getDate();
    let cal = curdate.getTime() - birth.getTime(); //miliseconds

    let ms = 365 * 24 * 3600 * 1000;
    let finalage = Math.floor(cal / ms);
    console.log(finalage);


    if (curdate.getMonth() < birth.getMonth()) {
        yourage--;
        mon = (mon + 12);
    }
    else if (curdate.getMonth() == birth.getMonth() && curdate.getDate() < birth.getDate() && curdate.getFullYear() < birth.getFullYear()) {
        yourage--;
        mon = mon + 12;
    } else if (curdate.getFullYear() == birth.getFullYear() && curdate.getMonth() == birth.getMonth() && curdate.getDate() < birth.getDate()) {
        para.innerText = `Seriously Bro! Please be Honest`;
    }

    if (yourage == 1 ) {
        para.innerText = `You Are ${yourage} Year,  ${mon} Months and ${Math.abs(day)} days Old`;
    }
    else {
        para.innerText = `You Are ${yourage} Years,  ${mon} Months and ${Math.abs(day)} days Old`;
    }

    if (yourage < 0) {
        para.innerText = `Seriously Bro! Please be Honest`
    }

    if (curdate.getFullYear() < birth.getFullYear()) {
        para.innerText = `Seriously Bro! Please be Honest`
    }

    if (curdate.getMonth() == birth.getMonth() && curdate.getDate() == birth.getDate()) {
        if (yourage == 1) {
            para.innerText = `Happy Birthday! You Are ${yourage} Year Old`
        } else {
            para.innerText = `Happy Birthday! You Are ${yourage} Years Old`;
        }

    }

}

btn.addEventListener('click', age);


