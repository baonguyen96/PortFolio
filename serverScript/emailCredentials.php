<?php

/*
 * put mailer.json file outside of the project folder
 * adjust the relative path from this file to mailer.json accordingly
 */
$json = file_get_contents("../../../mailer.json");
$credentials = json_decode($json, true);

?>