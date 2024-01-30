let innercard = document.querySelector('.card1')


function display(y) {

    innercard.innerHTML = `
    <div>
    <p>Name : <span>${y.name}</span></p>
    <p>Country : <span>${y.country}</span></p>
    <p>Phone No. : <span>${y.phone}</span></p>
    <p>Place : <span>${y.village + ", " + y.city + ", " + y.state}</span></p>
    </div>
    `
}


if (localStorage.getItem("info")) {


    let y = JSON.parse(localStorage.getItem("info"))

    display(y)

}
else {

    let firstname = prompt("Enter First Name")
    let lastname = prompt("Enter Last Name")
    let country = prompt("Enter country")
    let phone = prompt("Enter Phone Number")
    let state = prompt("Enter state")
    let city = prompt("Enter city")
    let village = prompt("Enter village")

    let data = {
        name: firstname + " " + lastname,
        country: country,
        phone: phone,
        state: state,
        city: city,
        village: village
    }


    let x = JSON.stringify(data)

    display(data);
    localStorage.setItem("info", x)
}

document.querySelector('.reset').addEventListener('click', () => {
    localStorage.clear();

    innercard.innerHTML = "Add Data"
})

document.querySelector('.add').addEventListener('click', () => {

    let firstname = prompt("Enter First Name")
    let lastname = prompt("Enter First Name")
    let country = prompt("Enter country")
    let phone = prompt("Enter Phone Number")
    let state = prompt("Enter state")
    let city = prompt("Enter city")
    let village = prompt("Enter village")

    let data = {
        name: firstname + " " + lastname,
        country: country,
        phone: phone,
        state: state,
        city: city,
        village: village
    }


    let x = JSON.stringify(data)

    display(data);
    localStorage.setItem("info", x)

})
