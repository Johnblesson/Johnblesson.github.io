// Defining variables
let seconds = 00;
let tens = 00;
let minutes = 00;
let getMinutes = document.querySelector('.minutes');
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let interval;

// what happens when the start button is clicked
btnStart.addEventListener('click', () => {
    interval = setInterval(startTimer, 10);
})

// what happens when the stop button is clicked
btnStop.addEventListener('click', ()=>{
    clearInterval(interval);
})

// what happens when the reset button is clicked
btnReset.addEventListener('click', ()=>{
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getTens.innerHTML = tens;
    getSeconds.innerHTML = seconds;
})

function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0'+ tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens >= 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        getMinutes.innerHTML = '0' + minutes;
        tens = 0;
        seconds = 0;
    }
}