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
    let finalage = (cal / ms);

    if (mon < 0) {
        mon = mon + 12;
        yourage--;
    }
    if (day < 0) {
        day = day + 30;
        mon--;
    }

    // if(finalage!=yourage){
    //     para.innerText = `Seriously Bro!`
    //     return;
    // }
    console.log(finalage);
    para.innerText = `You are ${yourage} Years ${mon} Months and ${day} Days Old`


}

btn.addEventListener('click', age);


