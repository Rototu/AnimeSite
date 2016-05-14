(function(){
   $("#mediaButton").click(function() {
      window.myButton = 5;
      var galWidth;
      var $gallery = $("#gallery");
      var $galScroll = $("#galleryScroller");

      var width = $(window).width();

      $(".slide").hide();
      $("#media").show();

      $gallery.mouseover(function(){
         $(this).css("cursor", "grab");
      });
      $gallery.on("drag", function(){
         $(this).css("cursor", "grabbing");
      });

      var cont = $("#galleryContainer");
      var x = cont.width();
      var y = cont.height();

      $gallery.draggable({
         containment: [-x/2, 0, 0, y],
         axis: "x",
         stop: function( event, ui ) {
            $(this).css("cursor", "grab");
         },
         drag: function( event, ui ) {
            var galOffset = $(this).position().left;
            var distS = 2*(-galOffset)/x;
            distS = distS*width*4/5;
            $galScroll.css("left", distS);
            galWidth = $gallery.position().left;
         }
      });

      $galScroll.on({
         mouseenter: function () {
            $(this).css("background-color", "black");
         },
         drag: function () {
            $(this).css("background-color", "black");
         },
         mouseleave: function () {
            $(this).css("background-color", "rgb(61, 61, 61)");
         }
      });
      $galScroll.draggable({
         axis: "x",
         containment: "parent",
         drag: function( event, ui ) {
            var dist = $(this).position().left;
            dist = dist/(width*4/5);
            $gallery.css("left", x/2-x*dist/2);
            galWidth = $gallery.position().left;
         }
      });

      setTimeout(function() {
         $gallery.css("left", x/2);
         $galScroll.css("left", 0);
         galWidth = x/2;
         window.mediaOn = true;
      },10);

      setInterval(function() {
         if(window.mediaOn) {
            if($gallery.position().left > 0) {
               $gallery.offset({left : 0});
               $galScroll.css("left", 0);
            }
            if($gallery.position().left < -x/2) {
               $gallery.offset({left : -x/2});
               $galScroll.css("left", width*4/5);
            }
         }
      },10);

      // $(document).keydown(function(e) {
      //    var myOffsetLeft = $gallery.offset().left;
      //    var myOffsetRight = width - ($gallery.offset().left + $gallery.outerWidth());
      //    var galOffset = $gallery.position().left;
      //    var distS = 2*(-galOffset)/x;
      //    distS = distS*width*4/5;
      //    switch(e.which) {
      //
      //       case 39: // right
      //       if(myOffsetRight <= -5) {
      //          $gallery.offset({left : myOffsetLeft-5});
      //          $galScroll.css("left", distS);
      //       }
      //       else {
      //          $gallery.offset({left : -x/2});
      //          $galScroll.css("left", width*4/5);
      //       }
      //       break;
      //
      //       case 37: // left
      //       if(myOffsetLeft <= -5) {
      //          $gallery.offset({left : myOffsetLeft+5});
      //          $galScroll.css("left", distS);
      //       }
      //       else {
      //          $gallery.offset({left : 0});
      //          $galScroll.css("left", 0);
      //       }
      //       break;
      //
      //       case 81:
      //       // alert(x/width);
      //       break;
      //
      //       default: return; // exit this handler for other keys
      //
      //    }
      //
      //    e.preventDefault(); // prevent the default action (scroll / move caret)
      //
      // });
   });
}());
