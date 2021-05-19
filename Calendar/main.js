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
        var name = window.prompt("Activity name: ");
        var start = window.prompt("Starts at: ")
        var end = window.prompt("Finished at: ")





    } // custom click handler, which is passed the event object and full timetable as context  
  };

  const points = [
      ]
timetable.addLocations(['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday']);
// timetable.addEvent('Project management', 'Tuesday', new Date(2015,7,17,10,45), new Date(2015,7,17,12,30),);
timetable.addEvent('Project management', 'Monday', new Date(2015,7,17,9), new Date(2015,7,17,10,45));
timetable.addEvent('Project management', 'Monday', new Date(2015,7,17,9), new Date(2015,7,17,10,45));

points.forEach((slot, index, array) => {
    timetable.addEvent(slot.name, slot.day, new Date(2015,7,17,slot.start), new Date(2015,7,17,slot.end,45));

});
var renderer = new Timetable.Renderer(timetable);
renderer.draw('.timetable'); 

function getData (){
slot = {}

    var day = window.prompt("Which day would you like to book?");
    var name = window.prompt("Add Your Activity name:");
    var start = window.prompt("Starts at:")
    var end = window.prompt("Finished at:")

        slot.day = day
        slot.name = name;
        slot.start = start;
        slot.end = end;
        
points.push(slot)

console.log(slot)

}

console.log(points)

