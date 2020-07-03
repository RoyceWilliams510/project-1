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
    //   parsedItem.duration = moment.duration(parsedItem.duration, "seconds").format("m:ss");
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
                {title:"Duration", field:"duration", hozAlign:"center"}
            ],
        }],
      
    });

});
//PROBLEM! data in the table not populating becouse currenctly we are saving an empty Playlist array to the localStor. 
//Posible fix: to set a timeout 