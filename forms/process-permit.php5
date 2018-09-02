<html lang="en">
  <head>
    <title>Process Permit Request | LJFD.org</title>

      <link rel="stylesheet" type="text/css" href="../stylesheets/forms.css" />
	    <link rel="stylesheet" type="text/css" href="../stylesheets/burnPermit.css" />

      <script type="text/javascript" src="../scripts/jquery.min.js"></script>

      <?php
      // short variables for forms data

      //Permitee Information
      $firstname = $_POST['firstname'];
      $lastname = $_POST['lastname'];
      $address1 = $_POST['address1'];
      $address2 = $_POST['address2'];
      $city = $_POST['city'];
      $state = $_POST['state'];
      $zip = $_POST['zip'];
      $areacode = $_POST['areacode'];
      $prefix = $_POST['prefix'];
      $phone = $_POST['phone'];
      $extension = $_POST['extension'];
      $full_phone = '('.$areacode.') '.$prefix.'-'.$phone;
      if (strlen($extension) >= 1)
        {$full_phone .= ' Ext.'.$extension;};
      $email = $_POST['email'];

      //Burn Description Information
      $burn_type = $_POST['burn_type'];
      //Piled Burn
      $pile_trees = $_POST['pile_trees'];
      $pile_brush = $_POST['pile_brush'];
      $pile_other = $_POST['pile_other'];
      $other_material = $_POST['other_material'];
      $pileqty = $_POST['pileqty'];
      $pileSize = $_POST['pileSize'];
      //Running Burn
      $running_trees = $_POST['running_trees'];
      $running_brush = $_POST['running_brush'];
      $running_grass = $_POST['running_grass'];

      //Date and Time Information
      $start_date = $_POST['start_date'];
      $end_date = $_POST['end_date'];

      //Special Conditions Information
      $sc_info = $_POST['sc_info'];

      // eMail Permitee Information
      $emailTitle = '<h2>Request for Burning Permit</h2>';
      $permitee = '<p><b>Permitee Information:</b></p>';
      $permitee .= $firstname.' '.$lastname.'<br />';
      $permitee .= (strlen($address2) >= 1 ? $address1.'<br />'.$address2 : $address1).'<br />';
      $permitee .= $city.', '.$state.' '.$zip.'<br /><br />';
      $permitee .= '<b>Phone: </b>'.$full_phone.'<br />';
      $permitee .= '<b>Email: </b>'.$email.'<br />';

      // eMail Burn Description Information
      $description = '<br />';
      $description .= '<p><b>Description of Burn:</b></p>';
      if ($burn_type == 'Piled')
      {
        $description .= '<p>'.$pileqty.' piles will be burned with an approximate size of '.$pileSize.' feet.<p>';
        $description .= '<p>Material to be burned consists of:</p><ul>';
          if (isset($pile_trees)) {$description .= '<li>'.$pile_trees.'</li>';};
          if (isset($pile_brush)) {$description .= '<li>'.$pile_brush.'</li>';};
          if (isset($pile_other)) {$description .= '<li>'.$other_material.'</li>';};
        $description .= '</ul>';
      };
      if ($burn_type == 'Running Fire')
      {
        $description .= '<p>This will be a Running Fire consisting of the following material:</p><ul>';
          if (isset($running_trees)) {$description .= '<li>'.$running_trees.'</li>';};
          if (isset($running_brush)) {$description .= '<li>'.$running_brush.'</li>';};
          if (isset($running_grass)) {$description .= '<li>'.$running_grass.'</li>';};
        $description .= '</ul>';
        $description .= '<p>The size of burn will be limited to less than 1 acre (approx. 200 ft. x 200 ft.)</p><br />';
      };
      $description .= '<b>Date of Burn: </b>'.$start_date.' to '.$end_date.'<br />';

      $description .= '<br />';
      if (strlen($sc_info) >= 1)
      {
        $description .= '<p><b>Special Conditions:</b></p>';
        $description .= $sc_info.'<br><br>';
      }

      // Javascript Function for Burn Permit Request email
      echo    '<script type="text/javascript">';
      echo    'function emailBurnPermit(){';

      // Setup eMail Information
      echo    'var toAddress = "rwendtpmp@gmail.com, krewald@ljfd.org";';
      // echo    'var toAddress = "rwendtpmp@gmail.com";';
      echo    'var fromAddress = "'.$email.'";';
      echo    'var subject = "eRequest for Burn Permit";';
      echo    'var mailContent = "'.$emailTitle.$permitee.$description.'";';

      // Send eMail
      echo    '$.post("sendmail.php5",'.
                '{emailTo:toAddress,emailSubject:subject,emailContent:mailContent,emailFrom:fromAddress},'.
                'function(data){'.
                'if (!data) {alert("An Error was encountered!  Burn Permit Request NOT sent!")}'.
                'else {emailSuccess();};})';
      echo    '}';
      echo    '</script>';
    ?>
    <script type="text/javascript">
        function emailSuccess()
        {
            $('div#left-side').html(
                '<h2>Request for Burning Permit</h2><br />' +
                '<h4>Your email request for a burning permit was successfully delivered!</h4><br />' +
                '<p style="color:red;"><b>NOTE: </b>This is a REQUEST ONLY and must be approved by the LJFD Fire Marshal prior to the start of the burn.  You will be contacted within the next couple of days regarding the status of the permit and whether any additional information is needed prior to approval of the permit.</p><br>' +
                '<p style="color:black;">If you wish to submit an additional permit, click on Edit Permit Request to return to the Burning Permit Request entry page.</p>');
        }
    </script>

  </head>

  <body>

    <div id="container">

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

      <div id="left-side" class="float-left" style="width:49%">
        <h2>Request for Burning Permit</h2>
        <br />
        <h4>Verify Information to be Submitted then Click Send to Fire Marshal</h4>
        <br />
        <?php
          echo '<p><b>Permitee Information:</b></p>';
          echo $firstname.' '.$lastname.'<br />';
          echo (strlen($address2) >= 1 ? $address1.'<br />'.$address2 : $address1).'<br />';
          echo $city.', '.$state.' '.$zip.'<br /><br />';
          echo '<b>Phone: </b>'.$full_phone.'<br />';
          echo '<b>Email: </b>'.$email.'<br />';

          echo '<br />';
          echo '<p><b>Description of Burn:</b></p>';
          if ($burn_type == 'Piled')
          {
            echo '<p>'.$pileqty.' piles will be burned with an approximate size of '.$pileSize.' feet.<p>';
            echo '<p>Material to be burned consists of:</p><ul>';
              if (isset($pile_trees)) {echo '<li>'.$pile_trees.'</li>';};
              if (isset($pile_brush)) {echo '<li>'.$pile_brush.'</li>';};
              if (isset($pile_other)) {echo '<li>'.$other_material.'</li>';};
            echo '</ul>';
          };
          if ($burn_type == 'Running Fire')
          {
            echo '<p>This will be a Running Fire consisting of the following material:</p><ul>';
              if (isset($running_trees)) {echo '<li>'.$running_trees.'</li>';};
              if (isset($running_brush)) {echo '<li>'.$running_brush.'</li>';};
              if (isset($running_grass)) {echo '<li>'.$running_grass.'</li>';};
            echo '</ul>';
            echo '<p>The size of burn will be limited to less than 1 acre (approx. 200 ft. x 200 ft.)</p><br />';
          };
          echo '<b>Date of Burn: </b>'.$start_date.' to '.$end_date.'<br />';

          echo '<br />';
          if (strlen($sc_info) >= 1)
          {
            echo '<p><b>Special Conditions:</b></p>';
            echo $sc_info.'<br><br>';
          }
        ?>
      </div>

      <div id="right-side" style="padding-left:51%;">
        <span class="bpv-button" onclick="window.history.back()">
          <span class="bpv-button-image">
            <img src="../images/contacts.png" />
          </span>
          <span class="bpv-button-text">
            <p><b>Edit<br>Permit<br>Request</b></p>
          </span>
        </span>
        <span class="bpv-button-spacer"></span>
        <span class="bpv-button" onclick="emailBurnPermit()">
          <span class="bpv-button-image">
            <img height="84" src="../images/letter.png" />
          </span>
          <span class="bpv-button-text">
            <p><b>Send to<br>Fire<br>Marshal</b></p>
          </span>
        </span>
        <div id="permit-agreement">
          <h4>Permitee Must Agree:</h4><br />
          <ul>
            <li>To keep this fire under control and to assume responsibility for all damages and costs that may result from burning done under this permit.</li>
            <li>To attend this fire until completely extinguished.</li>
            <li>To have this permit available at the burn site for inspection.</li>
            <li>Not to burn if there is a practical alternative method for disposal of the material such as chipping, composting or recycling</li>
            <li>To use a clean burning device to start the fire.</li>
            <li>Not to conduct burning during any air quality alert.</li>
            <li>Not to burn prohibited materials listed under M.S. 88.171 unless authorized under Minnesota Statutes.</li>
            <li>To extinguish the fire immediately if the permit is revoked.</li>
            <li>That the permit fire will not be allowed to smolder without flame.</li>
            <li>To abide by all MN statutes and local ordinances pertaining to open burning.</li>
          </ul>
        </div>
      </div>
      <br />
      <hr style="text-align:center; width:100%;" />
    </div>
  </body>

</html>
