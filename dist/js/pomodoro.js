let countdown;
let isPaused = true;
let time = 25 * 60;
let n=1;

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    document.getElementById('timer').textContent = display;
}

function startTimer() {
    if (isPaused) {
        isPaused = false;
        countdown = setInterval(() => {
            time--;
            displayTimeLeft(time);
            if (time === 0) {
            clearInterval(countdown);
            alert('La session Pomodoro est terminée!');
            time = 25 * 60;
            displayTimeLeft(time);
            }
        }, 1000);
        const smokeElement = document.createElement('div');
        smokeElement.classList.add('smoke');
        document.body.appendChild(smokeElement);
        setTimeout(() => {
          smokeElement.remove();
        }, 2000);
    }
}

function pauseTimer() {
  isPaused = true;
  clearInterval(countdown);
}

function resetTimer() {
  clearInterval(countdown);
  isPaused = true;
  time = 25 * 60;
  displayTimeLeft(time);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');