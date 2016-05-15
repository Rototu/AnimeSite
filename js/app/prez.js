(function(){
   var myButton;
   var bList = ['#red','#blue','#green','#orange','#indigo'];
   var i;
   var kPress;
   var $sidebarSection = $('.sidebarSection');
   var $mySlide = $('.slide');
   var $grid = $('.grid').masonry({
      itemSelector : '.grid-item',
      percentPosition : true,
      columnWidth : '.grid-sizer',
      transitionDuration : 0,
   });
   var s3 = false;
   var txtHeight;
   var docHeight = $(window).height();

   $('#cButton').click(function() {

      $("#audio").prop("volume", 0.002);

      $mySlide.show().hide();
      $(window).resize(function() {
         setTimeout(function() {
            $grid.imagesLoaded().masonry('layout');
            s3 = true;
            $grid.imagesLoaded().show().masonry('layout');
         },500);
         // if(i==1) {
         //    txtHeight = $('#txt1').height();
         //    if(5*docHeight/20 - txtHeight/2 > 20) $('#txt1').css('margin-top', 5*docHeight/20 - txtHeight/2);
         // }
      });
      window.myButton = 2;
      $("grid-item").show();

      $('.char').hide().fadeIn(1000);
      $('.arrows').hide().delay(1000).fadeIn(1500);

      kPress = true;
      i=0;
      $mySlide.hide();
      $('#category').show();
      $sidebarSection.css('opacity', 0.2);
      myButton = null;

      $(document).keydown(function(e) {
         switch(e.which) {
            case 37: // up
            if(i>1 && kPress) {
               i--;
               kPress = false;
               setTimeout(function() { kPress = true; }, 50);
            }
            break;

            case 39: // down
            if(i<5 && kPress) {
               i++;
               kPress = false;
               setTimeout(function() { kPress = true; }, 50);
            }
            break;

            default: return; // exit this handler for other keys
         }

         e.preventDefault(); // prevent the default action (scroll / move caret)

         if(i) {
            $('.char').hide();
            $('.arrows').hide();

            $sidebarSection.css('opacity', 0.2);
            myButton = $('#b'+i);
            $(window).trigger('resize');
            $mySlide.hide();
            $('#slide' + i).show();
            // if(i==1) {
            //    txtHeight = $('#txt1').height();
            //    if(5*docHeight/20 - txtHeight/2 > 20) $('#txt1').css('margin-top', 5*docHeight/20 - txtHeight/2);
            // }
            if(i==3) {
               s3 = true;
               $grid.show().masonry('layout');
               console.log('layout: done');
            }
         }
      });
   });

   $sidebarSection.hover(function() {
      $(this).css('opacity', 1);
   }, function() {
      $(this).css('opacity', 0.2);
   });

   $sidebarSection.click(function(event) {

      $('.char').hide();
      $('.arrows').hide();

      switch(event.target.id) {
         case 'b1':
         $mySlide.hide();
         $('#slide1').show();
         // txtHeight = $('#txt1').height();
         // if(5*docHeight/20 - txtHeight/2 > 20) $('#txt1').css('margin-top', 5*docHeight/20 - txtHeight/2);
         // alert(txtHeight/2 + ' ' + 5*docHeight/20 + ' ' + ((5*docHeight/10) - (txtHeight)));
         break;

         case 'b2':
         $mySlide.hide();
         $('#slide2').show();
         break;

         case 'b3':
         $mySlide.hide();
         $('#slide3').show();
         s3 = true;
         $grid.masonry('layout');
         console.log('layout: done');
         break;

         case 'b4':
         $mySlide.hide();
         $('#slide4').show();
         break;

         case 'b5':
         $mySlide.hide();
         $('#slide5').show();
         break;

         default: return;
      }

      $(window).trigger('resize');
      $sidebarSection.css('opacity', 0.2);
      $(this).css('opacity', 1);

      myButton = $(this);
      var butId = event.target.id;
      i = butId.slice(-1);
      // $grid.delay(1000).masonry('layout');
   });

   setInterval(function() {
      if(myButton != null && myButton != undefined) myButton.css('opacity', 1);
   },10);

   // var $gridItem = 0;
   // $grid.on( 'click', '.grid-item', function() {
   //   // $gridItem.toggleClass('gigante');
   //   $(this).toggleClass('gigante');
   //   setTimeout(function() {
   //     $grid.masonry('layout');
   //   },100);
   //   $grid.masonry('layout');
   //   // $gridItem = $(this);
   // });

}());
