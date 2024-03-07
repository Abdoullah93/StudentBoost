<?php
require "database_connection_for_pomodoro.php";
session_start();
file_put_contents('debug.log', "DEBUT DU PROGRAMME DE RECUPERATION DES DONNEES EN BASE" . PHP_EOL, FILE_APPEND);
//TEST
if(isset($_SESSION['user_id'])) {
    // L'ID de l'utilisateur est disponible dans la session
    $user_id = $_SESSION['user_id'];
    // Vous pouvez utiliser $user_id comme nécessaire
    //echo "L'ID de l'utilisateur est : $user_id";
} else {
    // L'ID de l'utilisateur n'est pas défini dans la session, ce qui signifie que l'utilisateur n'est pas connecté
    echo 0;
    exit;
}
//TEST

mysqli_set_charset($bdd, "utf8");
$query="SELECT * FROM `pomodoro` WHERE user_id=$user_id;";
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
