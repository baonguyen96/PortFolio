<?php

$bot = $_POST["bot"];
$result = "";

if($bot != "") {
    $result = "Bot";
}
else {
    $senderName = $_POST["name"];
    $senderEmailAddress = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    if(mail('baonguyen0396@gmail.com', $subject, $message)) {
        $result = "Success";
    } else {
        $result = "Internal Error";
    }

}

header("Content-type: application/json, charset=utf-8");
echo json_encode($result);

?>