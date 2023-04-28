const textboxName = document.querySelector('.speaker-name');
const editBtn = document.querySelector('.edit-button .edit');
const saveBtn = document.querySelector('.edit-button .save');
let [seconds, minutes] = [00,00]
const displayTime = document.querySelector('.speech-time__total .time-track')
let timer = null


function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
    }
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = m +":"+ s;
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000)
}

function watchStop(){
    clearInterval(timer)
}

function watchReset(){
    clearInterval(timer);
    [seconds, minutes] = [0,0]
    displayTime.innerHTML = "00:00";
}