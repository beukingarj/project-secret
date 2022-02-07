// const daysEl = document.getElementById("days");
// const hoursEl = document.getElementById("hours");
// const minsEl = document.getElementById("mins");
// const secondsEl = document.getElementById("seconds");
const totalSecondsEl = document.getElementById("totalSeconds");

const newYears = "1 Jul 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    // const days = Math.floor(totalSeconds / 3600 / 24);
    // const hours = Math.floor(totalSeconds / 3600) % 24;
    // const mins = Math.floor(totalSeconds / 60) % 60;
    // const seconds = Math.floor(totalSeconds) % 60;

    totalSecondsEl.innerHTML = parseFloat(totalSeconds).toFixed(0);
    // daysEl.innerHTML = days;
    // hoursEl.innerHTML = formatTime(hours);
    // minsEl.innerHTML = formatTime(mins);
    // secondsEl.innerHTML = formatTime(seconds);

    if (totalSeconds <= 0)  {
        // window.location.href = "versie 2.html";
    }
    
    
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);

