<?php
/* recuperation donnees formulaire */
$nom= $_GET["fnom"];
$prenom= $_GET["fpre"];
$sexe= $_GET["fsex"];
$annee= $_GET["fannee"];
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
echo "connecté à la base de données <br>";
echo "J'ai ajouté ".$nom.$prenom.$sexe.$annee." dans la BD";
 /* Fixe le jeu de caractères de la BDD en UTF-8 */
 mysqli_set_charset($bdd, "utf8");
 /* envoi de la requete d'ecriture */
 $query="INSERT INTO table1 (nom,prenom,sexe,annee)
VALUES('$nom','$prenom','$sexe','$annee')";//requete d'insertion de donnée récolté via le form
 mysqli_query($bdd,$query);
 /* deconnexion de la BDD */
 mysqli_close($bdd);
?>