// business logic
function Place(startTime, endTime, landmarks) {
  this.startTime = startTime;
  this.endTime = endTime;
  this.landmarks = landmarks;
}
function Location() {
  this.locations = [];
  this.currentId = 0;
}

Location.prototype.addLocation = function(where) {
  location.id = this.assignId();
  this.locations.push(where);
}
Location.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}


// front end logic:
$(document).ready(function() {
  var Vacation = new Location();
  $("form").submit(function(event) {
    event.preventDefault();
    var location = $("#location").val();
    var startTime = $("#start").val();
    var endTime = $("#end").val();
    var landmarks = $("#landmarks").val();
    var landmarksArray = landmarks.split(" ");
    var where = new Place(startTime, endTime, landmarksArray)
    Vacation.addLocation(where);
    $(".results").show();
    $("#lists").append("<ul>" + location + "</ul>")
  });

  $("#lists").on("click", "ul", function() {
    var display = Vacation.locations[0];
    console.log(display);
    $("#lists").append("<li>" + Vacation.locations[0].startTime + "</li>");
    $("#lists").append("<li>" + Vacation.locations[0].endTime + "</li>");
    display.landmarksArray.forEach(function(landmarks) {
      $("#lists").append("<li>" + landmarks + "</li>")
    });
  });
});