(function(){
  var $forest = $(".forest");
  var $popup = $("#popup");

  $popup.hide();
  $("#Sinon").fadeIn(3000);
  $("#loadingGif").fadeIn(3000);
  $(".screen").hide();
  $(".container").show();
  $("#scene").parallax();
  $("#logo").css({
    "background-color" : "black",
    "color" : "red"
  });

  $("#totoro").click(function() {
    $popup.fadeIn(1000);
  });
  $("#popclose").click(function() {
    $popup.fadeOut(500);
  });

  var width = $(window).width();
  $(window).on('resize', function() {
    width = $(window).width();
    var fHeight = $(".forest").height();
    var wHeight = $(document).height();
    $forest.css("top", wHeight-fHeight);
  });

  $("#logo").click(function() {
    window.myButton = 1;
    setTimeout(function() {
      $(".container").show();
      var fHeight = $(".forest").height();
      var wHeight = $(document).height()*9/10;
      $forest.css("top", wHeight-fHeight);
    },100);
  });

  // var myBg = 0;
  // var myBgs = ["img/anime/fundal.jpg", "img/tokyo.jpg", "img/landscape.jpg", "img/nightjapan.jpg"];
  // var myIntBgs = ["img/anime/forest.png", "img/tokyoskyline.png", "img/anime/forest.png", "img/tokyoskyline.png"];
  // $("#totoro").click(function() {
  //   if(myBg<=3) {myBg++;}
  //   if(myBg==4) {myBg=0;}
  //   $("#parallaxBg").attr("src", myBgs[myBg]);
  //   $("#forest").attr("src", myIntBgs[myBg]);
  //   var fHeight = $(".forest").height();
  //   var wHeight = $(document).height()*9/10;
  //   $(".forest").css("top", wHeight-fHeight);
  // });
}());
