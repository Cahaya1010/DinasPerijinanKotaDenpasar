<?php
$host = '127.0.0.1'; // atau 'localhost'
$user = 'root';
$pass = ''; // pastikan sesuai dengan `MYSQL_ROOT_PASSWORD` di Docker
$db   = 'dbgabut';
$port = 3306; // ini penting!

$conn = new mysqli($host, $user, $pass, $db, $port);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
