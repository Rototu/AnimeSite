var PresentationModule = (function () {
   //local vars
   var myButton;
   var bList = ['#red','#blue','#green','#orange','#indigo'];
   var i;
   var kPress;
   var s3 = false;

   //do I need to comment everything for you?
   return {

      init: function () {
         this.$sidebarSection = $('.sidebarSection');
         this.$mySlide = $('.slide');
         this.$grid = $('.grid').masonry({
            itemSelector : '.grid-item',
            percentPosition : true,
            columnWidth : '.grid-sizer',
            transitionDuration : 0,
         });
         this.txtHeight;
         this.docHeight = $(window).height();
      },

      bindHandlers: function () {
         $('#cButton').click(function () {
            //load page
            window.myButton = 2;
            console.log(window.myButton);
            window.MenuModule.changeSelectedButton();
            $("#audio").prop("muted", false).prop("volume", window.vol/4);
            this.$mySlide.hide();

            //ready grid
            $("grid-item").show();

            //start page
            $('.char').hide().fadeIn(1000);
            $('.arrows').hide().delay(1000).fadeIn(1500);

            //init for keypress navigation
            kPress = true;
            i=0;
            this.$mySlide.hide();
            this.$sidebarSection.css('opacity', 0.2);
            myButton = null;

            //keypress handling
            $(document).keydown(function (e) {
               switch(e.which) {

                  //left key
                  case 37:
                  if(i>1 && kPress) {
                     i--;
                     kPress = false;
                     setTimeout(function () { kPress = true; }, 50);
                  }
                  break;

                  //right key
                  case 39:
                  if(i<5 && kPress) {
                     i++;
                     kPress = false;
                     setTimeout(function () { kPress = true; }, 50);
                  }
                  break;

                  // exit for other keys
                  default: return;
               }

               // prevent the default action for keys
               e.preventDefault();

               //if "slideshow started"
               if(i) {

                  //hide elements of title slide
                  $('.char').hide();
                  $('.arrows').hide();

                  //set opacity of slide buttons to default
                  this.$sidebarSection.css('opacity', 0.2);

                  //define which button is selected
                  myButton = $('#b'+i);
                  PresentationModule.pageButton();

                  //show selected slide
                  this.$mySlide.hide();
                  $('#slide' + i).show();

                  //if on image grid load layout with masonry
                  if(i==3) {
                     s3 = true;
                     this.$grid.show().masonry('layout');
                     console.log('layout: done');
                  }
               }
            }.bind(this));
         }.bind(this));

         //hover effect
         this.$sidebarSection.hover(function () {
            $(this).css('opacity', 1);
            PresentationModule.pageButton();
         }, function () {
            $(this).css('opacity', 0.2);
            PresentationModule.pageButton();
         });

         //handle page button click
         this.$sidebarSection.click(function (event) {

            //hide title slide elements
            $('.char').hide();
            $('.arrows').hide();
            this.$mySlide.hide();

            //show selected slide
            switch(event.target.id) {
               case 'b1':
               $('#slide1').show();
               break;

               case 'b2':
               $('#slide2').show();
               break;

               case 'b3':
               $('#slide3').show();
               s3 = true;
               this.$grid.masonry('layout');
               console.log('image grid layout has loaded');
               break;

               case 'b4':
               $('#slide4').show();
               break;

               case 'b5':
               $('#slide5').show();
               break;

               default: return;
            }

            //define selected button
            var butId = event.target.id;
            i = butId.slice(-1);
            myButton = $('#b'+i);

            //handle opacity
            this.$sidebarSection.css('opacity', 0.2);
            PresentationModule.pageButton();
         }.bind(this));

      },

      pageButton: function () {
         if(i) myButton.css('opacity', 1);
      }
   };
})();

$(document).on("ready", function () {

   console.log("prez js loaded");
   PresentationModule.init();
   PresentationModule.bindHandlers();

});
