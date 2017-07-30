// ======================================== //
// PR Event Request Form Scripted Functions //
// ======================================== //

$(function()
	{
	   var fsHeight = 280;
       var bType = 'Unknown';
//	   var bTime = 'Unknown';
	   
// ----------------------------------------------- //
// Hide Extra Information Sections until Requested //
// ----------------------------------------------- //
        /* Hide Address Information */
        $('fieldset#address-info').hide();
        /* Hide Station Information */
        $('fieldset#station-info').hide();
        /* Hide Special Burn Time */
        $('fieldset#burn-time').hide();

// ----------------------------------------------------- //
// Manage visibility of the burn type information fields //
// ----------------------------------------------------- //
        $('input[name=location]').click(function(event)
            {
                bType = $(this).attr('value');
                if (bType == 'Community')
                {
                    $('fieldset#station-info').hide();
                    $('fieldset#address-info').show();
                }
                else
                {
                    $('fieldset#address-info').hide();
                    $('fieldset#station-info').show();
                };
            }
        );
        
// ---------------------------------------------------- //
// Create the calendar pickers for Requested Event Date //
// ---------------------------------------------------- //
		prDate = new JsDatePick({
			useMode:2,
			target:"eventDate",
			dateFormat:"%d-%M-%Y",
			yearsRange:[2012,2020]
		});

// ------------------------------------------------ //
// Create the time pickers for Requested Event Time //
// ------------------------------------------------ //
        $('#eventTime').timePicker(
		     {
                  startTime: "08:00", // Using string. Can take string or Date object.
  				  endTime: "19:00", // new Date(0, 0, 0, 15, 30, 0), Using Date object here.
  				  show24Hours: false,
  				  separator: ':',
  				  step: 30
             }
		);
// ------------------------------------------------ //
  
      }
);
