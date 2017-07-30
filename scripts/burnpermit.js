// Burning Permit Form Scripted Functions //

// Hide Extra Information Sections until Requested //
// ----------------------------------------------- //
$(function()
	{
	   var fsHeight = 280;
       var bType = 'Unknown';
//	   var bTime = 'Unknown';
	   
        /* Hide Piled Information */
        $('fieldset#piled-info').hide();
        /* Hide Running Fire Information */
        $('fieldset#running-info').hide();
        /* Hide Special Burn Time */
        $('fieldset#burn-time').hide();

        /* Manage visibility of the burn type information fields */
        $('input[name=burn_type]').click(function(event)
            {
                bType = $(this).attr('value');
                if (bType == 'Piled')
                {
                    $('fieldset#running-info').hide();
                    $('.fs-level1').css('min-height','290px');
                    $('fieldset#piled-info').show();
                }
                else
                {
                    $('fieldset#piled-info').hide();
                    $('.fs-level1').css('min-height','260px');
                    $('fieldset#running-info').show();
                };
                if ($('#lt-fs').height() < $('#rt-fs').height())
                    {$('.fs-level1').css('min-height',$('#rt-fs').height());}
                else
                    {$('.fs-level1').css('min-height',$('#lt-fs').height());}
            }
        );
        
        /* Create the calendar pickers for Requested Start and Requested End */
		startDate = new JsDatePick({
			useMode:2,
			target:"burnStart",
			dateFormat:"%d-%M-%Y",
			yearsRange:[2012,2020]
		});
		endDate = new JsDatePick({
			useMode:2,
			target:"burnEnd",
			dateFormat:"%d-%M-%Y",
			yearsRange:[2012,2020]
		});
    }
);
