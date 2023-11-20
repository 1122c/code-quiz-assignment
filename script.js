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
