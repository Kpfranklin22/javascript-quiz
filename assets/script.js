var timeEl = document.querySelector(".timer");

var secondsLeft = 100;

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

document.querySelector("#start").addEventListener("click", startTimer);

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
