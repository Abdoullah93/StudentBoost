let countdown;
let isPaused = true;
let time = 25 * 60;
let n=1;
const date = new Date();
const heure = date.getHours() + ":" + date.getMinutes();
const mois = date.toLocaleDateString("fr-FR", { month: 'long' });
const jour = date.toLocaleDateString("fr-FR", { day: 'numeric' });
const dateText = jour + " " + mois;

const elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}


function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    document.getElementById('timer').textContent = display;
}

function startTimer() {
    openFullscreen();
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
// Fonction pour mettre à jour l'heure
function mettreAJourHeure() {
    const maintenant = new Date();
    const heures = maintenant.getHours().toString().padStart(2, "0");
    const minutes = maintenant.getMinutes().toString().padStart(2, "0");
    const secondes = maintenant.getSeconds().toString().padStart(2, "0");
    const tempsTexte = heures + ":" + minutes + ":" + secondes;
    
    document.getElementById("heure").textContent = tempsTexte;
  }
  
  // Mettre à jour l'heure toutes les secondes
  setInterval(mettreAJourHeure, 1000);
  
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');
document.getElementById("start").addEventListener("click", function() {
    document.getElementById("date").textContent = dateText;
    openFullscreen();
  });
  