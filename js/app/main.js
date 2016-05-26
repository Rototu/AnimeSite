var AppModule = (function () {
   //important Vars
   var myDocument = $(document);

   //no need to comment this
   return {
      init: function () {
         console.log("Loaded");

         //parallax vars
         this.$loader = $("#loader");
         this.$forest = $(".forest");
         this.$popup = $("#popup");
         window.mediaOn = false;
         this.$popup.hide();

         //audio vars
         this.$audio = $("#audio");
         this.$mySrc = $("#aSrc");
         this.track=1;
      },

      bindHandlers: function () {
         //audio init
         this.$audio.prop("volume", 0.20);
         this.$audio.trigger("load").trigger("play");
         this.vol = this.$audio.prop("volume");

         //audio autoControl
         console.log("Starting volume decrease");
         this.soundTimer = setInterval(function(){
            this.vol = this.$audio.prop("volume");
            if(this.vol<0.02) {
               console.log("Finished volume decrease");
               clearInterval(this.soundTimer);
            }
            else {
               this.vol -= 0.0005;
               this.$audio.prop("volume", this.vol);
               window.vol = this.vol;
            }
         }.bind(this), 10);

         //prevent image drag
         $('img').on('dragstart', function(event) { event.preventDefault(); });

         //switch to next track in playlist on track 'ended' event
         this.$audio.on("ended", function(){
            this.track++;
            switch (this.track) {

               case 1:
               this.$mySrc.prop("src", "music/04.mp3");
               break;

               case 2:
               this.$mySrc.prop("src", "music/05.mp3");
               break;

               case 3:
               this.$mySrc.prop("src", "music/06.mp3");
               break;

               case 4:
               this.$mySrc.prop("src", "music/03.mp3");
               break;

               case 5:
               this.$mySrc.prop("src", "music/01.mp3");
               break;

               case 6:
               this.$mySrc.prop("src", "music/02.mp3");
               break;

               case 7:
               this.$mySrc.prop("src", "music/07.mp3");
               track=0;
               break;

               //debug
               default:
               console.log("track " + this.track + " is not in the playlist");
               console.log(this);
               return;

            }
            this.$audio.load().prop("currentTime",0).trigger("play");
         }.bind(this));

         //set global volume variable on change
         this.$audio.on('volumechange', function(){
            if(window.myButton == 1) window.vol = this.volume;
         });

      },

      loaded: function () {

         //loader fadeOut
         this.$forest.show();
         var fHeight = this.$forest.height();
         var wHeight = myDocument.height()*9/10;
         this.$forest.css("top", wHeight-fHeight);
         $(".container").show();
         $("#scene").parallax('enable');
         setTimeout(function() {
            window.MenuModule.changeSelectedButton();
            this.$loader.fadeOut(1000);
         }.bind(this), 3000);

      }
   };

})();

$(document).on("ready", function () {
   AppModule.init();
   AppModule.bindHandlers();
   $(document).imagesLoaded(function () {
      AppModule.loaded();
   });
});

window.displayLoadingScreen = function() {
   $("#Sinon").fadeIn(3000);
   $("#loadingGif").fadeIn(3000);
   $(".screen").hide();
}
