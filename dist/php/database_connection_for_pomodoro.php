<?php
$host="127.0.0.1:3307";
$user="root";
$pass="";
$base="studentboost";
/* connexion à la BDD */
$bdd = mysqli_connect($host,$user,$pass,$base); //connexion bdd
if (!$bdd){
    file_put_contents('debug.log', 'Echec de connexion au serveur de base de
    données:'.mysqli_connect_error().' '.mysqli_connect_errno() . PHP_EOL, FILE_APPEND);
    die('Echec de connexion au serveur de base de
    données:'.mysqli_connect_error().' '.mysqli_connect_errno());
}

?>