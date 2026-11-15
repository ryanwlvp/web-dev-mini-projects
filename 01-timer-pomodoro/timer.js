const timeField = document.getElementById("timeField");

// Control buttons
const startTimer = document.getElementById("startTimer");
const pauseTimer = document.getElementById("pauseTimer");
const restartTimer = document.getElementById("restartTimer");


// Time options
let defaultTime = 1498;


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

// Button Events
startTimer.addEventListener('click', () => {
    timeRemain = convertTime(defaultTime);
    timeField.innerText = timeRemain;
})
