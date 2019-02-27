
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
		"http://www.darrenoorloff.com",
		"https://culture.doberman.co",
		"http://eelslap.com",
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
		"http://workweek.info",
		"http://studioyuan.com",
		"https://www.zak.group/projects",
		"https://dis.art/",
		"https://www.publicprivatesecret.org/",
		"http://www.fionabanner.com/index.htm",
		"http://keenonmag.com/",
		"https://chrome.google.com/webstore/detail/selfsurfing/dcocplkobacjnekgaebhknlfaehiblcd",
		"https://www.ibm.com/design/language/",
		"https://deaddrops.com/",
		"http://emoticonarchive.tumblr.com/",
		"http://unicode.org/emoji/charts-beta/full-emoji-list.html",
		"https://emojidictionary.emojifoundation.com/symbols",
		"https://emojipedia.org/",
		"http://www.vier5.de/",
		"http://creativetime.org/",
		"https://codepen.io/dissimulate/pen/KrAwx",
		"http://anonymous-press.com/",
		"https://gifcities.org/",
		"https://voices.revealdigital.com/",
		"https://monoskop.org/",
		"http://p-dpa.net/",
		"http://www.random-wikipedia.com/",
		"https://publicdomainreview.org/collections/",
		"https://commons.wikimedia.org/wiki/Main_Page",
		"http://0100101110101101.org/",
		"https://walkerart.org/",
		"http://womenofgraphicdesign.org/",
		"http://www.kollectiv.co.uk/Asparagus.html",
		"http://www.livesurface.com/",
		"http://imageofthestudio.com/",
		"http://type-foundries-archive.com/",
		"https://paom.com/",
		"https://smallpdf.com/",
		"http://graphicmag.kr/",
		"http://readingforms.com/",
		"https://www.linedandunlined.com/"

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
