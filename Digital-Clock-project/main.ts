const myClock: any = document.getElementById('clock');
// const myClock  = document.querySelector('#clock');



setInterval(function() {
    let date = new Date();
// console.log(date.toLocaleTimeString());
myClock.innerHTML = date.toLocaleTimeString();
}, 1000);