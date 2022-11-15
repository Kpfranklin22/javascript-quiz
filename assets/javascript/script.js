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
