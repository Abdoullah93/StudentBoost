function send_data(){
    const date = new Date();
    const annee = date.toLocaleDateString("fr-FR", {year: "numeric"});
    const mois = date.toLocaleDateString("fr-FR", { month: '2-digit' });
    const jour = date.toLocaleDateString("fr-FR", { day: '2-digit' });
    const heures = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const secondes = date.getSeconds().toString().padStart(2, "0");
    const tempsTexte = heures + ":" + minutes + ":" + secondes;
    const date_session =  annee + "-" + mois + "-" + jour + " " + tempsTexte;
    const dureeSession = document.getElementById('durée-session').valueAsNumber;
    const NomSession = document.getElementById('nom-session').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST','php/pomodoro_save_data.php',true);
    xhr.onreadystatechange = function() { 
        // Si l'état de la requête est 4 (terminée, la réponse du 
        // serveur est prête) et le code HTTP retourné/reçu par la 
        // requête est 200 (OK), on affiche notre message. Un code 
        // HTTP de 404 indique "Page not found”. 
        if (xhr.readyState == 4 && xhr.status == 200) { 
            console.log("Information envoyé");
        }
    };
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("date_session=" + encodeURIComponent(date_session) +
     "&dureeSession=" + encodeURIComponent(dureeSession) + 
     "&NomSession=" + encodeURIComponent(NomSession));
}



/*
date_session = aaaa-mm-jj hh:mm:ss
durée_session = minutes
*/ 