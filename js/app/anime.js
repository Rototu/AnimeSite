var AnimeParallaxModule = (function () {
   return {
      init: function () {
         this.$forest = $(".forest");
         this.$popup = $("#popup");
      },

      bindHandlers: function () {
         //popup control
         $("#totoro").click(function() {
            this.$popup.fadeIn(1000);
         }.bind(this));
         $("#popclose").click(function() {
            this.$popup.fadeOut(500);
         }.bind(this));

         //change css on resize
         $(window).on('resize', function() {
            var fHeight = $(".forest").height();
            var wHeight = $(document).height();
            this.$forest.css("top", wHeight-fHeight);
         }.bind(this));

         //main page controll
         $("#logo").click(function() {
            window.myButton = 1;
            window.MenuModule.changeSelectedButton();
            console.log("container class displayed");
            $("#audio").prop("muted", false).prop("volume", window.vol);
         });
      }
   };
})();

$(document).on("ready", function () {
   AnimeParallaxModule.init();
   AnimeParallaxModule.bindHandlers();
});
