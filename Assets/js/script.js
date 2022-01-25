let timeEl = document.querySelector('.time');
let correctAns = document.querySelectorAll('.choice')
let nextQuestion = document.querySelectorAll('.first')

let timeLeft = 21;
let points = 0;

function setTime() {
    let timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = 'Time: ' + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = 'Times Up!!'
        }
    }, 1000);
}

function setPoints() {
    let pointsScored = document.querySelector('.score')
    if (pointsScored.style.display === 'inline') {
        points.textContent = points + 50;
    }
}

document.querySelector('.choice-correct-1').addEventListener("click", function() {
    let choiceOne = document.querySelector('p', '.pos-result-1')
    if (choiceOne.style.display === 'none') {
        choiceOne.style.display = 'inline';
    } else {
        choiceOne.style.display = 'none'
    }
})

document.querySelector('.choice-incorrect-1').addEventListener("click", function() {
    let choiceOther = document.querySelectorAll('p', '.neg-result-1')
    if (choiceOther.style.display === 'none') {
        choiceOther.style.display = 'inline';
    } else {
        choiceOther.style.display = 'none'
    }
})

setPoints()
setTime();