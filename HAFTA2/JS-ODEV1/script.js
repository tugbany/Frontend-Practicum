
// Requesting name from user with prompt

let  user = prompt("Lütfen  Adınızı Giriniz:");
let myName = document.querySelector("#myName");
myName.innerHTML =`${user}`

// fetch item with id myclock

var myClock = document.getElementById('myClock');
function time () {
    let current = new Date();
    let hour = current.getHours();
    let minute = current.getMinutes();
    let second = current.getSeconds();
    myClock.innerHTML = `${hour} : ${minute} : ${second}`;
}
// repeat within a certain time interval
setInterval(time, 1000);