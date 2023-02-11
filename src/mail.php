<?php
	if(isset($_POST)){
    $subject = "Request For Quote";
    $content ='Name: '.$_POST['name'].'
    Email: '.$_POST['email'].'
    Mobile: '.$_POST['phone'].'
    Company: '.$_POST['company-name'].'
    Category: '.$_POST['category'].'
    Message: '.$_POST['message'];
    sendmails($subject,$content);     
}

function sendmails($subject,$content) {
  $to = "navyayogeesha@gmail.com";
  $headers = "From: info@lakshmicateringservices.com" . "\r\n" .
  "CC: navyayogeesha@gmail.com";
  $rtn = mail($to,$subject,$content,$headers);
  $return = explode("?",$_SERVER['HTTP_REFERER']);
  header( "Location:".$return[0]);
}
?>