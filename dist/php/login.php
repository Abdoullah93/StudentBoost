<?php
require 'database_connection_for_pomodoro.php'; 
session_start();
file_put_contents('debug.log', "DEBUT DU PROGRAMME LOGIN.PHP" . PHP_EOL, FILE_APPEND);
$mail = $_POST['mail'];
$pass = $_POST['pass'];
$query="SELECT * FROM `utilisateur` WHERE mail = '$mail' AND password = '$pass';";
$results=mysqli_query($bdd,$query);
if ($results->num_rows > 0) {
    $row = $results->fetch_assoc();
    $user_id = $row['user_id'];
    file_put_contents('debug.log', "ID CORRECT" . PHP_EOL . "user_id: " . $user_id . PHP_EOL, FILE_APPEND);
    echo 0;
    $_SESSION['user_id'] = $user_id;
} else {
    file_put_contents('debug.log', "ID INCORRECT" . PHP_EOL, FILE_APPEND);
    echo 1;
}
file_put_contents('debug.log', "FIN DU PROGRAMME LOGIN.PHP" . PHP_EOL, FILE_APPEND);
