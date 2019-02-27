
	var list = [
		"https://eyeondesign.aiga.org/",
		"https://badbadbadbad.com/",
		"http://blankposter.com/",
	  "http://bong.international/",
		"https://brutalistwebsites.com",
		"http://eelslap.com",
		"https://exitinternational.net",
		"http://ignasimonreal.com"
	];

	var sites = null;

	// Prepares and binds the button

	// Opens the site in a new window

	var openSite = function(url) {
		window.open(url);

	};

	var onButtonClick = function() {


		var url = selectWebsite();
	
		openSite(url);

  button.style.color=red;

};
var selectWebsite = function() {
	var site, range, index;

	range =list.length;
	index = Math.floor(Math.random() * range);

	site = list[index];
	//sites.splice(index, 1);

	return site;
};
