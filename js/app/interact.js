(function(){
   $("#mediaButton").click(function() {
      $("#audio").prop("muted", false).prop("volume", window.vol);
      window.myButton = 5;
      $("#media").show();
      $(window).trigger('resize');
   });
}());
