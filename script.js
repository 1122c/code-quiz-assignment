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
  {
    question: "In the JSON syntax, data is separated by _____.",
    choices: ["Semicolons", "Colons", "Commas", "Hyper"],
    correctAnswer: "Commas",
  },
  {
    question: "In the JSON syntax, array is written within in ____.",
    choices: [
      "Square brackets",
      "Curley braces",
      "Paratheses",
      "None of the above",
    ],
    correctAnswer: "Square brackets",
  },
];
function startQuiz() {
  startButton.style.display = "none";
  displayQuestion();
  timerInterval = setInterval(updateTimer, 1000);
}
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;
  choicesContainer.innerHTML = "";
}
currentQuestion.choices.forEach((choice, index) => {
  const choiceButton = document.createElement("button");
  choiceButton.textContent = choice;
  choiceButton.classList.add("button");
  choiceButton.addEventListener("click", () => checkAnswer(choice));
  choicesContainer.appendChild(choiceButton);
});

function checkAnswer(selectedChoice) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedChoice === currentQuestion.correctAnswer) {
    score++;
  } else {
    timeRemaining -= 10;
    {
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      updateTimer();
      endQuiz();
    }
  }
  function updateTimer() {
    if (timeRemaining > 0) {
      timeRemaining--;
      timerElement.textContent = timeRemaining;
    } else {
      endQuiz();
    }
  }
  function endQuiz() {
    clearInterval(timerInterval);
    questionContainer.textContent = "";
    choicesContainer.textContent = "";
    endContainer.style.display = "block";
  }

  function saveScore() {
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    let records = localStorage.getItem("highScore");
    if (records) {
      records = JSON.parse(records);
      records.push({
        initial: `${firstName} ${lastName}`,
        score: score,
      });
      records = JSON.stringify(records);
      localStorage.setItem("highScore", records);
    } else {
      records = [
        {
          initial: `${firstName} ${lastName}`,
          score: score,
        },
      ];
      records = JSON.stringify(records);
      localStorage.setItem("highScore", records);
    }
    endContainer.style.display = "none";
    showHighScore();
  }
  function showHighScore() {
    let records = localStorage.getItem("highScore");
    records = JSON.parse(records);
    records.sort((a, b) => b.score - a.score);
    let recordsHtml = "";
    records.forEach(function (record) {
      recordsHtml += `<li>${record.initial} : ${record.score}</li>`;
    });
    document.getElementById("high_scores_data").innerHTML = recordsHtml;
    highScoresContainer.style.display = "block";
  }

  function closeHighScore() {
    highScoresContainer.style.display = "none";
  }
  startButton.addEventListener("click", startQuiz);
  saveScoreBt.addEventListener("click", saveScore);
  highScoreBt.addEventListener("click", showHighScore);
  closeButton.addEventListener("click", closeHighScore);
}
