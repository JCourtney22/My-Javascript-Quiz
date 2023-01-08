var start = document.querySelector("#start");
var question = document.querySelector("#question-title");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
timerElement = document.querySelector("#time");
var scoreEl = document.querySelector("#final-score");
var choicesDiv = document.querySelector("#choices");
var feedBackEl = document.querySelector("#feedback");
var userInitialsEl = document.querySelector("#initials");
var index = 0;
var score = 0;
var lastQuestion = questions.length - 1;
var initials = "";
var storedPlayerHistory = localStorage.getItem("playerHistory");
var playerHistory = storedPlayerHistory ? JSON.parse(storedPlayerHistory) : [];

// The startGame function is called when the start button is clicked
function startQuiz() {
 timerCount = 60;
 // Prevents start button from being clicked when round is in progress
 start.disabled = true;
 document.getElementById("start-screen").style.display = "none";
 document.getElementById("questions").style.display = "block";
 if (index < lastQuestion) {
  displayQuestion();
 }
 startTimer();
}
function displayQuestion() {
 currentQuestion = questions[index];
 question.textContent = currentQuestion.question;
 choiceA.textContent = currentQuestion.A;
 choiceB.textContent = currentQuestion.B;
 choiceC.textContent = currentQuestion.C;
 choiceD.textContent = currentQuestion.D;
}
// get and store user answer
choicesDiv.addEventListener("click", function (event) {
 if (event.target === choicesDiv) {
  return;
 }
 checkAnswer(event.target.id);
 console.dir(event.target);
})
function checkAnswer(answer) {
 if (answer == questions[index].correctOption) {
  // answer is correct
  feedBackEl.textContent = "Correct"
  score++;
 }
 else {  // answer is wrong
  feedBackEl.textContent = "Wrong";
  timePlenty();
 }
 if (index >= lastQuestion) {// end the quiz and show the score
  displayScore();
 }
 else {  //continue questions
  index++;
  displayQuestion();
 }
}
// The setTimer function starts and stops the timer
function startTimer() {
 timer = setInterval(function () {
  if (timerCount > 0 && index < lastQuestion) {
   timerCount--;
  }
  else {
   clearInterval(timer);
   displayScore();
  }
  timerElement.textContent = timerCount;
 }, 1000);
}
function displayScore() {
 document.getElementById("questions").style.display = "none";
 document.getElementById("end-screen").style.display = "block";
 var submitBtn = document.querySelector("#submit");
 scoreEl.textContent = score;
 submitBtn.addEventListener("click", storeScore);
}
//funtion for 10 sec plenty for wrong answer
function timePlenty() {
 if (timerCount > 10) {
  timerCount = timerCount - 10;
 }
 else {
  timerCount = 0;
 }
}
//stores items in the localStorage
function storeScore() {
 localStorage.setItem("initials", userInitialsEl.value);
 localStorage.setItem("userScore", score);
 let currentPlayer = {
  userScore: score,
  userInitials: userInitialsEl.value,
 }
 // Add to array
 playerHistory.push(currentPlayer);
 console.log(playerHistory);
 localStorage.setItem("playerHistory", JSON.stringify(playerHistory));
}
// Attach event listener to start button to call startGame function on click
start.addEventListener("click", startQuiz);

//Sorting of the score is in the following (edited) 

var playerHistoryList = document.querySelector("#highscores");
var storedPlayerHistory = localStorage.getItem("playerHistory");
var clearStorage = document.querySelector("#clear");
var players = storedPlayerHistory ? JSON.parse(storedPlayerHistory) : [];
players.sort((a, b) => b.userScore - a.userScore)
console.log(players);
playerHistoryList.innerHTML = "";
for (var i = 0; i < players.length; i++) {
 var separator = "  - "
 var player = players[i].userInitials + separator + players[i].userScore;
 var li = document.createElement("li");
 li.textContent = player;
 playerHistoryList.appendChild(li);
}
clearStorage.addEventListener("click", function (event) {
 if (event.target === clearStorage) {
  localStorage.clear();
  window.location.reload(true);
 }
 return
})