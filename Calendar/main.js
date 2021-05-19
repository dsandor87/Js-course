var timetable = new Timetable();
timetable.setScope(9, 17); // optional, only whole hours between 0 and 23


var options = {
    url: '#', // makes the event clickable
    class: 'vip', // additional css class
    data: { // each property will be added to the data-* attributes of the DOM node for this event
      id: 4,
      ticketType: 'VIP'
    },
    onClick: function(event, timetable, clickEvent) {

        var name = window.prompt("Add Your Activity name: ");
        var start = window.prompt("Starts at: ")
        var end = window.prompt("Finished at: ")





    } // custom click handler, which is passed the event object and full timetable as context  
  };
timetable.addLocations(['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday']);
timetable.addEvent('Project management', 'Tuesday', new Date(2015,7,17,10,45), new Date(2015,7,17,12,30),);
timetable.addEvent('Project management', 'Monday', new Date(2015,7,17,9), new Date(2015,7,17,10,45),options);

var renderer = new Timetable.Renderer(timetable);
renderer.draw('.timetable'); 

function myFunction (){
    console.log('clicked')
    var name = window.prompt("Add Your Activity name: ");
        var start = window.prompt("Starts at: ")
        var end = window.prompt("Finished at: ")
}