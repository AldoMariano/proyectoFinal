<?php
$host = "localhost";
$db = "tienda_ropa";
$user = "root";
$pass = ""; // Cambiar si tienes contraseña

$conn = new mysqli($host, $user, $pass, $db);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
