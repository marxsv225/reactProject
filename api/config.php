<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "reactdb";
$id = '';

$con = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));


if (!$con) {
  die("Echec de connexion: " . mysqli_connect_error());
}



?>