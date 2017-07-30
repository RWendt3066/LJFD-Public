    <?php
        //Setup email message
        $toaddress = $_POST['emailTo'];
        $subject = $_POST['emailSubject'];
        $mailcontent = $_POST['emailContent'];
        $fromaddress = $_POST['emailFrom'];
        
        //invoke mail() function to send mail
        mail($toaddress,$subject,$mailcontent,$fromaddress);
    ?>
