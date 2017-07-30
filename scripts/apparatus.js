// LJFD Apparatus Page Scripted Functions //

// Activate Apparatus Buttons and Get Specs from JSON file [apparatus.txt] //
// ----------------------------------------------------------------------- //
function getApparatus()
{


   $.getJSON('data/apparatus.txt', function(data)
   {
      apparatus = data;
      appIndex = 0;

      $('#app-photo').html('<p>Click on an apparatus for an enlarged image and specifications.</p><br />');
      
      $.each(apparatus, function(index, appList)
      {
         $('#app-photo').append('<span class="apparatus-thumbnail float-left">' +
                                '<img id="' + appList.ID + '" class="app-photo" ' +
                                'src="Images/apparatus/thumbnail/T_' + appList.ID + '.jpg"></img>' +
                                '<h3>' + appList.NAME + '</h3><br /></span>');

      });

      $('img.app-photo')
      .click(function(event)
      {
	     displayApparatus(event.target);
      });

   });

}

// Display Requested Apparatus from Gallery //
// ---------------------------------------- //
function displayApparatus(request)
{
   $.each(apparatus, 
		function(index, appList)
		{
			if (appList.ID == $(request).attr('id'))
			{
				currApparatus = appList;
				appIndex = index
			}
		});
   $.get('content/mi/apparatus-display.html', '',
		function(data)
		{
			/* Display Requested Apparatus */
			$('span#mi-data').html(data);
			$('h1#title').html(currApparatus.NAME);
			$('span#photo').html('<img class="big-photo" src="Images/apparatus/'+currApparatus.ID+'.jpg" />');
			displaySpecs();

			/* Activate Previous Photo Arrow */
			$('img#prev-photo')
			.hover(function(event)
					{
						$(event.target).attr('src', 'nav/left-signal-on.png') /* Mouse Over */
					},
				   function(event)
					{
						$(event.target).attr('src', 'nav/left-signal-off.png') /* Mouse Out */
					})
			.click(function(event)
					{
						appIndex = appIndex - 1;
						if (appIndex < 0)
						{
							appIndex = 11
						};
						currApparatus = apparatus[appIndex];
						scrollApparatus();
					});

			/* Activate Next Photo Arrow */
			$('img#next-photo')
			.hover(function(event)
					{
						$(event.target).attr('src', 'nav/right-signal-on.png') /* Mouse Over */
					},
				   function(event)
					{
						$(event.target).attr('src', 'nav/right-signal-off.png') /* Mouse Out */
					})
			.click(function(event)
					{
						appIndex = appIndex + 1;
						if (appIndex > 11)
						{
							appIndex = 0
						}
						currApparatus = apparatus[appIndex];
						scrollApparatus();
					});
		}
		, 'html');
}

// Display Requested Apparatus from Scroll Arrows //
// ---------------------------------------------- //
function scrollApparatus()
{
   //     var ScrollTop = document.body.scrollTop;
   //
   // 	  if (ScrollTop == 0)
   //      {
   //         if (window.pageYOffset)
   //            ScrollTop = window.pageYOffset;
   //         else
   //            ScrollTop = (document.body.parentElement) ? document.body.parentElement.scrollTop : 0;
   //      }
   // 	  window.scrollTo( 0, ScrollTop);

   $('h1#title').html(currApparatus.NAME);
   $('img.big-photo').attr('src', 'Images/apparatus/' + currApparatus.ID + '.jpg');
   displaySpecs();
}

// Display Requested Apparatus Specifications //
// ------------------------------------------ //
function displaySpecs()
{
   $('span#rc-data').html('<div class="grey-header">SPECIFICATIONS</div>' +
		'<br />' +
		'<ul class="niceList">');
   $.each(currApparatus.SPECS, 
		function(category, value)
		{
			$('ul.niceList').append('<li><b>' + category + '</b>: ' + value + '</li>')
		});
   $('span#rc-data').append('</ul>');
}

// Display Station Popup //
// --------------------- //
function setStationPopup()
{
   $('div.station-popup').hide();
   $('area#station1')
	.hover(function(event)
			{
				$('#sa-station1').show() /* Mouse Over */
			},
		  function(event)
			{
				$('#sa-station1').hide() /* Mouse Out */
			});
   $('area#station2')
	.hover(function(event)
			{
				$('#sa-station2').show() /* Mouse Over */
			},
		  function(event)
			{
				$('#sa-station2').hide() /* Mouse Out */
			});
   $('area#station3')
	.hover(function(event)
			{
				$('#sa-station3').show() /* Mouse Over */
			},
		  function(event)
			{
				$('#sa-station3').hide() /* Mouse Out */
			});
   $('area#station4')
	.hover(function(event)
			{
				$('#sa-station4').show() /* Mouse Over */
			},
		  function(event)
			{
				$('#sa-station4').hide() /* Mouse Out */
			});
}
