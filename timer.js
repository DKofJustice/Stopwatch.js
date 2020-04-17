//Tracking the HTML elements
let startButton = document.getElementById("startStop");
let lapReset = document.getElementById("lapReset");
let timerCount = document.querySelector(".timerCount");
let lapSection = document.querySelector(".lap-section");
let container = document.querySelector(".container");

//Prepearing the time and necessary variables
let lapContainer;
let lapContainerCheck = false;
let startDate = new Date();
let startDateInit = false;
let stoppedDuration = stoppedTime = timeRunning = null; //Variables necesarry to run the timer
let timeElapsed = new Date();
let minutes = seconds = "00";
let miliseconds = "000";
timerCount.textContent = `${minutes}:${seconds},${miliseconds}`; //Time display
let running = false; //Time running check

//Creating the stopwatch start main button and changes
startButton.addEventListener("click", stopwatch);

let startTime; //Interval function variable

function stopwatch() {

    //Creating conditions for when the stopwatch runs or not
    if (running == false) {

        //Initiating the start time of the stopwatch
        if (startDateInit == false) {
            startDate = new Date();
            startDateInit = true;
        }

        startButton.children[0].textContent = "stop";
        lapReset.children[0].textContent = "lap";

        startTime = setInterval(start, 1);


        if (stoppedTime != null) {
            stoppedDuration += (new Date() - stoppedTime);
        }

        running = true;
    } else if (running == true) {
        startButton.children[0].textContent = "start";
        lapReset.children[0].textContent = "reset";

        stoppedTime = new Date();
        clearInterval(startTime);

        running = false;
    }
}

function start() {
    let timeRunning = new Date(),
    timeElapsed = new Date(timeRunning - startDate - stoppedDuration);

    minutes = timeElapsed.getUTCMinutes();
    seconds = timeElapsed.getUTCSeconds();
    miliseconds = timeElapsed.getUTCMilliseconds();

    timerCount.textContent = 
        `${(minutes > 9 ? minutes : "0" + minutes)}:${
            (seconds > 9 ? seconds : "0" + seconds)},${
            (miliseconds > 99 ? miliseconds : miliseconds > 9 ? "0" + miliseconds : 
            "00" + miliseconds)}`;
}

lapReset.addEventListener("click", lapRes);

function lapRes() {
    if (running == true) {
        //Creates and records laps based on the clicked time
        if (lapContainerCheck == false) {
            lapContainer = document.createElement("div");
            lapContainer.setAttribute("class", "lap-container");
            lapSection.appendChild(lapContainer);
            lapContainerCheck = true;
        }
        lap = document.createElement("div");

        lap.setAttribute("class", "lap");

        lapContainer.appendChild(lap);
        lap.scrollIntoView();
        lap.textContent = timerCount.textContent;
    } else if (running == false) {
        //Resets the values to original
        startDate = null;
        startDateInit = false;
        stoppedDuration = null;
        stoppedTime = null;
        minutes = seconds = "00";
        miliseconds = "000";
        running = false;
        lapContainerCheck = false;

        timerCount.textContent = `${minutes}:${seconds},${miliseconds}`;    
        timeRunning = null;

        clearInterval(startTime);
        lapSection.removeChild(lapContainer);
    }
}