<?php
	require_once '../includes/Twig/Autoloader.php';
    require_once "../config.php";
    use Parse\ParseClient;
    use Parse\ParseSessionStorage;
    use Parse\ParseUser;

    ParseClient::setStorage( new ParseSessionStorage() );
   
    $user = new ParseUser();
   
    $user->set("username", $_POST['username']);
    $user->set("password", $_POST['password']);
    $user->set("email", $_POST['email']);
    
    try {
      $user->signUp();
      echo 1;
      // Hooray! Let them use the app now.
    } catch (ParseException $ex) {
      // Show the error message somewhere and let the user try again.
      echo 0;
    }
    
?>