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
            AnimeParallaxModule.forestUpdate();
         }.bind(this));

         //main page controll
         $("#logo").click(function() {
            window.myButton = 1;
            window.MenuModule.changeSelectedButton();
            console.log("container class displayed");
            $("#audio").prop("muted", false).prop("volume", window.vol);
            AnimeParallaxModule.forestUpdate();
         });
      },

      forestUpdate: function () {
         console.log("forest updated");
         var fHeight = $(".forest").height();
         var wHeight = $(document).height();
         this.$forest.css("top", wHeight-fHeight);
      }
   };
})();

$(document).on("ready", function () {
   AnimeParallaxModule.init();
   AnimeParallaxModule.bindHandlers();
});
