
	var list = [
"http://www.another-lab.com/",
"http://100-beste-plakate.de/archiv-plakate/",
"http://www.artofthetitle.com/",
"https://libraryofbabel.info/",
"https://badbadbadbad.com/",
"http://blankposter.com/",
"http://bong.international/",
"https://brutalistwebsites.com/",
"https://www.cdgcdgcdg.com",
"http://cococapitan.co.uk",
"http://www.comp.jp/",
"http://www.darrenoorloff.com",
"https://culture.doberman.co",
"http://eelslap.com",
"https://exitinternational.net",
"http://www.vill.ee/eye/",
"https://googlefonts.github.io/korean/",
"https://www.guang-yu.net",
"http://ignasimonreal.com",
"http://www.instructables.com",
"http://www.marianopascual.me/",
"https://pitchfork.com/",
"http://www.poptropica.com/",
"http://www.sometimesredsometimesblue.com/",
"http://killingofasacreddeer.movie/",
"http://www.themovingposter.com",
"https://ticketsplz.tumblr.com/",
"https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/",
"https://www.wired.com/",
"https://workweek.info",
"http://studioyuan.com",
"https://www.zak.group/projects"

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
