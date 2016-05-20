$(document).on("ready", function () {

  $("#mediaButton").click(function() {
    window.myButton = 5;
    window.MenuModule.changeSelectedButton();
    $(window).trigger('resize');
    $("#audio").prop("muted", false).prop("volume", window.vol);
  });

})
