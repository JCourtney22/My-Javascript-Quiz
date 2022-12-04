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

var timer;
var timerCount;

//Start the game function
function startGame(){
    timerCount = 60;
    document.getElementsByClassName("start-screen").style.display = "none";
    startTimer()
}

//Start timer function
function startTimer (){
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount === 0){
        clearInterval(timer);
        }
    }, 1000);
}

//Event listeners
startBtn.addEventListener("click", startGame);

//Function for questions

function selectQuestions(){
    
}

// question.textContent = currentQuestion.question;
//  A.textContent = currentQuestion.A;
//  B.textContent = currentQuestion.B;
//  C.textContent = currentQuestion.C;
//  D.textContent = currentQuestion.D;


// startScreen.addEventListener("click", startTimer);

