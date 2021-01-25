//html objects defined here//
var result = document.querySelector("#highscore");
var quizTimerEl = document.getElementById("quizTimer");
var quesTimerEl = document.getElementById("QuesTimer");
var mainEl = document.getElementById("quiz");
var timerTab = document.getElementById("timer");
var submitButton = document.createElement("submit");
var questions = [];

//global variables//
var score = 0;
var quiz = {};
var questionDuration = 15;
var questionSecElapsed = 0;
var questionInterval;
var startButton = document.querySelector(".start_btn");


console.log("JS file connected");
// list of all questions, choices, and answers
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];
function initialize() {
    clearresults();
    reset();
}

console.log(startButton);

startButton.addEventListener("click", function () {
    console.log(
        "hi I am Priya"
    )
    playQuestions();
}
);

// function to clear details element of all children
function clearresults() {
    mainEl.innerHTML = "";
}

function reset() {
    questions = "";
    score = 0;

    questionDuration = 15;
    questionSecElapsed = 0;
    questionInterval;
    console.log("reset");
}

//start quiz
function playQuestions() {
    if (test) { console.log("--- playQuestions ---"); }
    // select quiz randomize questions

    quiz = setUpQuestions(questionSet);

    // displays timers
    timerTab.setAttribute("style", "visibility: visible;");

    // Start timers here
    questionDuration = questions.length * 15;
    if (test) { console.log("duration g,q:", answers, questionDuration); }

    startGameTimer();
    renderTime();

    //go to first question
    presentQuestions();

    console.log(quiz);
}