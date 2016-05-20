var MenuModule = (function () {
  // you know what this is...
  return {

    init: function () {
      this.$menuButton = $(".menuButton");
      this.$logo = $("#logo");
      this.$cButton = $("#cButton");
      this.$istoricButton = $("#istoricButton");
      this.$importanceButton = $("#importanceButton");
      this.$mediaButton = $("#mediaButton");
      this.$forest = $('.forest');
    },

    bindHandlers: function () {
      window.MenuModule.changeSelectedButton();

      //open links in new tab
      $(document).on('click', 'a', function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        window.open(url, '_blank');
      });

      //menu button events
      this.$menuButton.on({

        //on hover change css
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

        //if not hovered reset css
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
          MenuModule.changeSelectedButton();
        }
      });

    },

    changeSelectedButton: function (value) {
      //hide pages
      $(".screen").hide();
      console.log('screen class hidden');

      //assurance for further objects position
      $(window).trigger('resize');

      //reset css for all menu buttons
      this.$menuButton.css({
        "background-color" : "white",
        "color" : "black",
        "z-index" : "1",
        "box-shadow" : "none"
      });

      //disabling heavy js
      window.mediaOn = false;
      $("#scene").parallax('disable');

      //change CSS of selected button
      console.log(window.myButton);
      switch (window.myButton) {
        case 1:
        this.$logo.css({
          "background-color" : "black",
          "color" : "red",
          "z-index" : "10",
          "box-shadow" : "0 0 8px 0 rgba(0, 0, 0, 0.6), 0 0 15px 0 rgba(0, 0, 0, 0.4)"
        });
        $("#myParallax").show();
        var fHeight = $(".forest").height();
        var wHeight = $(document).height();
        this.$forest.css("top", wHeight-fHeight);
        $("#scene").parallax('enable');
        break;

        case 2:
        this.$cButton.css({
          "background-color" : "black",
          "color" : "red",
          "z-index" : "10",
          "box-shadow" : "0 0 8px 0 rgba(0, 0, 0, 0.6), 0 0 15px 0 rgba(0, 0, 0, 0.4)"
        });
        $('#category').show();
        break;

        case 3:
        this.$istoricButton.css({
          "background-color" : "black",
          "color" : "red",
          "z-index" : "10",
          "box-shadow" : "0 0 8px 0 rgba(0, 0, 0, 0.6), 0 0 15px 0 rgba(0, 0, 0, 0.4)"
        });
        $("#istoric").show();
        break;

        case 4:
        this.$importanceButton.css({
          "background-color" : "black",
          "color" : "red",
          "z-index" : "10",
          "box-shadow" : "0 0 8px 0 rgba(0, 0, 0, 0.6), 0 0 15px 0 rgba(0, 0, 0, 0.4)"
        });
        $("#impact").show();
        break;

        case 5:
        this.$mediaButton.css({
          "background-color" : "black",
          "color" : "red",
          "z-index" : "10",
          "box-shadow" : "0 0 8px 0 rgba(0, 0, 0, 0.6), 0 0 15px 0 rgba(0, 0, 0, 0.4)"
        });
        $("#media").show();
        break;

        default: return;
      }
    }
  };
})();

$(document).on("ready", function () {
  MenuModule.init();
  MenuModule.bindHandlers();
  window.MenuModule = MenuModule;
});
