// LJFD Scripted Functions //

// Global Variables //
// ---------------- //
var siteArea = "home";
var MIButton = null;
var apparatus = null;
var appIndex = null;
var currApparatus = new Object();
var FAQ = new Array();
var News = new Array();
var GroupPhoto = new Image(628,325);
GroupPhoto.src = "Images/group-photo-2011.png";
var Sta3Contact = new Image(628,325);
Sta3Contact.src = "Images/station3.png";




// Activate Navigation Bar Control and Load Home Page Information //
// -------------------------------------------------------------- //
$(function()
	{
   $('span.nav-tab').not('.nav-active')
   .hover(function(event)
			{
				$(event.target).removeClass('nav-button').addClass('nav-hover') /* Mouse Over */
			},  
		  function(event)
			{
				$(event.target).removeClass('nav-hover').addClass('nav-button') /* Mouse Out */
			}
		 )
   .end()
   .click(function(event)
			{
				$('span.nav-tab').filter('.nav-active').removeClass('nav-active').addClass('nav-button');
				$(event.target).addClass('nav-active');
				siteArea = event.target.id;
				loadPage();
			}
		 );
	}
);
$(function()
	{
		loadPage()
	}
);

// Load Content to Page Information Columns //
// ---------------------------------------- //
function loadPage()
{
   $.get('content/' + siteArea + '-page-mc.html', '',
		function(data)
		{
			$('div#main-content').html(data);
		}
		, 'html');
   $.get('content/' + siteArea + '-page-lc.html', '',
		function(data)
		{
			$('div#left-content').html(data);
			if ($('button').hasClass('mi-button'))
			{
				MIButton = $('button').first().attr('id');
				activateButtons(MIButton);
			};
			if (siteArea == 'home')
			{
				HomePageFAQ();
				HomePageNews();
			};
		}
		, 'html');
   $.get('content/' + siteArea + '-page-rc.html', '',
		function(data)
		{
			$('div#right-content').html(data);
			if (siteArea == 'home')
			{
				loadCallHistory(0);
				$('#ch-previous').show();
			};
		}
		, 'html');
}
;

// Activate More Information Buttons and Load First Information Content //
// -------------------------------------------------------------------- //
function activateButtons(firstButton)
{
   $('button#' + firstButton).css('background-color', '#000099');
   $('button.mi-button').click(function(event)
		{
			MIButton = event.target.id;
			$('button.mi-button').css('background-color', '#990000');
			$(event.target).css('background-color', '#000099');
			displayMI(MIButton);
			$.get('content/' + siteArea + '-page-rc.html', '',
				function(data)
				{
					$('div#right-content').html(data);
				}
				, 'html');
		});
	displayMI(firstButton);
}

function displayMI(Button)
{
		$.get('content/mi/' + siteArea + '-' + Button + '.html', '',
		function(data)
		{
			$('span#mi-data').html(data);
			if (Button == 'apparatus'){getApparatus()};
			if (Button == 'ljfdarea'){setStationPopup()};
			if (Button == 'indoors' || Button == 'outdoors'){displaySafetySheets(Button)};
		}
		, 'html');
}
