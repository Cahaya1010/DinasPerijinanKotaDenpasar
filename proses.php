<?php
include 'koneksi.php';

$nama = $_POST['nama'];
$no_tlp = $_POST['telepon'];
$pesan = $_POST['pesan'];

$sql = "INSERT INTO pesan (nama, no_tlp, pesan) VALUES ('$nama', '$no_tlp', '$pesan')";
if ($conn->query($sql) === TRUE) {
    echo "Pesan berhasil dikirim!";
} else {
    echo "Gagal mengirim pesan: " . $conn->error;
}
