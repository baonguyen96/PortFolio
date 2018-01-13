<?php

/*
 * Using PHPMailer library
 * PHPMailer repository: https://github.com/PHPMailer/PHPMailer
 */

$bot = $_POST["bot"];
$result = "";

// send if no bot
if($bot === "") {
    $to = "bntest96@gmail.com";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $header = "From: $email";

    if(mail($to, $subject, $message, $header)) {
        $result = "Success";
    }
    else {
        $result = "Internal Error";
    }
}
else {
    $result = "Bot";
}

header("Content-type: application/json");
echo json_encode($result);

?>