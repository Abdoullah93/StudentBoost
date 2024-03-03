<?php
require "database_connection_for_pomodoro.php";
file_put_contents('debug.log', "DEBUT DU PROGRAMME DE RECUPERATION DES DONNEES EN BASE" . PHP_EOL, FILE_APPEND);


mysqli_set_charset($bdd, "utf8");
$query="SELECT * FROM `pomodoro` WHERE 1;";
$results=mysqli_query($bdd,$query);
mysqli_close($bdd);
if(!$results){
    file_put_contents('debug.log', "La requête a echoué" . PHP_EOL, FILE_APPEND);
    mysqli_close($bdd);
    exit();
}
$results_arr = mysqli_fetch_all($results, MYSQLI_ASSOC);
$json_str = json_encode($results_arr);
file_put_contents('debug.log', $json_str . PHP_EOL, FILE_APPEND);
echo $json_str;
file_put_contents('debug.log', "FIN DU PROGRAMME DE RECUPERATION DES DONNEES EN BASE" . PHP_EOL, FILE_APPEND);
