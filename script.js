let seconds = 0;
let minutes = 0;
let hours = 0;

let h = 0;
let m = 0;
let s = 0;

let stopWatch = true;

let watch = document.querySelector('.watch');
console.log(watch);


let hs = document.querySelector('.hours-color');
let ms = document.querySelector('.minutes-color');
let ss = document.querySelector('.seconds-color');

hs.style.color = 'red';
ms.style.color = 'blue';
ss.style.color = '#14dc1e';

console.log(hs, ms, ss);

function countNumbers() {
    seconds++;

    if(seconds/60 === 1) {
        minutes += 1;
        seconds = 0;
    } else if (minutes/60 === 1) {
        minutes += 1;
        seconds = 0;;
    } else if(seconds < 10) {
        s = "0" + seconds;
    } else {
        s = seconds;
    }
    if(minutes < 10) {
        m = "0" + minutes;
    } else {
        m = minutes;
    }
    if(hours < 10) {
        h = "0" + hours;
    } else {
        h = hours;
    }
    time = watch.innerHTML = h + ':' + m + ':' + s;

}


let start = document.querySelector('.btn-start');
let stop = document.querySelector('.btn-stop');
let reset = document.querySelector('.btn-reset');

console.log(start, stop, reset);

start.addEventListener('click', () => {
    if(stopWatch === true) {
        start = window.setInterval(countNumbers, 1000);
        stopWatch = false;
    }
    
})

stop.addEventListener('click', () => {
    window.clearInterval(start);
    stopWatch = true;
})

reset.addEventListener('click', () => {
    window.clearInterval(start);
    h = '00';
    m = '00';
    s = '00';
    seconds = 0;
    stopWatch = true;
    watch.innerHTML = h + ':' + m + ':' + s;
   
})