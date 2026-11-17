const timeField = document.getElementById("timeField");

// Control buttons
const startTimerButton = document.getElementById("startTimerButton");
const pauseTimerButton = document.getElementById("pauseTimerButton");
const restartTimerButton = document.getElementById("restartTimerButton");


// Time options
let defaultTime = 1500;

let timeRemain = defaultTime;

let runTimer = null;

timeField.innerText = convertTime(defaultTime);


// Functions

function convertTime(num) {
    let minutes = Math.trunc(num / 60);
    let seconds = num % 60;

    return `${formatNumber(minutes)}:${formatNumber(seconds)}`

};

function formatNumber(num) {
    if (String(num).length === 1) {
        return `0${num}`;
    }
    return num;
}

function startTimer() {
    if (runTimer !== null) {
        return
    }
    runTimer = setInterval(() => {     
        if (timeRemain === 0)  {
            restartTimer()
            return;
        }  
        timeRemain -= 1;
        timeField.innerText = convertTime(timeRemain);

    }, 1000);

}

function pauseTimer() {
    clearInterval(runTimer);
    runTimer = null;
}

function restartTimer() {
    clearInterval(runTimer);
    timeField.innerText = convertTime(defaultTime);
    timeRemain = defaultTime;
    runTimer = null;
    
    
}

function resetTimer() {
    restartTimer()
}


// Button Events
startTimerButton.addEventListener('click', () => {
    startTimer();
})

pauseTimerButton.addEventListener('click', () => {
    pauseTimer()
})

restartTimerButton.addEventListener('click', () => {
    restartTimer()
})
