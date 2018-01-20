<?php

include "emailCredentials.php";
$request = $_POST["request"];
$response = "";


if($request == "emailAddress") {
    $response = $credentials["email"];
}
else {
    $response = "Nonexist";
}

echo json_encode($response);

?>