(function(){
   $("#istoricButton").click(function() {
      $("#audio").prop("volume", 0);
      window.myButton = 3;
      $(".slide").hide();
      $("#istoric").show();
      $(window).trigger('resize');
      setTimeout(function() {
         var options = {
            scale_factor: 0.5,
            timenav_height_percentage: 15,
            language: 'ro'
         };
         $(window).trigger('resize');
         // timeline = new TL.Timeline('timeline-embed',
         // 'https://docs.google.com/spreadsheets/d/16GQkR4ugEoxGKNvxdJY732Zs4OUD5bIx5SDh0rp3yFc/pubhtml', options);
         $("#timeline-embed").show().html("<img src='img/anime/loadingSin.gif' height='200px'/><iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=16GQkR4ugEoxGKNvxdJY732Zs4OUD5bIx5SDh0rp3yFc&font=Default&lang=en&initial_zoom=2' width='100%' height='100%' frameborder='0'></iframe>");
         $(window).trigger('resize');
      }, 100);
   });
}());
