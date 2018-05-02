<?php

/*
 * Using PHPMailer library
 * PHPMailer repository: https://github.com/PHPMailer/PHPMailer
 */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';


$bot = $_POST["bot"];
$result = "";

// send if no bot
if($bot === "") {

    // sender
    $senderName = $_POST["name"];
    $senderEmailAddress = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $header = "From:\r\n$senderName at $senderEmailAddress";    // gmail does not allow custom "From" address header

    if(!filter_var($senderEmailAddress, FILTER_VALIDATE_EMAIL)) {
        $result = "Invalid email address";
    }
    else {

        $mail = new PHPMailer(true);

        try {
            $mail->setFrom($senderEmailAddress, $senderName, 0);
            $mail->addAddress('bntest96@gmail.com');
            $mail->Subject = $subject;
            $mail->Body = $header . "\r\n\r\nSubject:\r\n".$subject."\r\n\r\nMessage:\r\n" . $message;

            if ($mail->send()) {
                $result = "Success";
            } else {
                $result = "Internal Error";
            }
        } catch (Exception $e) {
            $e->errorMessage();
            $result = $e->errorMessage();
        }
    }
}
else {
    $result = "Bot";
}

header("Content-type: application/json, charset=utf-8");
echo json_encode($result);

?>