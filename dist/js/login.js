function send_data_login(){
    let mail = document.getElementById("login-mail").value;
    let pass = document.getElementById("login-pass").value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST','php/login.php',true);
    xhr.onreadystatechange = function() { 
        // Si l'état de la requête est 4 (terminée, la réponse du 
        // serveur est prête) et le code HTTP retourné/reçu par la 
        // requête est 200 (OK), on affiche notre message. Un code 
        // HTTP de 404 indique "Page not found”. 
        if (xhr.readyState == 4 && xhr.status == 200) { 
            console.log("Information envoyé");
            console.log(xhr.responseText);
            if (xhr.responseText === '0'){
                window.location.href = "index.html";
            }else{
                alert("Incorrect Identifier");
            }
        }
    };
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("mail=" + encodeURIComponent(mail) +
    "&pass=" + encodeURIComponent(pass));
}