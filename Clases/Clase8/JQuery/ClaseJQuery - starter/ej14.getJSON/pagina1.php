<?php
header('Content-Type: text/txt; charset=ISO-8859-1');

$legajo = $_GET['legajo'];
$nombre = $_GET['nombre'];

$x = array('legajo'=> $legajo, 'nombre'=> $nombre);

sleep(5);

echo json_encode($x, JSON_FORCE_OBJECT);

?>