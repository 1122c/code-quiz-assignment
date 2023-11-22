document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-btn");
  const closeButton = document.getElementById("close");
  const saveScoreBt = document.getElementById("save-bt");
  const highScoreBt = document.getElementById("view-high-score");
  const questionContainer = document.getElementById("question-container");
  const choicesContainer = document.getElementById("choices-container");
  const timerElement = document.getElementById("time");
  const endContainer = document.getElementById("end-container");
  const initialsInput = document.getElementById("initials");
  const highScoresContainer = document.getElementById("high-scores-container");
  let score = 0;
  let currentQuestionIndex = 0;
  let timeRemaining = 60;
  let timerInterval;
});
const questions = [
  {
    question: "JSON stands for _______.",
    choices: [
      "JavaScript Object Notation",
      "Java Object Notation",
      "JavaScript Object Normalization",
      "JavaScript Object-Oriented Notation",
    ],
    correctAnswer: "JavaScript Object Notation",
  },
  {
    question: " JSON is a _____ for storing and transporting data.",
    choices: ["xml format", "text format", "JavaScript", "php format"],
    correctAnswer: "text format",
  },
  {
    question: "The JSON syntax is a subset of the _____ syntax.",
    choices: ["Ajax", "Php", "HTML", "JavaScript"],
    correctAnswer: "JavaScript",
  },
];
