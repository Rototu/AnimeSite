var mediaOn;
var $loader = $("#loader");
var $forest = $(".forest");
var $audio = $("#audio");

$('img').on('dragstart', function(event) { event.preventDefault(); });
$audio.prop("volume", 0.002);
$audio.trigger("load").trigger("play");
$audio.on("ended", function(){
   $("#aSrc").prop("src", "music/002.mp3");
   $audio.load().prop("currentTime",0).trigger("play");
});

$(window).load(function() {
   window.mediaOn = mediaOn;
   window.myButton = 1;
   console.log("Loaded");
   window.mediaOn = false;
   $forest.hide();
   setTimeout(function() {
      $forest.show();
      var fHeight = $(".forest").height();
      var wHeight = $(document).height()*9/10;
      $(".forest").css("top", wHeight-fHeight);
      $loader.fadeOut(500);
   },3000);
});

// sterge urmatoarea functie!!!
$loader.click(function() {
   $loader.hide();
   $forest.show();
   var fHeight = $(".forest").height();
   var wHeight = $(document).height()*9/10;
   $(".forest").css("top", wHeight-fHeight);
});
