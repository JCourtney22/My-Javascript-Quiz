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
    },
    {
        question: "What do you have to be careful of in the library?",
        options: ["Musty pages", "The shadows", "The Librarian", "Making too much noise"],
        answer: "The shadows"
    },
    {
        question: "Which detective is Jenny married to?",
        options: ["Sherlock", "Nancy", "Vastra", "Dirk"],
        answer: "Vastra"
    },
    {
        question: "What food did number ten ask for?",
        options: ["Banana", "Apple", "Toast", "Fish Fingers"],
        answer: "Apple"
    },
    {
        question: "Which animal resemble the police-for-hire?",
        options: ["Elephant", "Lion", "Rhino", "Gorilla"],
        answer: "Rhino"
    },
    {
        question: "Which British landmark was a prison?",
        options: ["Stonehenge", "Big Ben", "The Kelpies", "Cardiff Castle"],
        answer: "Stonehenge"
    },
    {
        question: "Which gameshow is deadly if you get the answer wrong?",
        options: ["Who Wants to be a Millionaire", "Pointless", "The Chase", "The Weakest Link"],
        answer: "The Weakest Link"
    },
    {
        question: "Which robot will upgrade you?",
        options: ["Sentinels", "Cybermen", "Hal 9000", "David 8"],
        answer: "Cybermen"
    },
    {
        question: "Which TV series do all the questions reference?",
        options: ["Doctor Who", "Battlestar Galactica", "Star Trek", "Red Dwarf"],
        answer: "Doctor Who"
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
        amendTime(-5)
        console.log("wrong");
        choicesEl.innerHTML = "";
        quiz(qIndex);
    }
}

//Function for amending timer based on current timer

function amendTime(amount) {
    timerCount += amount;
}

// startScreen.addEventListener("click", startTimer);

