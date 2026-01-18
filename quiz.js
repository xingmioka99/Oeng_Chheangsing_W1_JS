// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#score");
const dom_start = document.querySelector("#start");

dom_start.addEventListener("click", onStart);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  // TODO
  element.style.display = "none";
}

function show(element) {
  // TODO
  element.style.display = "block";
}

function onStart() {
  // Render the current question
  // Display the quiz view,
  // Hide the start view
  hide(dom_start);
  hide(dom_score);
  show(dom_quiz);
  renderQuestion();
  
}

function renderQuestion() {
  // Render the current question on the quiz view
  let q = questions[runningQuestionIndex];
  dom_question.innerHTML = q.title;
  dom_choiceA.innerHTML = "A. " + q.choiceA;
  dom_choiceB.innerHTML = "B. " + q.choiceB;
  dom_choiceC.innerHTML = "C. " + q.choiceC;
  dom_choiceD.innerHTML = "D. " + q.choiceD;
}

function onPlayerSubmit(answer) {
  // Update the score, display the next question or the score view
  let correct = questions[runningQuestionIndex].correct;
  if (answer === correct) {
    score++;
  }
  runningQuestionIndex++;
  if (runningQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    hide(dom_quiz);
    show(dom_score);
    renderSCore();
  }
}
function checkAnswer(answer) {
  onPlayerSubmit(answer);
}
function renderSCore() {
  // calculate the amount of question percent answered by the user
  // choose the image based on the scorePerCent
   let percent = Math.round((score / questions.length) * 100);
  let emoji = "";

  if (percent < 20) emoji = "😢";
  else if (percent < 40) emoji = "😕";
  else if (percent < 60) emoji = "😐";
  else if (percent < 80) emoji = "🙂";
  else emoji = "🎉";
  dom_score.innerHTML = `${emoji} <br> ${percent}% correct
    

  `;
}

// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);

