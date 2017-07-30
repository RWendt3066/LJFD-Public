// LJFD Home Page Scripted Functions //

// Activate LJFD News from Load JSON file [LJFDNews.txt] //
// --------------------------------------------------------- //
function HomePageNews()
{
   /* Load All News Articles */
   $.getJSON('data/LJFDNews.txt', 
		function(data)
		{
            News = data;
			/* Display the Active Headlines on the Home Page */
			$('#homeNews').html('<div class="grey-header">HEADLINES</div>' +
				'<ul id="news" class="niceList">');
			$.each(News, function(index, data)
				{
                    if (this.Display == 'Y' || this.Display == 'y')
					{
						$('ul#news').append('<li><a class="faq" href="#" onClick="displayNews('+index+')">' + this.Heading + '</a></li>');
					};
				});
// 	       	$('ul#news').append('<li><a class="faq" href="#">News Archives...</a></li>');
			$('#homeNews').append('</ul>');
		});
}
function displayNews(articleID)
{
		$.get('content/mi/home-ljfdnews.html', '',
		function(data)
		{
			$('span#mi-data').html(data);
			$('h1.news-title').html(News[articleID].Heading);
			$('span#news-heading').html('<div class="float-right"><span class="news-release">'+News[articleID].ReleaseDate+'</span></div>');
			$('span#news-article').html('<br><div class="news-article"><p>'+News[articleID].Article+'</p></div>');
		}
		, 'html');
}

// Activate FAQs Questions and Answers from JSON file [FAQs.txt] //
// --------------------------------------------------------- //
function HomePageFAQ()
{
   /* Load All FAQ Questions and Answers */
   $.getJSON('data/FAQs.txt', 
		function(data)
		{
			FAQ = data;
			/* Display the First 4 Questions on the Home Page */
			$('#homeFAQ').html('<div class="grey-header">FAQs</div>' +
				'<ul id="faqs" class="niceList">');
			$.each(FAQ, function(index, data)
				{
					if (index < 4)
					{
						$('ul#faqs').append('<li><a class="faq" href="#" onClick="displayFAQ('+index+')">' + this.Question + '</a></li>');
					}
				});
// 	       	$('ul#faqs').append('<li><a class="faq" href="#">More FAQs...</a></li>');
			$('#homeFAQ').append('</ul>');
		});
}

function displayFAQ(focusQuestion)
{
		$.get('content/mi/home-FAQs.html', '',
		function(data)
		{
			$('span#mi-data').html(data);
//			$('#FAQ-top-container').prepend('<img class="float-left" style="padding:10px;" src="Images/question-mark0.jpg" width="75px"></img>');
			$('#FAQ-focus-question').html('<b>'+FAQ[focusQuestion].Question+'</b>');
			$('#FAQ-focus-answer').html('<br>'+FAQ[focusQuestion].Answer);
			$.each(FAQ, function(index, data)
			{
                if (index == focusQuestion)
			         {$('#FAQ-listing').append('<p><img class="float-left" style="padding:10px;" src="Images/question-mark0.jpg" width="35px"></img>')}
                else
			         {$('#FAQ-listing').append('<p><img class="float-left" src="Images/question-mark1.jpg" width="50px"></img>')};
                $('#FAQ-listing').append('<br><a href="#" onClick="displayFAQ('+index+')">' + this.Question + '</a><br></p><br><br>');
            });
		}
		, 'html');
}

// Load Call History Table from JSON file [call - history.txt] //
// --------------------------------------------------------- //
function loadCallHistory(displayYr)
{
   var tEMS = 0;
   var tFire = 0;
   var calltotal = 0;

   $('#ch-current').toggle();
   $('#ch-previous').toggle();

   $.getJSON('data/call-history.txt', 
		function(data)
		{
			$('#ch-table').html('<tr><th class="call-date">' + data[displayYr].Year + '</th>' +
				'<th class="ems-calls">EMS</th>' +
				'<th class="fire-calls">FIRE</th>' +
				'<th class="call-total">TOTAL</th></tr>');

			$.each(data[displayYr].Calls, 
				function(row, calldata)
				{
					if (calldata.EMS == '-')
					{
						calldata.EMS = '0'
					};
					tEMS = tEMS + parseInt(calldata.EMS);
					if (calldata.Fire == '-')
					{
						calldata.Fire = '0'
					};
					tFire = tFire + parseInt(calldata.Fire);
					calltotal = parseInt(calldata.EMS) + parseInt(calldata.Fire);

					$('#ch-table').append('<tr><td class="call-date">' + calldata.Month + '</td>' +
						'<td class="ems-calls">' + calldata.EMS + '</td>' +
						'<td class="fire-calls">' + calldata.Fire + '</td>' +
						'<td class="call-total">' + calltotal + '</td></tr>');
				});
			
            calltotal = tEMS + tFire;
            $('#ch-table').append('<tr><th class="call-date">Total</th>' +
				'<th class="ems-calls">' + tEMS + '</th>' +
				'<th class="fire-calls">' + tFire + '</th>' +
				'<th class="call-total">' + calltotal + '</th></tr>');
		});
}
