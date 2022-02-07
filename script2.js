function checkAnswer() {
    if (document.getElementById("output").value == "correct") {
        window.location.href = "versie 3.html";
    } else {
        document.getElementById("AnswerCheck").innerHTML = "Your answer is incorrect";
    }
}
