<?php
require 'database_connection.php';

// Récupérer l'ID de l'événement à supprimer depuis la requête POST
$event_id = $_POST['event_id'];

// Construire la requête de suppression
$delete_query = "DELETE FROM ".$table." WHERE event_id = ".$event_id;

// Exécuter la requête
if(mysqli_query($con, $delete_query)) {
    $data = array(
        'status' => true,
        'msg' => 'Event deleted successfully!'
    );
} else {
    $data = array(
        'status' => false,
        'msg' => 'Sorry, Event not deleted.'
    );
}

// Retourner la réponse au format JSON
echo json_encode($data);
?>
