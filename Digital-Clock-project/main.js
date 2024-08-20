// const myClock = ():
// Document.getElementbyId('clock');
var myClock = document.querySelector('#clock');
setInterval(function () {
    var date = new Date();
    // console.log(date.toLocaleTimeString());
    myClock.innerHTML = date.toLocaleTimeString();
}, 1000);
