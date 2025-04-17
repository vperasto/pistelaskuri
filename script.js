let scoreBlue = 0;
let scoreRed = 0;

function updateDisplay() {
  document.getElementById('scoreBlue').textContent = scoreBlue;
  document.getElementById('scoreRed').textContent = scoreRed;
}

function addPoints(team, points) {
  if (team === 'blue') scoreBlue += points;
  else scoreRed += points;
  updateDisplay();
}

function subtractPoint(team) {
  if (team === 'blue' && scoreBlue > 0) scoreBlue--;
  else if (team === 'red' && scoreRed > 0) scoreRed--;
  updateDisplay();
}

function confirmScoreReset() {
  if (confirm('Oletko varma että haluat resetoida pisteet?')) {
    scoreBlue = 0;
    scoreRed = 0;
    updateDisplay();
  }
}

// Timer-toiminnot
let timerInterval;
let totalSeconds = 0;

function updateTimerDisplay() {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  document.getElementById('timeDisplay').textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    totalSeconds++;
    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function confirmTimerReset() {
  if (confirm('Oletko varma että haluat resetoida ajan?')) {
    pauseTimer();
    totalSeconds = 0;
    updateTimerDisplay();
  }
}
