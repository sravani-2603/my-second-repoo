let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");

let seconds = 0;
let timerInterval = null;

function updateTimer() {
  let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  let secs = String(seconds % 60).padStart(2, '0');
  timerDisplay.textContent = ${hrs}:${mins}:${secs};
}

startBtn.addEventListener("click", () => {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    seconds++;
    updateTimer();
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  seconds = 0;
  updateTimer();
});

updateTimer();