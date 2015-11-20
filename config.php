<?php

	require_once 'includes/parse/autoload.php';
	use Parse\ParseClient;
    
    session_start();

    $app_id = '5HNUInP58m0Ofu92MDK8sMGdQZqj3Rwj6U1QFL2t';
    $rest_key = 'EIenrwXw1fx1h2kD4trd9CRxsN0k5otWvh6OFHiU';
    $master_key = 'oRLc9urA5uMIFKvWK1r3Ut703zhGmegNXp0nbQBn';
    ParseClient::initialize( $app_id, $rest_key, $master_key );

?>