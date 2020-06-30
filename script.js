var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://deezerdevs-deezer.p.rapidapi.com/playlist/1996494362/tracks",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "a1a9ddf06bmsh40db7cac402f3cbp12b1a6jsnda2cd6aadae3"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response.data);
});