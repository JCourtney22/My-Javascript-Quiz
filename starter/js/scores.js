let highscores = JSON.parse(localStorage.getItem("Initials")) || [];
highscores.sort(function (x, y) {
    return y.Score - x.Score;
});
let olEl = document.getElementById("highscores");

for (let i = 0; i < highscores.length; i++){
    let liEl = document.createElement("li");
    liEl.textContent = highscores[i].Initials + " - " + highscores[i].Score;
    olEl.appendChild(liEl);
}