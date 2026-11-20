const openSettingsBtn = document.getElementById("openSettings");

const closeSettingsBtn = document.getElementById("closeSettings");

const timeSettings = document.getElementById("timeSettings");

const saveSettingsBtn = document.getElementById("saveSettings");

const inputs = document.querySelectorAll(".inputDefaultTime");


function fillInputFields(input) {
    let i = 0;
    for (let key in defaultTime) {
        input[i].value = defaultTime[key] / 60;
        i++;
    }

}

function closeSettings() {
    timeSettings.classList.remove("active");
}

function validateInputs(inputs) {
    for (let input of inputs) {
        if (Number(input.value) < 1 || Number(input.value) > 999 || ! Number.isInteger(Number(input.value))) {
            return false;
        }
} return true;

}

fillInputFields(inputs);


openSettingsBtn.addEventListener('click', () => {
    timeSettings.classList.add("active");
})

closeSettingsBtn.addEventListener('click', () => {
    closeSettings();
    fillInputFields(inputs);
    
})

saveSettingsBtn.addEventListener('click', () => {
    if (validateInputs(inputs)) {
        pauseTimer();
        let i = 0;
        for (let key in defaultTime) {
            defaultTime[key] = inputs[i].value * 60;
            i++;
    }
        timeRemain = defaultTime[currentMode];
        timeField.innerText = convertTime(timeRemain);
        fillInputFields(inputs);
        closeSettings();
        return;
    } else {
        alert("Configurações inválidas! Digite números entre 1 e 999");
        fillInputFields(inputs);
    }
})