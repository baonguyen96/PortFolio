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
    // adjust json file location accordingly
    $json = file_get_contents("../../../mailer.json");
    $credentials = json_decode($json, true);

    // receiver
    $myName = $credentials["name"];
    $myUsername = $credentials["username"];
    $myPassword = $credentials["password"];

    // sender
    $senderName = $_POST["name"];
    $senderEmailAddress = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $header = "From:\r\n$senderName at $senderEmailAddress";    // gmail does not allow custom "From" address header

    try {
        $mail = new PHPMailer(true);
        $mail->SMTPDebug = 0;   // set to 2 to enable debugging
        $mail->isSMTP();
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        $mail->Host = "smtp.gmail.com";
        $mail->Port = 587;
        $mail->SMTPSecure = "tls";
        $mail->SMTPAuth = true;
        $mail->Username = $myUsername;
        $mail->Password = $myPassword;
        $mail->setFrom($senderEmailAddress);
        $mail->addAddress($myUsername, $myName);
        $mail->Subject = $subject;
        $mail->Body = $header."\r\n\r\n\r\nMessage:\r\n".$message;

        if ($mail->send()) {
            $result = "Success";
        } else {
            $result = "Internal Error";
        }
    } catch (Exception $e) {
        $result = "Exception";
    }
}
else {
    $result = "Bot";
}

header("Content-type: application/json, charset=utf-8");
echo json_encode($result);

?>