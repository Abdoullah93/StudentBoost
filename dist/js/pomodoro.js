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

  function editTimer() {
    const timer = document.getElementById('timer');
    const newtimer_value = document.getElementById('durée-session').valueAsNumber;
    console.log((isNaN(newtimer_value)));
    const hour = Math.floor(newtimer_value/60);
    const minutes = newtimer_value%60;
    if (isNaN(newtimer_value)){
      timer.innerHTML = "00:00:00";
    }else if (hour!=0) {
      timer.innerHTML = ('0'+hour).slice(-2)+":"+('0'+minutes).slice(-2)+":00";
    } else {
      timer.innerHTML = "00:"+('0'+newtimer_value).slice(-2)+":00"; 
    }
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
  document.getElementById('durée-session').addEventListener("input",editTimer);
  