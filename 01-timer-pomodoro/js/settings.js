const modeButtons = document.querySelectorAll('.modeButtons');

const openSettingsBtn = document.getElementById("openSettings");

const closeSettingsBtn = document.getElementById("closeSettings");

const timeSettings = document.getElementById("timeSettings");



modeButtons.forEach((clickedButton) => {
    clickedButton.addEventListener('click', () => {
        modeButtons.forEach((button) => {
            button.classList.remove("active");
        });

    
    clickedButton.classList.add("active");
    })
})


openSettingsBtn.addEventListener('click', () => {
    timeSettings.classList.add("active");
})

closeSettingsBtn.addEventListener('click', () => {
    timeSettings.classList.remove("active");
})