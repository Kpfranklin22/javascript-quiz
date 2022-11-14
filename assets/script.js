var timeEl = document.querySelector(".timer");
var startButton = document.querySelector(".start");
var secondsLeft = 100;
var quizContainer = document.querySelector(".quiz");
let myQuestions = [
  {
    question: "Question 1",
    answers: {
      a: "a",
      b: "b",
      c: "c",
      d: "d",
    },
    correctAnswer: "d",
  },
  {
    question: "Question 2",
    answers: {
      a: "a",
      b: "b",
      c: "c",
      d: "d",
    },
    correctAnswer: "b",
  },
  {
    question: "Question 3",
    answers: {
      a: "a",
      b: "b",
      c: "c",
      d: "d",
    },
    correctAnswer: "c",
  },
  {
    question: "Question 4",
    answers: {
      a: "a",
      b: "b",
      c: "c",
      d: "d",
    },
    correctAnswer: "a",
  },
  {
    question: "Question 5",
    answers: {
      a: "a",
      b: "b",
      c: "c",
      d: "d",
    },
    correctAnswer: "d",
  },
];

startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", function () {showQuestions(myQuestions, quizContainer);});

function showQuestions(myQuestions, quizContainer) {
  var output = [];
  var answers;

  for (var i = 0; i < myQuestions.length; i++) {
    answers = [];

    for (letter in myQuestions[i].answers) {
      answers.push(
        "<label>" +
          '<input type="radio" name="question' +
          i +
          '" value="' +
          letter +
          '">' +
          letter +
          ": " +
          myQuestions[i].answers[letter] +
          "</label>"
      );
    }
  
  output.push(
    '<div class="question">' +
      myQuestions[i].question +
      "</div>" +
      '<div class="answers">' +
      answers.join("") +
      "</div>"
  );
  }
  quizContainer.innerHTML = output.join("");
}
function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;

    timeEl.textContent = "Time Remaining: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      quizEnd();
    }
  }, 1000);
}

function quizEnd() {}
