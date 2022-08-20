const clockHandSecs = document.querySelector('.clock-hand-secs');
const clockHandMins = document.querySelector('.clock-hand-mins');
const clockHandHours = document.querySelector('.clock-hand-hours');

function getTime() {
    const now = new Date();

    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    const timeInterval = 6;

    setRotation(clockHandSecs, (secs * timeInterval));
    setRotation(clockHandMins, (mins * timeInterval + secs / 10));
    setRotation(clockHandHours, (hours * 30 + mins / 2));
}

function setRotation(element, rotation) {
    element.style.setProperty('--rotation', rotation);
}

getTime();
setInterval(getTime, 1000);