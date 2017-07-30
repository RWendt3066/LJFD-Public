// LJFD Fire Marshal Scripted Functions //

// Get Safety Sheets from JSON file [safety-sheets.txt] and Display Information //
// ---------------------------------------------------------------------------- //
function displaySafetySheets(SSType)
{
	var safetySheet;
   
	$.getJSON('data/safety-sheets.txt', 
		function(data)
		{
			if (SSType == 'indoors')
			{
				$('span#mi-data').html('<h1>Indoor Safety Sheets</h1><br /><hr /><br />');
				$.each(data.indoors, function(row, value)
                    {if (value.display == 'Y' || value.display == 'y') {displaySSData(value)};});
			}
			else 
			{
				$('span#mi-data').html('<h1>Outdoor Safety Sheets</h1><br /><hr /><br />');
				$.each(data.outdoors, function(row, value)
                    {if (value.display == 'Y' || value.display == 'y') {displaySSData(value)};});
			};
		});
}

function displaySSData(dsdata)
{
	$('span#mi-data').append('<div class="float-left" style="width:15%; text-align:center";>' +
								'<a href="'+dsdata.url+'" target="_blank">' +
								'<img alt="Adobe PDF" width="70px" border="0" src="Images/pdf_icon.jpg" /></a>' +
								'<br /><span style="font-size:smaller;">' + dsdata.size + '</span><br />' +
							 '</div><div>' +
								'<h4>' + dsdata.title + '</h4><br /><p>' + dsdata.description + '</p>' +
							 '</div><br /><hr /><br />')
}
