<?php
//date_default_timezone_set("Europe/Paris");
//$date_session = date("Y/m/d")." ".date("H:i:sa");

// Débogage : regardez ce que vous recevez
// Récupérez les données
file_put_contents('debug.log', "DEBUT DU PROGRAMME" . PHP_EOL, FILE_APPEND);
$user_id = "test_abdoullah";
$dateText = $_POST['date_session'];
$NomSession = $_POST['NomSession'];
$dureeSession = $_POST['dureeSession'];
file_put_contents('debug.log', 
$data . PHP_EOL .
$dateText . PHP_EOL .
$NomSession . PHP_EOL .
$dureeSession . PHP_EOL, 
FILE_APPEND);

// Maintenant, vous pouvez faire ce que vous voulez avec ces données
// Par exemple, insérez-les dans une base de données
// Ou créez un fichier de données
/* identifiants pour la connexion avec la BDD */
/* à adapter selon la configuration */
$host="127.0.0.1:3307";
$user="root";
$pass="";
$base="studentboost";
/* connexion à la BDD */
$bdd = mysqli_connect($host,$user,$pass,$base); //connexion bdd
if (!$bdd)
    die('Echec de connexion au serveur de base de
données:'.mysqli_connect_error().' '.mysqli_connect_errno());
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
file_put_contents('debug.log', "FIN DU PROGRAMME" . PHP_EOL, FILE_APPEND);

?>