//Array of questions
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
var questionsEl = document.getElementById("questions");
var timer;
var timerCount;
var qIndex = 0;
var endPage = document.getElementById("end-screen");
var endScore = document.getElementById("final-score");
var questionContainer = document.querySelector("#question-title");
var choicesEl = document.getElementById("choices");
var correctAnswer = "";
var messageEl = document.getElementById("message");
var message = document.createElement("p");
var userScore = 0
var initialsEl = document.getElementById("initials");
var submitBtn = document.getElementById("submit");

//Start the game function
function startGame(){
    timerCount = 90;
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

//End Game function

function endGame() {
    clearInterval(timer);
    timerEl.textContent = timerCount;
    questionsEl.style.display = "none";
    endPage.removeAttribute("class");
    endScore.textContent = userScore;
}

//Event listener for start button
startBtn.addEventListener("click", startGame);

//Function for displaying the quiz questions
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
        optionbtn.textContent = i + 1 + '. ' + option;
        optionbtn.onclick = checkAnswer;
        choicesEl.appendChild(optionbtn);
    }
}

//Check answer function
function checkAnswer(event){
    qIndex++;
    var userAnswer = event.target.value;
    console.log(userAnswer);
    if (userAnswer === correctAnswer) {
        message.textContent = "Correct!";
        messageEl.appendChild(message);
        console.log("right");
        userScore++;
        if (qIndex >= questions.length) {
            endGame();
        } else {
            choicesEl.innerHTML = "";
            quiz(qIndex);
        };
    } else {
        message.textContent = "Wrong! You have lost 5 seconds.";
        messageEl.appendChild(message);
        amendTime(-5);
        console.log("wrong");
        if (qIndex >= questions.length) {
            endGame();
        } else {
            choicesEl.innerHTML = "";
            quiz(qIndex);
        };
    }
}

//Function for amending timer based on current timer
function amendTime(amount) {
    timerCount += amount;
}

//Create a user object from their submission and their score
function highScore() {
    let Initials = JSON.parse(localStorage.getItem("Initials")) || [];
    var userData = {
        Initials: initialsEl.value.trim(),
        Score: userScore
    };
    Initials.push(userData);
    localStorage.setItem("Initials", JSON.stringify(Initials));
    window.location.href = "./highscores.html";
}

//Event Listener for submit button
submitBtn.addEventListener("click", function () {
    highScore();
    })

