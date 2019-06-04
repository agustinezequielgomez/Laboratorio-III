<?php
header('Content-Type: text/txt; charset=ISO-8859-1');

$legajo = 1234;
$nombre = "Juan";

$x = array('legajo'=> $legajo, 'nombre'=> $nombre);

sleep(3);

echo json_encode($x, JSON_FORCE_OBJECT);

?>