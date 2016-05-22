var InteractiveModule = (function () {
   return {
      init: function () {
         this.$name = $("#name");
         this.$gameElement = $(".gameElement");
         this.$nameSubmit = $("#nameSubmit");
      },

      bindHandlers: function () {
         //on game button click
         $("#mediaButton").click(function () {

            //change page
            window.myButton = 5;
            window.MenuModule.changeSelectedButton();
            $(window).trigger('resize');
            $("#audio").prop("muted", false).prop("volume", window.vol);

            //begin game
            InteractiveModule.frame1();

         }.bind(this));

         //handle name submit
         this.$nameSubmit.click(function () {
            $("#frame1Form").submit();
         });
         $("#frame1Form").submit(function (e) {

            //prevent reload
            e.preventDefault();

            //store name
            this.name =  this.$name.val();
            console.log(this.name);

            //change to scene 2
            InteractiveModule.frame2();

         }.bind(this));
      },

      frame1: function () {
         //reset
         this.$gameElement.hide();
         this.$name.val("");
         this.name = null;

         //animation frame1
         $("#frame1").show(function () {
            $("#korosensei").delay(500).show("slide", {direction : "left"}, 1000, function () {
               $("#frame1One").delay(1000).fadeIn(1000, function () {
                  $("#frame1Two").delay(1000).fadeIn(1000, function () {
                     $("#frame1Form").delay(500).fadeIn(3000);
                  });
               });
            });
         });


         //validate name by its length on change
         this.$name.on('input', function () {
            var nameLength = this.$name.val().length;
            if(nameLength > 1) {
               this.$nameSubmit.show();
            }
            else {
               this.$nameSubmit.hide();
            }
         }.bind(this));
      },

      frame2: function () {
         //animation frame 2
         $("#frame1").hide("slide", {direction:"left"}, 1000, function () {
            $("#frame2").show(function () {
               
            });
         });
      }
   }
})();

$(document).on("ready", function () {
   InteractiveModule.init();
   InteractiveModule.bindHandlers();
})
