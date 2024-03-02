let countdown;
let isPaused = true;
let time = document.getElementById('durée-session').valueAsNumber * 60;
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
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainderSeconds = seconds % 60;
    const display = `${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    document.getElementById('timer').textContent = display;
}

function startTimer() {
  const n_session = document.getElementById('nom-session').value;
  const d_session = document.getElementById('durée-session').valueAsNumber;
  if (n_session=="" || isNaN(d_session)){
    console.log("empty");
    alert("Donnez un Nom de Session et une durée");
    return "";
  }else{
    console.log("filled");
  }
  send_data();//fill the session information in the data base
  openFullscreen();
  if (isPaused) {
      isPaused = false;
      countdown = setInterval(() => {
          time--;
          displayTimeLeft(time);
          if (time === 0) {
          clearInterval(countdown);
          alert('La session Pomodoro est terminée!');
          time = d_session * 60;
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
  time = document.getElementById('durée-session').valueAsNumber * 60;
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
    // console.log((isNaN(newtimer_value)));
    const hour = Math.floor(newtimer_value/60);
    const minutes = newtimer_value%60;
    if (isNaN(newtimer_value)){
      timer.innerHTML = "00:00:00";
    }else if (hour!=0) {
      timer.innerHTML = ('0'+hour).slice(-2)+":"+('0'+minutes).slice(-2)+":00";
    } else {
      timer.innerHTML = "00:"+('0'+newtimer_value).slice(-2)+":00"; 
    }
    time = newtimer_value*60;
  }
  
  // Mettre à jour l'heure toutes les secondes
  setInterval(mettreAJourHeure, 1000);
  
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');
document.getElementById("start").addEventListener("click", function() {
    document.getElementById("date").textContent = dateText;
    //openFullscreen();
  });
  document.getElementById('durée-session').addEventListener("input",editTimer);

/*
// Fonction pour envoyer les données de session au serveur en utilisant AJAX
function sauvegarderSession() {
  // Récupérer les valeurs des inputs
  var nomSession = document.getElementById("nom-session").value;
  var dureeSession = document.getElementById("duree-session").value;

  // Créer un objet JSON avec les données à envoyer au serveur
  var sessionData = {
      nom: nomSession,
      duree: dureeSession
  };

  // Créer une requête AJAX
  var xhttp = new XMLHttpRequest();

  // Définir la fonction de callback qui sera appelée lorsque la requête sera complétée
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          // La requête a réussi
          console.log("Données sauvegardées !");
      }
  };

  // Ouvrir une requête POST vers le serveur, avec le fichier PHP qui gérera la sauvegarde des données
  xhttp.open("POST", "sauvegarder-session.php", true);

  // Configurer l'en-tête pour indiquer que la requête contient du JSON
  xhttp.setRequestHeader("Content-type", "application/json");

  // Envoyer la requête avec les données JSON
  xhttp.send(JSON.stringify(sessionData));
}
*/
  