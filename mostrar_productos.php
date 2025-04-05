<?php
include 'conexion.php';

$sql = "SELECT * FROM productos";
$resultado = $conn->query($sql);
?>

<table border="1">
    <tr>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Categoría</th>
        <th>Imagen</th>
    </tr>
    <?php while ($fila = $resultado->fetch_assoc()) { ?>
        <tr>
            <td><?php echo $fila['nombre']; ?></td>
            <td><?php echo $fila['descripcion']; ?></td>
            <td>$<?php echo $fila['precio']; ?></td>
            <td><?php echo $fila['stock']; ?></td>
            <td><?php echo $fila['categoria']; ?></td>
            <td><img src="<?php echo $fila['imagen_url']; ?>" width="80"></td>
        </tr>
    <?php } ?>
</table>

<?php
$conn->close();
?>
