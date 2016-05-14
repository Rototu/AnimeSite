(function(){
   var clicked = 1;
   var iClick = false;
   var $menuButton = $(".menuButton");
   var $logo = $("#logo");
   var $cButton = $("#cButton");
   var $istoricButton = $("#istoricButton");
   var $importanceButton = $("#importanceButton");
   var $mediaButton = $("#mediaButton");

   $(document).on('click', 'a', function(e){
      e.preventDefault();
      var url = $(this).attr('href');
      window.open(url, '_blank');
   });

   $menuButton.on({
      mouseenter: function () {
         var $myThis = $(this);
         var myColor = $myThis.css("color");
         if(myColor != "rgb(255, 0, 0)") {
            $myThis.css({
               "background-color" : "black",
               "color" : "white",
               "z-index" : "10",
               "box-shadow" : "0 0 8px 0 rgba(0, 0, 0, 0.6), 0 0 15px 0 rgba(0, 0, 0, 0.4)"
            });
         }
      },
      click: function () {
         setTimeout(function() {
            iClick = true;
         }, 10);
         $(".screen").hide();
         $(window).trigger('resize');
         $menuButton.css({
            "background-color" : "white",
            "color" : "black",
            "z-index" : "1",
            "box-shadow" : "none"
         });
         window.mediaOn = false;
      },
      mouseleave: function () {
         var $myThis = $(this);
         var myColor = $myThis.css("color");
         if(myColor != "rgb(255, 0, 0)") {
            $myThis.css({
               "background-color" : "white",
               "color" : "black",
               "z-index" : "1",
               "box-shadow" : "none"
            });
         }
      }
   });

   setInterval(function() {
      // if(clicked != window.myButton || iClick){
      if(iClick){
         // clicked = window.myButton;
         iClick = false;
         // $(".menuButton").css("color", "black");
         // $(".menuButton").css("box-shadow", "none");
         // $(".menuButton").css("z-index", "1");
         // $(".menuButton").css("background-color", "white");
         switch (window.myButton) {
            case 1:
            $logo.css({
               "background-color" : "black",
               "color" : "red",
               "z-index" : "10",
               "box-shadow" : "0 0 8px 0 rgba(0, 0, 0, 0.6), 0 0 15px 0 rgba(0, 0, 0, 0.4)"
            });
            break;

            case 2:
            $cButton.css({
               "background-color" : "black",
               "color" : "red",
               "z-index" : "10",
               "box-shadow" : "0 0 8px 0 rgba(0, 0, 0, 0.6), 0 0 15px 0 rgba(0, 0, 0, 0.4)"
            });
            break;

            case 3:
            $istoricButton.css({
               "background-color" : "black",
               "color" : "red",
               "z-index" : "10",
               "box-shadow" : "0 0 8px 0 rgba(0, 0, 0, 0.6), 0 0 15px 0 rgba(0, 0, 0, 0.4)"
            });
            break;

            case 4:
            $importanceButton.css({
               "background-color" : "black",
               "color" : "red",
               "z-index" : "10",
               "box-shadow" : "0 0 8px 0 rgba(0, 0, 0, 0.6), 0 0 15px 0 rgba(0, 0, 0, 0.4)"
            });
            break;

            case 5:
            $mediaButton.css({
               "background-color" : "black",
               "color" : "red",
               "z-index" : "10",
               "box-shadow" : "0 0 8px 0 rgba(0, 0, 0, 0.6), 0 0 15px 0 rgba(0, 0, 0, 0.4)"
            });
            break;

            default: return;
         }
      }
   }, 100);
}());
