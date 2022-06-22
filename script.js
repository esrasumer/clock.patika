function myFunction() {
    let person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("myName").innerHTML =
            person;
    }
}


let d = new Date();
let hour = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();
let day = d.getDay();
minute = checkTime(minute);
second = checkTime(second);
// let Msecond = d.getMilliseconds();
document.getElementById("myClock").innerHTML = (hour + ":" + minute + ":" + second);
console.log(hour + ":" + minute + ":" + second);

let days;
switch (new Date().getDay()) {
    case 0:
        day = "Pazar";
        break;
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Salı";
        break;
    case 3:
        day = "Çarşamba";
        break;
    case 4:
        day = "Perşembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case 6:
        day = "Cumartesi";
}
document.getElementById("myDay").innerHTML = day;

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}