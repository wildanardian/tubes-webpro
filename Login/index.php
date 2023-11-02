<?php
    include 'connection.php';

    session_start();

    if(isset($_SESSION['username'])){
        header("Location: home.php");
        exit();
    }

    if(isset($_POST['submit'])){
        $username = mysqli_real_escape_string($connection, $_POST['username']);
        $password = hash('sha256', $_POST['password']);

        $sql = "SELECT * FROM login WHERE username='$username' AND password='$password'";
        $result = mysqli_query($conn, $sql);

        if($result->num_rows > 0){
            $row = mysqli_fetch_assoc($result);
            $_SESSION['username'] = $row['username'];
            header("Location: home.php");
            exit();
        }else {
            echo "<script>alert('Email atau password anda salah. Silahkan coba lagi')</script>";
        }
    }

?>