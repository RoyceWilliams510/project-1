
var genres= [ "1996494362", // rap
"4994552284", //Pop
"1306931615", //Rock
"1132760061", //Alternative
"7391033164" // Jazz
];
var addedGenres = [];




$(document).ready(function (){
    // Event listener
    
    $(".collection-item").on("click", function(){
        console.log($(this).data("value"));
        var playlistID = $(this).data("value");
        addedGenres.push(playlistID.toString());
        console.log(addedGenres);
        $(event).off('click');
    })

    $("#submitActivity").on("click",function(){
        var songs = [];
        for(var i =0; i<5; i++){
            
            var genreChosen = addedGenres[Math.floor(Math.random()*addedGenres.length)]
            console.log(genreChosen);
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://deezerdevs-deezer.p.rapidapi.com/playlist/"+genreChosen+"/tracks",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "a1a9ddf06bmsh40db7cac402f3cbp12b1a6jsnda2cd6aadae3"
                }
            }
            $.ajax(settings).done(function (response) {
                var songIndex = Math.floor(Math.random()*25)
                console.log(songIndex);
                var song= {
                    title: response.data[songIndex].title,
                    artist: response.data[songIndex].artist.name,
                    album: response.data[songIndex].album.title, 
                    duration: response.data[songIndex].duration
                }
                console.log(song)
                songs.push(song);
            });
            
        
        }
        var activity = {
            name:$("#activityName").val(),
            time: $("#timePeriod").val(),
            songs: songs
        }
        var parsedActivity = JSON.stringify(activity);
        console.log(activity);
        localStorage.setItem($("#activityName").val(),parsedActivity);
        resetPage();
    })
    
});

function resetPage(){
    $("#activityName").val("");
    addedGenres = [];

}