var gameHeadingEl = document.querySelector("#heading");
var gameContentEl = document.querySelector("#content");
var gameResultEl = document.querySelector("#result");
var btnStartQuizEl = document.querySelector("#btn-start-quiz");



var startGame = function() {
    alert("made it!");
}



var loadGame = function() {
    welcomeScreen();
}



var welcomeScreen = function() {
    var welcomeHeaderEl = document.createElement("div");
    welcomeHeaderEl.textContent = "Coding Quiz Challenge";
    welcomeHeaderEl.style.fontWeight = "bold";
    gameHeadingEl.appendChild(welcomeHeaderEl);

    var welcomeTextEl = document.createElement("div");
    welcomeTextEl.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that inncorrect answers will penalize your score/time by ten seconds!";
    gameContentEl.appendChild(welcomeTextEl);

    

    var welcomeResultEl = document.createElement("div");
    welcomeResultEl.className = "results-welcome";
    
    var startQuizEl = document.createElement("button");
    startQuizEl.textContent = "Start Quiz";
    startQuizEl.setAttribute("id", "btn-start-quiz");

    gameResultEl.appendChild(startQuizEl);
    gameResultEl.appendChild(welcomeResultEl);
}



// btnStartQuizEl.addEventListener("click", startGame);


loadGame();

