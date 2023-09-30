let counterElement = document.getElementById("counterValue");
let countEl = document.getElementById("count");
let startTimerEl = document.getElementById("startTimer");
let secondsLeft = 0;
let timerCompletedText = "Your Time is UP";
let timerId;

function clearPreviousTimers() {
    clearInterval(timerId);
}
startTimerEl.onclick = function() {
    secondsLeft = countEl.value;
    countEl.value = "";
    clearPreviousTimers();
    setTimerAndShow();
}

function setTimerAndShow() {
    counterElement.textContent = secondsLeft;
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1;
        counterElement.textContent = secondsLeft;
    } else {
        clearPreviousTimers();
        counterElement.textContent = timerCompletedText;
    }
}

function stopTimer() {
    let secondsLeft = counterElement.textContent;
    clearInterval(timerId);
    counterElement.textContent = secondsLeft;
}

function onRestart() {
    let secondsLeft = parseInt(counterElement.textContent);
    timerId = setInterval(startTimer, 1000);
}

function onReset() {
    let counterValue = 0;
    clearPreviousTimers();
    counterElement.textContent = counterValue;
    counterElement.style.color = "black";
}