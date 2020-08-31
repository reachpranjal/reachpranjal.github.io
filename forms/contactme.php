<?php

if (isset($_POST['submit'])){
	$name = $_POST['name'];
	$mailFrom = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	
	$email_body = "Username: $name.\n".
		      "User Email: $visitor_email.\n".
		      "Message: $message.\n";

	$mailto = "paulpranjal1908@gmail.com"

	$headers = "From: $email_from \r\n";
	
	/*$headers .= "Reply-To: $visitor_email \r\n;*/

	mail($mailto, $email_subject, $email_body, $headers);

	header("Location: index.html?mailsend");
}

?>