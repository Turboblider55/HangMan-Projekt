<!-- Ez az php nincs használva, csak tesztelésnek lett megcsinálva -->
<!-- A React projektbe az a link van használva ami a mintába is van -->
<?php
header('Access-Control-Allow-Origin: *');

require_once 'db.php';

$sql = "SELECT * from word where id = rand(0,34)";

$stmt = $conn->query($sql);
if($stmt)
    echo json_encode($stmt->fetchAll());
?>