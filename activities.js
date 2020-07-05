function formatDuration(duration){
    var sec_num = parseInt(duration, 10); // don't forget the second param
    var minutes = Math.floor(sec_num / 60);
    var seconds = sec_num - (minutes * 60);

   
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes + ':' + seconds;
    

}

var allActivities=JSON.parse(localStorage.getItem("activityPlaylist"));
if(allActivities === null) {
    allActivities =[];
}
//  looping over allActivities from localStor and creating a table for each activity
allActivities.forEach(function(activity, i){
    var tabDiv = $('<div>');
    tabDiv.attr("id", "playlist-table-" + i);
    $("#tables").append(tabDiv);

    //parsing over playlist arr to get 
    var tabledata = activity.playlist.map(function(item) {
      var parsedItem = JSON.parse(item);
      var songIdHolder = parsedItem.songId;
      var playButton = $("<button id = '"+songIdHolder+"' class = 'playBtn' value = '"+ songIdHolder+"'>Play</button>");
      console.log(playButton);
      parsedItem.duration = formatDuration(parsedItem.duration);
      parsedItem.songId = playButton;
      console.log(parsedItem);
      return parsedItem;
      
    });
    //create Tabulator on DOM element with id "example-table"
    var table = new Tabulator("#playlist-table-" + i, {
        height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
        data:tabledata, //assign data to table
        layout:"fitColumns", //fit columns to width of table (optional)
        columns:[ {//create column group
            title: activity.name + " " + activity.time,
            columns:[
                {title:"Title", field:"title", hozAlign:"center"},
                {title:"Artist", field:"artist", hozAlign:"center"},
                {title:"Album", field:"album", hozAlign:"center"},
                {title:"Duration", field:"duration", hozAlign:"center"},
                {title:"Listen",field:"songId", hozAlign:"center"}
            ],
        }],
      
    });

});
