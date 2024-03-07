<?php
require 'database_connection_for_pomodoro.php'; 
session_start();
// Récupérez les données (envoyé par js/pomodoro_save_data.js) et les stockées en base
file_put_contents('debug.log', "DEBUT DU PROGRAMME D'INSERTION EN BASE" . PHP_EOL, FILE_APPEND);
if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
}else{
    echo 0;
    exit;
}
$dateText = $_POST['date_session'];
$NomSession = $_POST['NomSession'];
$dureeSession = $_POST['dureeSession'];
file_put_contents('debug.log',
$dateText . PHP_EOL .
$NomSession . PHP_EOL .
$dureeSession . PHP_EOL, 
FILE_APPEND);


file_put_contents('debug.log', "connecté à la base de données" . PHP_EOL, FILE_APPEND);
file_put_contents('debug.log', "J'ai ajouté la session ci dessus dans la BD" . PHP_EOL, FILE_APPEND);
 /* Fixe le jeu de caractères de la BDD en UTF-8 */
 mysqli_set_charset($bdd, "utf8");
 /* envoi de la requete d'ecriture */
 $query="INSERT INTO pomodoro (user_id, nom_session, durée_session, date_session)
VALUES('$user_id','$NomSession','$dureeSession','$dateText')";//requete d'insertion de donnée récolté via le form
 mysqli_query($bdd,$query);
 /* deconnexion de la BDD */
 mysqli_close($bdd);



// Ne pas oublier de renvoyer quelque chose au client !
// Par exemple, vous pouvez renvoyer un message de confirmation
file_put_contents('debug.log', "FIN DU PROGRAMME D'INSERTION EN BASE" . PHP_EOL, FILE_APPEND);

?>