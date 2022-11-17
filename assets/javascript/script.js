var questions = [
  {
    questionText: "Who invented Javascript?",
    options: ["Brandon Boyd", "Branden Eich", "Brandon Lee"],
    correctAnswer: "Branden Eich",
  },

  {
    questionText: "What was Javascript originally named?",
    options: ["Javascript", "Frappuccino", "Mocha"],
    correctAnswer: "Mocha",
  },

  {
    questionText: "Which one of these is NOT a declaration of a variable?",
    options: ["scope", "const", "let"],
    correctAnswer: "scope",
  },

  {
    questionText: "Which one of these is NOT an operator?",
    options: ["function", "strict equality", "addition"],
    correctAnswer: "function",
  },

  {
    questionText: "Which one of these is NOT a Javascript interaction?",
    options: ["guess", "prompt", "confirm"],
    correctAnswer: "guess",
  },
];

var startButton = document.getElementById("startButton");
var questionArea = document.getElementById("questionArea");
var questionText = document.getElementById("question-text");
var optionList = document.getElementById("answer-options");
var optionOne = document.getElementById("li1");
var optionTwo = document.getElementById("li2");
var optionThree = document.getElementById("li3");

var endPoint = document.getElementById("endPoint");
var gameOverMessage = document.getElementById("gameOver");
var userInitials = document.getElementById("initialsInput");
var submitInitialsButton = document.getElementById("enter");

var numberCorrect = 0;
var currentQuestionIndex = 0;
var timeLeft = 60;
var finalScore = "";
var timerInterval = "";
var timeAtEnd = "";

function start() {
  countdown();
  quizQuestions();
}

startButton.addEventListener("click", start);

function countdown() {
  var timer = document.getElementById("timer");
  timer.style.display = "block";
  timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft + " seconds left";

    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
}

function quizQuestions() {
  var startingPoint = document.getElementById("startingPoint");
  startingPoint.style.display = "none";
  questionArea.style.display = "block";

  // Loads question text:
  var currentQuestion = questions[0];
  questionText.textContent = currentQuestion.questionText;
  optionOne.textContent = currentQuestion.options[0];
  optionTwo.textContent = currentQuestion.options[1];
  optionThree.textContent = currentQuestion.options[2];

  //Event listener for click on answers
  optionList.addEventListener("click", function (event) {
    var userAnswer = event.target;
    var currentQuestion = questions[currentQuestionIndex];

    //Checks to see if the user answer matches the correct answer
    if (userAnswer.textContent === currentQuestion.correctAnswer) {
      numberCorrect++;
    } else {
      timeLeft = timeLeft - 10;
    }

    //Changes to the next question
    currentQuestionIndex++;

    //Changes text to the next question and loads final page if all questions have been answered
    if (currentQuestionIndex < questions.length) {
      currentQuestion = questions[currentQuestionIndex];
      questionText.textContent = currentQuestion.questionText;
      optionOne.textContent = currentQuestion.options[0];
      optionTwo.textContent = currentQuestion.options[1];
      optionThree.textContent = currentQuestion.options[2];
    } else {
      endGame();
    }
  });
}

function calculateScore() {
  finalScore = numberCorrect * 25 + timeLeft;
}
var currentHighScoreArr = [];
//Checks to see if there is a high score in local storage and if this user's score is higher. If so, it saves this user's score and initials.
function checkHighScore() {
  // if (
  //   localStorage.getItem("currentHighScore") < finalScore ||
  //   localStorage.getItem("currentHighScore" == null)
  // ) {
  // currentHighScore = finalScore;
  // localStorage.setItem("userInitials", currentUserInitials);
  // }
}

function submitHighScore() {
  var currentUserInitials = userInitials.value;
  if (currentUserInitials !== "") {
    currentHighScoreArr =
      JSON.parse(localStorage.getItem("currentHighScore")) || [];
    var userDetails = {
      userInitials: currentUserInitials,
      score: finalScore,
    };
    console.log(userDetails);
    currentHighScoreArr.push(userDetails);
    console.log(currentHighScoreArr);
    localStorage.setItem(
      "currentHighScore",
      JSON.stringify(currentHighScoreArr)
    );
  }
}

// Loads the text for the final page, calculates and displays final score
function endGame() {
  calculateScore();
  clearInterval(timerInterval);
  questionArea.style.display = "none";
  endPoint.style.display = "block";
  gameOverMessage.textContent = "Your final score is " + finalScore + "!";

  //Listens for a click on the button to save user game data
  submitInitialsButton.addEventListener("click", function (e) {
    e.preventDefault();
    submitHighScore();
    // checkHighScore();
    window.open("./highscore.html", "_self");
  });
}
