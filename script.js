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
var genres= [ "1996494362", // rap
"4994552284", //Pop
"1306931615", //Rock
"1132760061", //Alternative

];


$.ajax(settings).done(function (response) {
	console.log(response.data);
});