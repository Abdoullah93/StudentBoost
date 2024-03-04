<?php                
require 'database_connection.php'; 
$event_name = $_POST['event_name'];
$event_start_date = date("y-m-d", strtotime($_POST['event_start_date'])); 
$event_end_date = date("y-m-d", strtotime($_POST['event_end_date'])); 
$event_color = $_POST['event_color'];
			
$insert_query = "insert into ".$table."(`event_name`,`event_start_date`,`event_end_date`,`event_color`) values ('".$event_name."','".$event_start_date."','".$event_end_date."','".$event_color."')";             
if(mysqli_query($con, $insert_query))
{
	$data = array(
                'status' => true,
                'msg' => 'Event added successfully!'
            );
}
else
{
	$data = array(
                'status' => false,
                'msg' => 'Sorry, Event not added.'				
            );
}
echo json_encode($data);	
?>
