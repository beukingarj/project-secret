const totalSecondsEl = document.getElementById("totalSeconds");
const newYears = "1 May 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    totalSecondsEl.innerHTML = parseFloat(totalSeconds).toFixed(0);

    if (totalSeconds <= 0)  {
        window.location.href = "versie 2.html";
    }
        
}

// initial call
countdown();

setInterval(countdown, 1000);