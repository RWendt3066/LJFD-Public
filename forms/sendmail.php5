    <?php
        //Setup email message
        $toaddress = $_POST['emailTo'];
        $subject = $_POST['emailSubject'];
        $mailcontent = $_POST['emailContent'];
        $fromaddress = $_POST['emailFrom'];

        // To send HTML mail, the Content-type header must be set
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

        // Create email headers
        $headers .= 'From: '.$fromaddress."\r\n".
            'Reply-To: '.$fromaddress."\r\n" .
            'X-Mailer: PHP/' . phpversion();

        //invoke mail() function to send mail
        mail($toaddress,$subject,$mailcontent,$headers);
    ?>
