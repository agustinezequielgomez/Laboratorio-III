<?php
header('Content-Type: text/txt; charset=ISO-8859-1');

$legajo = $_REQUEST['legajo'];
$nombre = $_REQUEST['nombre'];

$x = "Legajo: ". $legajo. " Nombre:". $nombre;

sleep(3);

echo $x;

?>