// function used to show and hide divs to progress to the next question screen
function nextScreen(elementToShow, elementToHide) {
	console.log("Hiding " + elementToHide);
	console.log("Showing " + elementToShow);

	jQuery(elementToShow).removeClass('hide fade-out');
	jQuery(elementToShow).addClass('fade-in');
	jQuery(elementToHide).removeClass('fade-in');
	jQuery(elementToHide).addClass('hide fade-out');
}

// Object containing the values for the results
var resultsList = [
		{"name" : "mac-mini", "title" : "Mac Mini", "description" : "A well packaged desktop machine. Great way to get started with a Mac", "link" : "http://www.apple.com/mac-mini/", "icon" : "fa-square"},
		{"name" : "mac-pro", "title" : "Mac Pro", "description" : "It's all about the performance in a tightly packaged desktop machine", "link" : "http://www.apple.com/mac-pro/", "icon" : "fa-bitbucket"},
		{"name" : "imac", "title" : "iMac", "description" : "An all in one desktop computer", "link" : "http://www.apple.com/imac/", "icon" : "fa-desktop"},
		{"name" : "imac-5k", "title" : "iMac 5K", "description" : "An all in one desktop computer with a great quality screen", "link" : "http://www.apple.com/imac-with-retina/", "icon" : "fa-desktop"},
		{"name" : "macbook", "title" : "Macbook", "description" : "A super light weight laptop with the full Mac experience", "link" : "http://www.apple.com/macbook/", "icon" : "fa-laptop"},
		{"name" : "11-macbook-air", "title" : "11 inch Macbook Air", "description" : "A light weight laptop with an 11 inch screen", "link" : "http://www.apple.com/macbook-air/", "icon" : "fa-laptop"},
		{"name" : "13-macbook-air", "title" : "13 inch Macbook Air", "description" : "A light weight laptop with a 13 inch screen", "link" : "http://www.apple.com/macbook-air/", "icon" : "fa-laptop"},
		{"name" : "13-macbook-pro", "title" : "13 inch Macbook Pro", "description" : "A high performace laptop with an 13 inch screen", "link" : "http://www.apple.com/macbook-pro/", "icon" : "fa-laptop"},
		{"name" : "15-macbook-pro", "title" : "15 inch Macbook Pro", "description" : "A high performance laptop with a 15 inch screen", "link" : "http://www.apple.com/macbook-pro/", "icon" : "fa-laptop"}
	];

// Updates the result div with the correct product information
function result(whichMac) {

	var tweetText = '';
	var resultIcon = '';

	for(i = 0; i < resultsList.length; i++) {
		if (resultsList[i].name == whichMac) {
			document.getElementById('result-title').innerHTML=resultsList[i].title;
			document.getElementById('result-description').innerHTML=resultsList[i].description;
			document.getElementById('result-link').href=resultsList[i].link;

			resultIcon = "fa " + resultsList[i].icon + " fa-5x";
			document.getElementById('result-icon').className = resultIcon;


			tweetText = 'I\'ve been recommended a ' + resultsList[i].title +'. Get help choosing a Mac here: ';
			console.log(tweetText);
		}
	}
			// update the tweet button content
			$('#tweetBtn iframe').remove();
      // Generate new markup
      var tweetBtn = $('<a></a>')
          .addClass('twitter-share-button')
          .attr('href', 'http://twitter.com/share')
          .attr('data-url', 'http://www.csrhymes.com/choosing-a-mac/')
          .attr('data-text', tweetText)
          .attr('data-via', 'chrisrhymes');
      $('#tweetBtn').append(tweetBtn);
      twttr.widgets.load();



}



// Used when user clicks the start again button
function reload() {
	location.reload();
}
