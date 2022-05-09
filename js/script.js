// setup element variables
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
var selectedAnswer = 0;

// setup question object/array
var questionsArr = [
    {
        question: "In JavaScript, what does DOM refer to?",
        answer1: "Document Object Manager",
        answer2: "Vin Diesel",
        answer3: "Dominic Toretto",
        answer4: "Your mom's previous boyfriend",
        correct: 1
    },

    {
        question: "Commonly used data types do NOT include:",
        answer1: "strings",
        answer2: "booleans",
        answer3: "alerts",
        answer4: "numbers",
        correct: 3
    },

    {
        question: "Which is the correct 'for' statement?",
        answer1: "for variable = 'value' { do something }",
        answer2: "for (variable === 'value') { do something };",
        answer3: "for (variable == 'value') ( do something )",
        answer4: "for variable === value | do something",
        correct: 2
    }


];



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
        }, 1000);
        
        displayQuestion();      

}



var buttonFormHandler = function(event) {

    event.preventDefault();
    // console.log(event);
    

    selectedAnswer = event.target.dataset.answer;
    
    if (selectedAnswer == questionsArr[i].correct) {
        resultEl.textContent = "Correct!";
        gameResultEl.appendChild(resultEl);
        
    } else {
        resultEl.textContent = "Wrong!";
        gameResultEl.appendChild(resultEl);
        
    }
    
}



var clearContent = function() {

    contentEl.innerHTML = "";
    // btnAnswer1El.style.display = "none";
    // btnAnswer2El.style.display = "none";
    // btnAnswer3El.style.display = "none";
    // btnAnswer4El.style.display = "none";

    btnStartQuizEl.style.display = "none";

}



var displayQuestion = function(questionIndex) {
    
        
        console.log("Question Index: " + questionIndex);
        // clear contentEl if any
        clearContent();


        while (selectedAnswer = 0) {
        // setup question 
        headerEl.innerHTML = questionsArr[i].question;

        // setup/display button answers
        
        btnAnswer1El.innerHTML = questionsArr[i].answer1;
        btnAnswer1El.style.display = "block";
        btnAnswer1El.addEventListener("click", buttonFormHandler);

        
        btnAnswer2El.innerHTML = questionsArr[i].answer2;
        btnAnswer2El.style.display = "block";
        btnAnswer2El.addEventListener("click", buttonFormHandler);

        
        btnAnswer3El.innerHTML = questionsArr[i].answer3;
        btnAnswer3El.style.display = "block";
        btnAnswer3El.addEventListener("click", buttonFormHandler);

        
        btnAnswer4El.innerHTML = questionsArr[i].answer4;
        btnAnswer4El.style.display = "block";
        btnAnswer4El.addEventListener("click", buttonFormHandler);
    }
    
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



// loadGame();
welcomeScreen();
