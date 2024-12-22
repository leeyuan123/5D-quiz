
let currentStep = 1;

function nextStep(step) {
  document.getElementById(`step-${currentStep}`).classList.add("hidden");
  document.getElementById(`step-${step}`).classList.remove("hidden");
  currentStep = step;
}

function prevStep(step) {
  document.getElementById(`step-${currentStep}`).classList.add("hidden");
  document.getElementById(`step-${step}`).classList.remove("hidden");
  currentStep = step;
}

document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();
  showResults();
});

function showResults() {
  const results = new FormData(document.getElementById("quiz-form"));
  const resultText = [];
  for (const [key, value] of results.entries()) {
    resultText.push(`<strong>${key}</strong>: ${value}`);
  }
  document.getElementById("result-text").innerHTML = resultText.join("<br>");
  document.getElementById(`step-${currentStep}`).classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
}

function restartQuiz() {
  currentStep = 1;
  document.getElementById("quiz-form").reset();
  document.getElementById("result").classList.add("hidden");
  document.getElementById(`step-${currentStep}`).classList.remove("hidden");
}
