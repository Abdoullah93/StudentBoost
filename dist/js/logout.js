function logout(){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/logout.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
    if (xhr.status === 200) {
        alert("Vous avez été déconnecté");
        window.location.href = "login.html";
    } else {
        console.error('Erreur lors de la requête :', xhr.status);
    }
    };

    xhr.onerror = function () {
    console.error('Erreur de réseau');
    };
    xhr.send();
}