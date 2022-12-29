var questions = [
    {
        question: "Which is larger?",
        options: ["Battlestar Galactica", "Tardis", "Millenium Falcon", "USS Enterprise"],
        answer: "Tardis"
        
    },
    {
        question: "Will you get the answer correct?",
        options: ["Definitely", "Beyond a doubt", "Sure thing", "Affirmative"],
        answer: "Affirmative"
    }
]

var timerEl = document.querySelector("#time");
var startBtn = document.querySelector("#start");


// var startScreen = document.querySelector("#start-screen");
var questionsEl = document.getElementById("questions");
var timer;
var timerCount;
var qIndex = 0;


//Start the game function
function startGame(){
    timerCount = 60;
    document.getElementById("start-screen").style.display = "none";
    questionsEl.removeAttribute("class");
    startTimer();
    quiz(qIndex);
}

//Start timer function
function startTimer (){
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount === 0){
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timer);
    timerEl.textContent = timerCount;
}

//Event listeners
startBtn.addEventListener("click", startGame);

//Question Variables

var questionContainer = document.querySelector("#question-title");
var choicesEl = document.getElementById("choices");
var correctAnswer = "";

function quiz(qIndex) {
 var currentQuestion = questions[qIndex];
correctAnswer = questions[qIndex].answer;
console.log(correctAnswer);
 console.log(currentQuestion);
 questionContainer.textContent = currentQuestion.question;
 for (let i = 0; i < currentQuestion.options.length; i++) {
    const option = currentQuestion.options[i];
    var optionbtn = document.createElement("button");
    optionbtn.setAttribute("class", "option");
    optionbtn.setAttribute("value", option);
    optionbtn.textContent= i + 1 + '. ' + option;
    optionbtn.onclick = checkAnswer;
    choicesEl.appendChild(optionbtn);
 }
}

//Check answer function

var messageEl = document.getElementById("message");
var message = document.createElement("p");

function checkAnswer(event){
    qIndex++;
    var userAnswer = event.target.value;
    console.log(userAnswer);
    if (userAnswer === correctAnswer) {
        message.textContent = "Correct!";
        messageEl.appendChild(message);
        console.log("right");
        choicesEl.innerHTML="";
        quiz(qIndex);
    } else {
        message.textContent = "Wrong! You have lost 5 seconds.";
        messageEl.appendChild(message);
        console.log("wrong");
        choicesEl.innerHTML = "";
        quiz(qIndex);
    }
}


// startScreen.addEventListener("click", startTimer);

