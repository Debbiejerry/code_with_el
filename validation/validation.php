<?php

session_start();

/* connecting to a database
$db = mysqli_connect('localhost','root','','rexj') or die("could not connect to database");

// Initialising variables
$email = mysqli_real_escape_string($db, $_POST['email']);
$password = mysqli_real_escape_string($db, $_POST['password']);

$user_check_query = "SELECT * FROM user WHERE email = '$email' AND password = '$password'";
$results = mysqli_query($db, $user_check_query);
$num = mysqli_num_rows($results);

if($num == 0){
    echo"welcome";
}
else{
    array_push($errors, "wrong");
}

?>