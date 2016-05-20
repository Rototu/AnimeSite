$(document).on("ready", function () {

  $("#istoricButton").click(function() {
    window.myButton = 3;
    window.MenuModule.changeSelectedButton();
    $(window).trigger('resize');
    $("#audio").prop("muted", true);

    //init Timeline
    setTimeout(function() {
      var timelineHtml = "<img src='img/anime/loadingSin.gif' height='200px'/><iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=16GQkR4ugEoxGKNvxdJY732Zs4OUD5bIx5SDh0rp3yFc&font=Default&lang=en&initial_zoom=2' width='100%' height='100%' frameborder='0'></iframe>"
      var options = {
        scale_factor: 0.5,
        timenav_height_percentage: 15,
        language: 'ro'
      };
      $("#timeline-embed").show().html(timelineHtml);
      $(window).trigger('resize');
    }, 100);

  });
});
