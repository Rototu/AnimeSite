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
    transitionDuration : '5s',
    fitWidth : true,
  });
  var s3 = false;

  $('#cButton').click(function() {

    $mySlide.show().hide();
    $(window).resize(function() {
      $grid.masonry('layout');
      s3 = true;
      $grid.show().masonry('layout');
    });
    window.myButton = 2;
    $("#slide3").css('opacity', 0);

    $('.char').hide().fadeIn(2000);
    $('.arrows').hide().delay(2000).fadeIn(1000);

    kPress = true;
    i=0;
    $mySlide.hide();
    $('#category').show();
    $sidebarSection.css('opacity', 0.2);
    myButton = null;

    $(document).keydown(function(e) {

      $('.char').hide();
      $('.arrows').hide();

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

      $sidebarSection.css('opacity', 0.2);
      myButton = $('#b'+i);
      $mySlide.hide();
      $('#slide' + i).show();
      if(i==3) {
        $('#slide3').delay(1500).css('opacity', 1);
        s3 = true;
        $grid.imagesLoaded().show().masonry('layout');
      }
    });
  });

  $sidebarSection.hover(function() {
    $(this).css('opacity', 1);
  }, function() {
    $(this).css('opacity', 0.4);
  });

  var txtHeight;
  var docHeight = $(window).height();
  $sidebarSection.click(function(event) {

    $('.char').hide();
    $('.arrows').hide();

    switch(event.target.id) {
      case 'b1':
      $mySlide.hide();
      $('#slide1').show();
      txtHeight = $('#txt1').height();
      $('#txt1').css('margin-top', 5*docHeight/20 - txtHeight/2);
      // alert(txtHeight/2 + ' ' + 5*docHeight/20 + ' ' + ((5*docHeight/10) - (txtHeight)));
      break;

      case 'b2':
      $mySlide.hide();
      $('#slide2').show();
      break;

      case 'b3':
      $mySlide.hide();
      $('#slide3').show().css('opacity', 1);
      s3 = true;
      setTimeout(function() {
        $grid.imagesLoaded().masonry('layout');
        $("grid-item").show();
      },1000);
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
