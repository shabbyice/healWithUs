$(document).ready(function() {
  $("#navigation-bar").addClass("hidden-bar");
});

$("#hamburger-button").click(function() {
  if ($("#navigation-bar").hasClass("hidden")) {
    $("#navigation-bar").removeClass("hidden");
  } else {
    $("#navigation-bar").addClass("hidden");
  }

});
