<?php
    $HOST = "localhost";
    $USERNAME = "root"
    $PASSWORD = "";
    $DATABASE = "restaurant";

    $conn = mysqli_connect($HOST, $USERNAME, $PASSWORD, $DATABASE);

    if(!$conn){
        die("Koneksi gagal. " . mysqli_connect_error());
    }

    echo "Koneksi berhasil";
?>