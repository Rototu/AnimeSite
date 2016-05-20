(function(){
   $("#importanceButton").click(function() {
      $("#audio").prop("muted", false).prop("volume", window.vol/4);
      window.myButton = 4;
      $("#impact").show();
   });
}());
