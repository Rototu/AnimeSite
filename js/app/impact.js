$(document).on("ready", function() {

  $("#importanceButton").click(function() {
    window.myButton = 4;
    window.MenuModule.changeSelectedButton();
    $("#audio").prop("muted", false).prop("volume", window.vol/4);
  });

});
