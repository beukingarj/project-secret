const totalSecondsEl = document.getElementById("totalSeconds");
const endDate = new Date(2022, 3, 1, 0, 0, 0, 0);

function countdown() {
    const currentDate = new Date();

    const totalSeconds = (endDate - currentDate) / 1000;

    totalSecondsEl.innerHTML = parseFloat(totalSeconds).toFixed(0);

    if (totalSeconds <= 0)  {
        window.location.href = "versie 2.html";
    }
        
}

// initial call
countdown();

setInterval(countdown, 1000);