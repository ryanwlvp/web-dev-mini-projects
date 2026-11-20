const timeField = document.getElementById("timeField");

// Control buttons
const startTimerButton = document.getElementById("startTimerButton");
const pauseTimerButton = document.getElementById("pauseTimerButton");
const restartTimerButton = document.getElementById("restartTimerButton");


// Select mode buttons
const modeButtons = document.querySelectorAll('.modeButtons');


// Time options

const defaultTime = {
    focus: 25 * 60,
    short: 5 * 60,
    long: 15 * 60
};

let timeRemain = defaultTime.focus;

let runTimer = null;

let currentMode = "focus"

timeField.innerText = convertTime(defaultTime.focus);


// Functions

function convertTime(num) {
    let minutes = Math.trunc(num / 60);
    let seconds = num % 60;

    return `${formatNumber(minutes)}:${formatNumber(seconds)}`;

};

function formatNumber(num) {
    if (String(num).length === 1) {
        return `0${num}`;
    }
    return num;
}

function startTimer() {
    if (runTimer !== null) {
        return;
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
    timeField.innerText = convertTime(defaultTime[currentMode]);
    timeRemain = defaultTime[currentMode];
    runTimer = null;
    
}

// Button Events
startTimerButton.addEventListener('click', () => {
    startTimer();
})

pauseTimerButton.addEventListener('click', () => {
    pauseTimer();
})

restartTimerButton.addEventListener('click', () => {
    restartTimer();
})

modeButtons.forEach((clickedButton) => {
    clickedButton.addEventListener('click', () => {
        modeButtons.forEach((button) => {
            button.classList.remove("active");
        });

    pauseTimer()
    clickedButton.classList.add("active");
    currentMode = clickedButton.dataset.mode
    timeSelected = defaultTime[clickedButton.dataset.mode];
    timeField.innerText = convertTime(timeSelected);
    timeRemain = timeSelected;
    })
})