const openSettingsBtn = document.getElementById("openSettings");

const closeSettingsBtn = document.getElementById("closeSettings");

const timeSettings = document.getElementById("timeSettings");



openSettingsBtn.addEventListener('click', () => {
    timeSettings.classList.add("active");
})

closeSettingsBtn.addEventListener('click', () => {
    timeSettings.classList.remove("active");
})