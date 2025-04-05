<?php
include 'conexion.php';

$nombre = "Camiseta Negra";
$descripcion = "Camiseta de algodón para hombre.";
$precio = 299.99;
$stock = 25;
$categoria = "Hombre";
$imagen_url = "imagenes/camiseta_negra.jpg";

$sql = "INSERT INTO productos (nombre, descripcion, precio, stock, categoria, imagen_url)
        VALUES ('$nombre', '$descripcion', $precio, $stock, '$categoria', '$imagen_url')";

if ($conn->query($sql) === TRUE) {
    echo "Producto insertado correctamente";
} else {
    echo "Error: " . $conn->error;
}
$conn->close();
?>
