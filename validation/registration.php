<?php

session_start();

// Initialising variables
$errors = array();

// connecting to a database
$db = mysqli_connect('localhost','root','','rexj') or die("could not connect to database");

// Registering Users
$firstname = mysqli_real_escape_string($db, $_POST['firstname']);
$lastname = mysqli_real_escape_string($db, $_POST['lastname']);
$username = mysqli_real_escape_string($db, $_POST['username']);
$email = mysqli_real_escape_string($db, $_POST['email']);
$phone = mysqli_real_escape_string($db, $_POST['phone']);
$sex = mysqli_real_escape_string($db, $_POST['sex']);
$password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
$password_2 = mysqli_real_escape_string($db, $_POST['password_2']);

// form validation
if($password_1 != $password_2){
    array_push($errors, "Passwords do not match!");
}

// checking database for existing user with the same username and email
$user_check_query = "SELECT * FROM user WHERE username = '$username' or email = '$email' LIMIT 1";

$results = mysqli_query($db, $user_check_query);
$user = mysqli_fetch_assoc($results);

if($user) {
    if($user['username'] === $username){array_push($errors, "Username already exists");}
    if($user['email'] === $email){array_push($errors, "Email already exists");}
}

// Registering the user if no error
if(count($errors) == 0){
    $password = md5($password_1);
    $query = "INSERT INTO user (firstname, lastname, username, email, phone, sex, password ) VALUES ('$firstname', '$lastname', '$username', '$email', '$phone', '$sex', '$password')";

    mysqli_query($db, $query);
    echo"Registration successful";
}

// Logging in users
if(isset($_POST['login_user'])) {

    $email = mysqli_real_escape_string($db, $_POST['email']);
    $password = mysqli_real_escape_string($db, $_POST['password_1']);

    if(empty($username)){
        array_push($errors, "Username is required");
    }
    if(empty($password)){
        array_push($errors, "Password is required");
    }

    if(count($errors) == 0) {
        $password = md5($password);

        $query = "SELECT * FROM user WHERE email = '$email' AND password = '$password' ";
        $results = mysqli_query($db, $query);

        if(mysqli_num_results($results)) {
            echo"welcome";
        }else{
            array_push($error, "wrong");
        }
    }

}

?>