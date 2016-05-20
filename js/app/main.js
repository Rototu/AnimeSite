var mediaOn;
var $loader = $("#loader");
var $forest = $(".forest");
var $audio = $("#audio");
var $mySrc = $("#aSrc");

$('img').on('dragstart', function(event) { event.preventDefault(); });

var track = 1;
$audio.prop("volume", 0.3);
$audio.trigger("load").trigger("play");
$audio.on("ended", function(){
   track++;
   switch (track) {
      case 1:
      $mySrc.prop("src", "music/01.mp3");
      break;
      case 2:
      $mySrc.prop("src", "music/02.mp3");
      break;
      case 3:
      $mySrc.prop("src", "music/03.mp3");
      break;
      case 4:
      $mySrc.prop("src", "music/04.mp3");
      break;
      case 5:
      $mySrc.prop("src", "music/05.mp3");
      break;
      case 6:
      $mySrc.prop("src", "music/06.mp3");
      break;
      case 7:
      $mySrc.prop("src", "music/07.mp3");
      track=0;
      break;
      default:
   }
   $audio.load().prop("currentTime",0).trigger("play");
});
$audio.on('volumechange', function(){
   if(window.myButton == 1) window.vol=$audio.prop('volume');
});

$(window).load(function() {
   var vol = $audio.prop("volume");
   window.vol = vol;
   var soundTimer = setInterval(function(){
      vol = $audio.prop("volume");
      if(vol<0.1) clearInterval(soundTimer);
      else {
         vol -= 0.0005;
         vol = $audio.prop("volume", vol);
         window.vol = vol;
      }
   }, 10)
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
// $loader.click(function() {
//    $loader.hide();
//    $forest.show();
//    var fHeight = $(".forest").height();
//    var wHeight = $(document).height()*9/10;
//    $(".forest").css("top", wHeight-fHeight);
// });
