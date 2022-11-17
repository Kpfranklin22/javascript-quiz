//Global variables
var highestScore = document.getElementById("highest-score");
var playAgain = document.getElementById("play-again");
var scoreList = document.getElementById("scoreList");
var scores = JSON.parse(localStorage.getItem("currentHighScore")) || [];
// currentHighestScoreInitials = "";

for (let i = 0; i < scores.length; i++) {
  var li = document.createElement("li");
  li.setAttribute("class", "scoreItems");
  li.textContent = scores[i].userInitials + " : " + scores[i].score;
  scoreList.append(li);
}
