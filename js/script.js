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

// highscore elements
var btnSaveHighScoreEl = document.querySelector("#submit-highscore");
var initialsInputEl = document.querySelector("#initials");

// set section element creattion
var headerEl = document.createElement("div");
var contentEl = document.createElement("div");
var resultEl = document.createElement("div");

// setup answer button elements
btnAnswer1El = document.querySelector("#answer-1");
btnAnswer2El = document.querySelector("#answer-2");
btnAnswer3El = document.querySelector("#answer-3");
btnAnswer4El = document.querySelector("#answer-4");

// initiate counters
var counter = 60;
var selectedAnswer = 0;
var i = 0;
var WrongAnswers = 0;
var gameScore = 0;
var highscores = [];
// var existingScores = [];


// setup question object/array
var questionsArr = [

    {
        question: "Commonly used data types do NOT include:",
        answer1: "strings",
        answer2: "booleans",
        answer3: "alerts",
        answer4: "numbers",
        correct: 3
    },

    {
        question: "The condition in an if / else statement is enclosed with: ",
        answer1: "quotes",
        answer2: "curly brackets",
        answer3: "parenthesis",
        answer4: "square brackets",
        correct: 3
    },

    {
        question: "Arrays in JavaScript can be used to store: ",
        answer1: "numbers and strings",
        answer2: "other arrays",
        answer3: "booleans",
        answer4: "all of the above",
        correct: 4
    },

    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answer1: "commas",
        answer2: "curly brackets",
        answer3: "quotes",
        answer4: "parenthesis",
        correct: 3
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answer1: "JavaScript",
        answer2: "terminal/bash",
        answer3: "for loops",
        answer4: "console.log",
        correct: 4
    }

];



// start of JavaScript functions

var startGame = function() {
    // resetHighScore();
    setTimer();

}



var displayTimer = function() {

    if (counter >= 0) {
        gameTimerEl.textContent = "Timer: " + counter;
        counter--;    
    } else {
        // alert("you lost")
        clearInterval(intervalId);
        clearContent();
        endGame();
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
        WrongAnswers = WrongAnswers + 1;
    }

    if (i < questionsArr.length - 1) {
        i++;
        displayQuestion();
    } else {
        clearContent();
        clearInterval(intervalId);
        endGame();
    }

}



var clearContent = function() {

    //headerEl.innerHTML = "";
    contentEl.innerHTML = "";
    //resultEl.innerHTML = "";
    btnAnswer1El.style.display = "none";
    btnAnswer2El.style.display = "none";
    btnAnswer3El.style.display = "none";
    btnAnswer4El.style.display = "none";
    btnStartQuizEl.style.display = "none";
    initialsInputEl.style.display = "none";
    btnSaveHighScoreEl.style.display = "none";

}



var displayQuestion = function() {
    
        // clear contentEl if any
        clearContent();
        
        // setup question 
        headerEl.innerHTML = ((i+1) + " of " + questionsArr.length + ": " + questionsArr[i].question);

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



var endGame = function() {
    
    var currentHighscores = JSON.parse(localStorage.getItem("highscore"));
    gameScore = counter - (WrongAnswers*10);

    
    // if (currentHighscore === null || gameScore > currentHighscore.score) {
        initialsInputEl.style.display = "inline";
        btnSaveHighScoreEl.style.display = "inline";
    // } else {
        // btnGoBackEl.style.display = "block";
    // }

    headerEl.innerHTML = "Quiz Results";
    contentEl.innerHTML = "Remaining Time: " + (counter + 1) + "<br />" + "Penalty Seconds: " + (WrongAnswers*10) + "<br />" + "Total score: " + ((counter + 1) - (WrongAnswers*10) + "<br />"); 
    resultEl.innerHTML = "";
    
}



var viewHighScores = function() {
    
    // clear content if necessary
    clearContent();
    
    // header assignment
    headerEl.innerHTML = "High scores";
    headerEl.style.fontWeight = "bold";
    gameHeadingEl.appendChild(headerEl);

    // content assignment
    highscores = localStorage.getItem("highscores");

    // only if highscores exist
    if (highscores) {
        highscores = JSON.parse(highscores);
        
        for (var i=0; i < highscores.length; i++) {
            contentEl.innerHTML = contentEl.innerHTML + (i+1) + ") " + highscores[i].initials + ": " + highscores[i].score + "<br />";
        }
    }   
    // result assignment

    // contentEl.innerHTML = tempScore;
    // gameContentEl.appendChild(contentEl);

    btnStartQuizEl.style.display = "none";
    btnGoBackEl.style.display = "inline";
    btnClearHighScoresEl.style.display = "inline";

}



var saveHighScore = function() {

    var holdArr = [];
    highscores = localStorage.getItem("highscores");

    // get existing highscores only if they exist, if not, create the highscore
    if (highscores) {
        highscores = JSON.parse(highscores);
                
        for (var i=0; i < highscores.length; i++) {
            holdArr.push(highscores[i]);
            console.log("holdArr: " + JSON.stringify(holdArr));
        }
        
        var highscore = {
            initials: initialsInputEl.value,
            score: gameScore + 1
        }

        holdArr.push(highscore);
        highscores = holdArr;
        localStorage.setItem("highscores", JSON.stringify(highscores));
    } else {
        var highscore = {
            initials: initialsInputEl.value,
            score: gameScore + 1
        }

        holdArr.push(highscore);

        highscores = holdArr;
        
        localStorage.setItem("highscores", JSON.stringify(highscores));
        
    }
    viewHighScores();    

}



var clearHighScores = function() {

    // resetHighScore();  
    var highscore = {
        initials: "",
        score: 0
    }

    localStorage.setItem("highscores", JSON.stringify(highscore));
    viewHighScores();

}



var goBack = function() {
    
    location.reload(false);

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
btnGoBackEl.addEventListener("click", goBack);

// listen for highscore button click
btnSaveHighScoreEl.addEventListener("click", saveHighScore );


// Initial call to start quiz
welcomeScreen();
