let usPassword = document.getElementById('usPassword');
let usName = document.getElementById('usName');
let usEmail = document.getElementById('usEmail');
let usDate = document.getElementById('usDate');
let usNumber = document.getElementById('usNumber');

function getVal() {
    var response =  fetch("http://localhost:3000/addName", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: usName.value, password: usPassword.value, email:usEmail.value, date:usDate.value, number:usNumber.value })
    })
}