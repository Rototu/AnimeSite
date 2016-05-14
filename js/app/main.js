var mediaOn;
var $loader = $("#loader");
var $forest = $(".forest");

$('img').on('dragstart', function(event) { event.preventDefault(); });

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
      $loader.fadeOut(1000);
   },5000);
});

// sterge urmatoarea functie!!!
$loader.click(function() {
   $loader.hide();
   $forest.show();
   var fHeight = $(".forest").height();
   var wHeight = $(document).height()*9/10;
   $(".forest").css("top", wHeight-fHeight);
});
