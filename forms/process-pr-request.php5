<html lang="en">
<head>
    <title>Process PR Event Request | LJFD.org</title>
	
	<link rel="stylesheet" type="text/css" href="../stylesheets/forms.css" />
	<link rel="stylesheet" type="text/css" href="../stylesheets/prEventRequest.css" />

	<script type="text/javascript" src="../scripts/jquery.min.js"></script>

    <?php
    // short variables for forms data
    
        //Event Description Information
        $event = $_POST['event'];
        
        //Date and Time Information
        $event_date = $_POST['event_date'];
        $event_time = $_POST['event_time'];
        
        //Event Location
        $location = $_POST['location'];
        //Community 
        $lastname = $_POST['lastname'];
        $address1 = $_POST['address1'];
        $address2 = $_POST['address2'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $zip = $_POST['zip'];
        //Station 
        $station = $_POST['station'];
        
        //Contact Information
        $firstname = $_POST['firstname'];
        $areacode = $_POST['areacode'];
        $prefix = $_POST['prefix'];
        $phone = $_POST['phone'];
        $extension = $_POST['extension'];
        $full_phone = '('.$areacode.') '.$prefix.'-'.$phone;
        if (strlen($extension) >= 1)
            {$full_phone .= ' Ext.'.$extension;};
        $email = $_POST['email'];
        
        //Special Comment Information
        $sc_info = $_POST['sc_info'];

        // eMail Permitee Information 
        $contact = 'Contact: '.$firstname.' '.$lastname.'\r\n'.
                   'Phone: '.$full_phone.'\r\n'.
                   'Email: '.$email.'\r\n\r\n';

        // eMail Event Description Information 
        $description =  'Type of Event: '.$event.'\r\n';
                $description .= 'Requested Date: '.$event_date.'\r\n';
                $description .= 'Requested Time: '.$event_time.'\r\n\r\n';
                if ($location == 'Community')
                {
                    $description .= 'Location:\r\n';
                    $description .= (strlen($address2) >= 1 ? $address1.'\r\n'.$address2 : $address1).'\r\n';
                    $description .= $city.', '.$state.' '.$zip.'\r\n\r\n';
                };
                if ($location == 'Station')
                {
                    $description .= 'Location:\r\n';
                    $description .= $station.'\r\n\r\n';
                };
                if (strlen($sc_info) >= 1)                
                    {$description .= 'Additional Comments:\r\n'.$sc_info.'\r\n';};
                    
    // Javascript Function for PR Event Request email
        echo    '<script type="text/javascript">';
        echo    'function emailPREvent(){';

        // Setup eMail Information 
        echo    'var toAddress = "rwendtpmp@gmail.com, nberg@ljfd.org";';
//        echo    'var toAddress = "rwendtpmp@gmail.com";';
        echo    'var fromAddress = "From: '.$email.'";';
        echo    'var subject = "eRequest for PR Event";';
        echo    'var mailContent = "'.$contact.$description.'";';

        // Send eMail    
        echo    '$.post("sendmail.php5",'.
                    '{emailTo:toAddress,emailSubject:subject,emailContent:mailContent,emailFrom:fromAddress},'.
                    'function(data){'.
                        'if (!data) {alert("An Error was encountered!  Public Relations Event Request NOT sent!")}'.
                        'else {emailSuccess();};})';
        echo    '}';
    ?>
        function emailSuccess()
        {
            $('div#left-side').html(
                '<h2>Request for Public Relations Event</h2><br />' +
                '<h4>Your email request for a LJFD public relations event was successfully delivered!</h4><br />' +
                '<p style="color:red;"><b>NOTE: </b>This is a REQUEST ONLY and must be approved by the LJFD Fire Marshal for participation of LJFD staff/resources for the event.  You will be contacted within the next couple of days regarding the status of the request and whether any additional information is needed prior to approval of LJFD participation.</p><br><br>');
        }
    </script>

</head>

<body>
 
    <div id="container">

<!-- Standard Forms Header -->

        <div id="page-header">
            <div class="float-left bpv-header-image">
                <img width="90" src="../images/LJFD_Badge_162.png" />
            </div>
            <div class="bpv-header-text">
                <br />
                <h1>Lake Johanna Fire Department</h1>
                <h3>5545 Lexington Avenue North</h3>
                <h3>Shoreview, MN 55126</h3>
                <h3>Office 651-481-7024 | Fax 651-486-8826</h3>
                <br />
                <p>Serving the Communities of<span> | </span> 
				    <a class="st" href="http://www.ci.arden-hills.mn.us/" target="_blank">Arden Hills</a><span> | </span> 
				    <a class="st" href="http://www.cityofnorthoaks.com/" target="_blank">North Oaks</a><span> | </span>
				    <a class="st" href="http://www.shoreviewmn.gov/" target="_blank">Shoreview</a>
                </p>
                <br />
            </div>
        </div>
        <hr style="text-align:center; width:100%;" />
        <br />

<!-- Start of Public Relations Event Request Validation -->
        
        <div id="left-side" style="width:49%">
            <h2 style="text-align:center">Request for Public Relations Event</h2>
            <br />
            <h4 style="text-align:center">Verify Information to be Submitted then Click Send PR Event Request</h4>
                <br />
            <?php
                echo '<div class="float-left" style="width:49%">';
                echo '<p><b>Description of Event:</b></p>';
                echo '<b>Type of Event: </b>'.$event.'<br />';
                echo '<b>Requested Date: </b>'.$event_date.'<br />';
                echo '<b>Requested Time: </b>'.$event_time.'<br />';
                echo '<br />';
                echo '</div>';

                echo '<div>';
                echo '<p><b>Contact Information:</b></p>';
                echo '<b>Contact: </b>'.$firstname.' '.$lastname.'<br />';
                echo '<b>Phone: </b>'.$full_phone.'<br />';
                echo '<b>Email: </b>'.$email.'<br />';
                echo '<br />';
                echo '</div>';
       
                if ($location == 'Community')
                {
                    echo '<b>Location: </b><br />';
                    echo (strlen($address2) >= 1 ? $address1.'<br />'.$address2 : $address1).'<br />';
                    echo $city.', '.$state.' '.$zip.'<br />';
                };
                if ($location == 'Station')
                {
                    echo '<b>Location: </b>'.$station.'<br />';
                };
                echo '<br />';

                if (strlen($sc_info) >= 1)                
                {
                    echo '<p><b>Additional Comments:</b></p>';
                    echo $sc_info.'<br /><br />';
                }
            ?>

            <span class="bpv-button" onclick="window.history.back()">
                <span class="bpv-button-image">
                    <img src="../images/contacts.png" />
                </span>
                <span class="bpv-button-text">
                    <p><b>Edit<br>PR Event<br>Request</b></p>
                </span>
            </span>

            <span class="bpv-button-spacer"></span>

            <span class="bpv-button" onclick="emailPREvent()">
                <span class="bpv-button-image">
                    <img height="84" src="../images/letter.png" />
                </span>
                <span class="bpv-button-text">
                    <p><b>Send<br>PR Event<br>Request</b></p>
                </span>
            </span>

        </div>
        
        <br />
        <hr style="text-align:center; width:100%;" />
    </div>
</body>

</html>
