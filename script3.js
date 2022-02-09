const totalSecondsEl = document.getElementById("totalSeconds");
const newYears = "1 Jul 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    totalSecondsEl.innerHTML = parseFloat(totalSeconds).toFixed(0);

    // cirkel.style.setProperty('--element-height', 10 + 'px')
    // cirkel.style.setProperty('--element-width', 10 + 'px')

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

