var images = [
    'tignes.jpg',
    'rotterdam.jpg',
    'obsteig.jpg',
    'ubud.jpg',
    'weissee.jpg',
    'el_nido.jpg',
    'nong_khiaw.jpg',
]

var i = 0
document.body.style.backgroundImage = "url(" + images[i] + ")";

function checkAnswer() {
    if (images[i].includes(document.getElementById("output").value.toLowerCase().replace(" ", "_"))) {
        i = i + 1;
        if (i == 7) {
            window.location.href = "versie 3.html";
        }

        document.body.style.backgroundImage = "url(" + images[i] + ")";
        document.getElementById("output").value = "";
        document.getElementById("AnswerCheck").innerHTML = "";
        
    } else {
        document.getElementById("AnswerCheck").innerHTML = "Het antwoord is niet goed";
        document.getElementById("output").value = "";
    }
}