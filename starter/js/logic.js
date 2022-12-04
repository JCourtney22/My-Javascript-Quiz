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

var timer;
var timerCount;

//Start the game function
function startGame(){
    timerCount = 10;
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
