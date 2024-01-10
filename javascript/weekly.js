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
    let fmonth = Math.floor(cal/ (30*86400000));
    let fday = Math.floor(cal/86400000);


    if (mon <0) {
        mon = mon + 12;
        yourage--;
    }
    if (day < 0) {
        day = day + 30;
        mon--;
    }

    if(curdate.getMonth()==birth.getMonth() && curdate.getDate()<birth.getDate()){
            mon = mon+12;
            yourage--;
    }
    
    if(finalage<0 || fmonth<0 || fday<0){
        para.innerText = "Seriously Bro!";
        return;
    }

    console.log("years"+finalage);
    console.log("month"+fmonth);
    console.log("days"+fday);
    para.innerText = `You are ${yourage} Years ${mon} Months and ${day} Days Old`


}

btn.addEventListener('click', age);


