let startButton = document.getElementById("startStop");
let lapReset = document.getElementById("lapReset");
let timerCount = document.querySelector(".timerCount");

let startTime, endTime = 0;
let hours = "00";
let minutes = "00";
let seconds = "00";
let miliseconds = "000";
timerCount.textContent = `${hours}:${minutes}:${seconds},${miliseconds}`;
let running = false;

startButton.addEventListener("click", stopwatch);

function stopwatch() {
    if (running == false) {
        startButton.children[0].textContent = "stop";
        lapReset.children[0].textContent = "lap";
        running = true;
    } else if (running == true) {
        startButton.children[0].textContent = "start";
        lapReset.children[0].textContent = "reset";
        running = false;
    }
}
