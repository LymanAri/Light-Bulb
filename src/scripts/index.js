import '../styles/index.scss';
import '@fortawesome/fontawesome-free/js/all';

function bulbOn() {
    let color = document.getElementsByName("color")[0].value;
    if (!color) {
        color = "ffeb00";
    }
    const bulbElement = document.getElementsByClassName("fa-lightbulb")[0];
    bulbElement.style.color = color;
    const bulbStatus = document.getElementById("bulbStatus");
    bulbStatus.innerHTML = "ON";
    bulbStatus.style.color = "#000000";
    const bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.style.backgroundColor = "#ffffff";
}

function bulbOff() {
    const bulbElement = document.getElementsByClassName("fa-lightbulb")[0];
    bulbElement.style.color = "#000000";
    const bulbStatus = document.getElementById("bulbStatus");
    bulbStatus.innerHTML = "OFF";
    bulbStatus.style.color = "#ffffff";
    const bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.style.backgroundColor = "#7b7a7a";
}

window.bulbOn = bulbOn;
window.bulbOff = bulbOff;