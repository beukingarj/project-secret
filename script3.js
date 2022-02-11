const cirkel = document.querySelector('.cirkel');
const totalSecondsEl = document.getElementById("totalSeconds");
const beginDate = new Date(2022, 1, 9, 14, 0, 0, 0);
const endDate = new Date(2022, 1, 9, 15, 30, 0, 0);

const sheight = 300;
const swidth = 300;
const sborder_radius = 300;
const stop_css = -10;
const sleft_css = 0;

const fheight = 40;
const fwidth = 40;
const fborder_radius = 40;
const ftop_css = 24;
const fleft_css = -15;

function countdown() {
    const currentDate = new Date();
    const totalSeconds = (endDate - currentDate) / 1000;

    if (totalSeconds >= 0)  {
        totalSecondsEl.innerHTML = parseFloat(totalSeconds).toFixed(0);
        const height = (currentDate-beginDate) / (endDate-beginDate) * (fheight-sheight) + sheight;
        const width = (currentDate-beginDate) / (endDate-beginDate) * (fwidth-swidth) + swidth;
        const border_radius = (currentDate-beginDate) / (endDate-beginDate) * (fborder_radius-sborder_radius) + sborder_radius;
        const top_css = (currentDate-beginDate) / (endDate-beginDate) * (ftop_css-stop_css) + stop_css;
        const left_css = (currentDate-beginDate) / (endDate-beginDate) * (fleft_css-sleft_css) + sleft_css;  
        
        cirkel.style.setProperty('--element-height', height + 'px')
        cirkel.style.setProperty('--element-width', width + 'px')
        cirkel.style.setProperty('--element-border-radius', border_radius + 'px')
        cirkel.style.setProperty('--element-top', top_css + 'px')
        cirkel.style.setProperty('--element-left', left_css + 'px')
    } else {
        totalSecondsEl.innerHTML = parseFloat(0).toFixed(0);
        const height = fheight;
        const width = fwidth;
        const border_radius = fborder_radius;
        const top_css = ftop_css;
        const left_css = fleft_css; 

        cirkel.style.setProperty('--element-height', height + 'px')
        cirkel.style.setProperty('--element-width', width + 'px')
        cirkel.style.setProperty('--element-border-radius', border_radius + 'px')
        cirkel.style.setProperty('--element-top', top_css + 'px')
        cirkel.style.setProperty('--element-left', left_css + 'px')
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);

