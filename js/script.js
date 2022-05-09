

var formEl = document.querySelector("#button-form");
var gameHeadingEl = document.querySelector("#heading");
var gameContentEl = document.querySelector("#content");
var gameResultEl = document.querySelector("#result");
var btnStartQuizEl = document.querySelector("#btn-start-quiz");
var btnClearHighScoresEl = document.querySelector("#btn-clear-high-scores");
var btnViewHighScoresEl = document.querySelector("#btn-view-high-scores");
var btnGoBackEl = document.querySelector("#btn-go-back");
var gameTimerEl = document.querySelector("#game-timer");

// set section element creattion
var headerEl = document.createElement("div");
var contentEl = document.createElement("div");
var resultEl = document.createElement("div");

// setup answer button elements
btnAnswer1El = document.querySelector("#answer-1");
btnAnswer2El = document.querySelector("#answer-2");
btnAnswer3El = document.querySelector("#answer-3");
btnAnswer4El = document.querySelector("#answer-4");

// initiate counter
var counter = 60;

// setup question object/array

var questionsObj = {
    q: "In JavaScript, what does DOM refer to?",
    a: "Document Object Manager",
    a1: "Vin Diesel",
    a2: "Dominic Toretto",
    a3: "Your mom's previous boyfriend"
}





























// start of JavaScript functions

var startGame = function() {
    setTimer();
}



var displayTimer = function() {
    if (counter >= 0) {
        gameTimerEl.textContent = "Timer: " + counter;
        counter--;    
    } else {
        alert("you lost")
        clearInterval(intervalId);
    }
}



var setTimer = function() {
    
        
        intervalId = setInterval(() => {
            displayTimer();
        }, 250);
        displayQuestion();

}



var buttonFormHandler = function(event) {
    event.preventDefault();
    // debugger;
    var buttonForm = document.querySelector(".form");
    buttonForm.addEventListener("click", function(event) {
        
        var element = event.target;

        if (element.matches(".button")) {
            var buttonAnswer = element.getAttribute("data-answer");
            alert("buttonAnswer: " + buttonAnswer); 
        }   

        // this kinda works, but it requries an initial click that doesn't do anything, then it displays the alert the number of times the button is clicked.


    });
    
    // Code below works
    // var answerButton = document.querySelector("#button-form");
    // alert("Answer: " + answerButton.dataset.answer);
}



var clearContent = function() {
    contentEl.innerHTML = "";
    btnAnswer1El.style.display = "none";
    btnAnswer2El.style.display = "none";
    btnAnswer3El.style.display = "none";
    btnAnswer4El.style.display = "none";

    btnStartQuizEl.style.display = "none";
}



var displayQuestion = function() {

    // clear contentEl if any
    clearContent();

    // setup question 
    headerEl.innerHTML = questionsObj.q;

    // setup/display button answers
    
    btnAnswer1El.innerHTML = questionsObj.a1;
    btnAnswer1El.style.display = "block";

    
    btnAnswer2El.innerHTML = questionsObj.a2;
    btnAnswer2El.style.display = "block";

    
    btnAnswer3El.innerHTML = questionsObj.a;
    btnAnswer3El.style.display = "block";

    
    btnAnswer4El.innerHTML = questionsObj.a3;
    btnAnswer4El.style.display = "block";

}



var viewHighScores = function() {
    
    // clear content if necessary
    clearContent();
    
    // header assignment
    headerEl.innerHTML = "High scores";
    headerEl.style.fontWeight = "bold";
    gameHeadingEl.appendChild(headerEl);

    // content assignment
    
    var highscore = JSON.parse(localStorage.getItem("highscore"));
    contentEl.innerHTML = highscore.initials + ": " + highscore.score;
    gameContentEl.appendChild(contentEl);

    

    // result assignment
    btnStartQuizEl.style.display = "none";
    btnGoBackEl.style.display = "inline";
    btnClearHighScoresEl.style.display = "inline";
    
}



var clearHighScores = function() {

    alert("cliear high scores");

}



var welcomeScreen = function() {
    // var headerEl = document.createElement("div");
    
    headerEl.textContent = "Coding Quiz Challenge";
    headerEl.style.fontWeight = "bold";
    gameHeadingEl.appendChild(headerEl);

    
    contentEl.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    gameContentEl.appendChild(contentEl);

    

    
    resultEl.className = "results-welcome";
    gameResultEl.appendChild(resultEl);
    gameTimerEl.textContent = "Timer: 60";
    btnStartQuizEl.style.display = "inline";
    btnGoBackEl.style.display = "none";
    btnClearHighScoresEl.style.display = "none";
}

// start of JavaScript non-function code

// listen for Start Quiz button click
btnStartQuizEl.addEventListener("click", startGame);

// listen for view high scores click
btnViewHighScoresEl.addEventListener("click", viewHighScores);

// listen for clear high scores click
btnClearHighScoresEl.addEventListener("click", clearHighScores);

// listen for go back button click
btnGoBackEl.addEventListener("click", welcomeScreen);

// user form event button click thingy here to evaluate the answer button click
formEl.addEventListener("click", buttonFormHandler);



// loadGame();
welcomeScreen();
