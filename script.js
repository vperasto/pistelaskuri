let scoreA = 0;
let scoreB = 0;

function updateDisplay() {
  document.getElementById("scoreA").innerText = scoreA;
  document.getElementById("scoreB").innerText = scoreB;
}

function addScore(team, points) {
  if (team === "A") scoreA += points;
  if (team === "B") scoreB += points;
  updateDisplay();
}

function removeScore(team) {
  if (team === "A" && scoreA > 0) scoreA -= 1;
  if (team === "B" && scoreB > 0) scoreB -= 1;
  updateDisplay();
}

function resetScores() {
  scoreA = 0;
  scoreB = 0;
  updateDisplay();
}

updateDisplay();
