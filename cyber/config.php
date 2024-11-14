<?php
$servername = "localhost";
$username = "root"; // changez ceci si nécessaire
$password = ""; // changez ceci si nécessaire
$dbname = "myapp";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
