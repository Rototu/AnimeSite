var InteractiveModule = (function () {
   return {
      init: function () {
         this.$name = $("#name");
         this.$gameElement = $(".gameElement");
         this.$nameSubmit = $("#nameSubmit");
         this.started = false;
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
            if(!this.started) InteractiveModule.frame1();
         }.bind(this));

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
            $(".myCharName").text(this.name);

            //change to scene 2
            InteractiveModule.frame2();
         }.bind(this));

         //handle char select
         $(".gameChar").click(function () {
            $(".gameChar").hide();
            $("#"+this.id).show().css("opacity", 1);
            switch (this.id) {
               case "char1":
               InteractiveModule.characterSelect().shizuo(this);
               break;

               case "char2":
               break;

               case "char3":
               InteractiveModule.characterSelect().madoka(this);
               break;

               case "char4":
               break;

               default: return;
            }
         });

      },

      //characterSelected
      characterSelect: function() {
         return {

            //shizuo select
            shizuo: function (myChar) {

               //set choice
               var $izaya = $("#char4");
               var $myText =  $("#frame2One");
               myChar.src = "img/game/shizuocalmright.gif";
               $myText.text("L-ai ales pe Shizuo...");

               //start animation
               $izaya.prop("src", "img/game/izayarun.gif").css("opacity", 1).css("left", "1000px").delay(500).show(function () {
                  move("#char4").ease("linear").translate(-650).duration(3000).end().then(function () {
                     $izaya.prop("src", "img/game/izaya.gif");
                     $myText.text("Izaya a venit să îşi bată joc de tine!");
                  });
               });

               //complex animation
               setTimeout(function () {
                  setTimeout(function () {
                     $izaya.prop("src", "img/game/izayarunright.gif");
                     move("#char4").ease("linear").translate(650).duration(3000).end();
                     setTimeout(function () {
                        //animation end
                        $myText.text("PRINDE-L!!!");
                        myChar.src = "img/game/shizuo.gif";
                        //moving on to next frame
                        move("#char1").ease("linear").translate(1000).duration(1500).end().then(InteractiveModule.frame3().shizuo());
                     }, 1000)
                  }, 500);
               },  5000);

            },

            //madoka select
            madoka: function (myChar) {

               //set choice
               myChar.src = "img/game/madokawind.gif";
               var $myText =  $("#frame2One");
               $myText.text("Ai ales-o pe Madoka Kaname :D");

               //start animation
               move("#frame2").set("background-image", 'url("../img/game/swirl.png")').duration("1s").end().then(function () {
                  $myText.text("Ahmmm, cumva s-a activat portalul dintre universurile animaţiilor...");
               });

            }

         };
      },

      frame1: function () {

         //set initial values
         this.$gameElement.hide();
         this.$name.val("");
         this.name = null;
         this.started = true;

         //animation frame1
         $("#frame1").show(0, function () {
            $("#korosensei").delay(500).show("slide", {direction : "left"}, 1000, function () {
               $("#frame1One").delay(1000).fadeIn(1000, function () {
                  $("#frame1Two").delay(1000).fadeIn(1000, function () {
                     $("#frame1Form").delay(500).fadeIn(3000);
                  });
               });
            });
         });

      },

      frame2: function () {

         //animation frame 2
         $("#frame1").hide("slide", {direction:"left"});
         $("#frame2").show("slide", {direction:"right"}, function () {
            $("#charChoice").delay(2000).fadeIn(5000);
            $("#frame2One").delay(1000).fadeIn(3000);
         });

      },

      frame3: function () {
         return {
            shizuo: function () {

               //randomCoinPos generator function
               var randomCoinPos = function () {
                  return {
                     x: Math.round(Math.random() * (861)) + 70,
                     y: Math.round(Math.random() * (361)) + 70
                  };
               };

               //multiply element function
               $.fn.duplicate = function(count, cloneEvents) {
                  var tmp = [];
                  for ( var i = 0; i < count; i++ ) {
                     $.merge( tmp, this.clone( cloneEvents ).get() );
                  }
                  return this.pushStack( tmp );
               };

               //multiply element
               $('.coin').duplicate(19).appendTo('#frame3Shizuo');

               //set coin random position
               $(".coin").each(function () {
                  $(this).css("left", randomCoinPos().x);
                  $(this).css("top", randomCoinPos().y);
               });

               //random pos for IzayaChar
               var randomIzayaPos = function (left, right) {
                  return {
                     x: Math.round(Math.random() * (761)) + 70,
                     y: Math.round(Math.random() * (261)) + 70
                  };
               };


               //animation
               setTimeout(function () {
                  //animation frame 3
                  $("#frame2").hide("slide", {direction:"left"});
                  $("#frame3Shizuo").show("slide", {direction:"right"}, function () {
                     $("#shizuoClick").fadeIn(1000);
                     setTimeout(function () {

                        //start game
                        $("#shizuoClick").fadeOut(1000);
                        $(".coin").delay(1000).fadeIn(1500);
                        $("#shizuo").delay(1000).fadeIn(3000);
                        $("#runningIzaya").delay(1000).fadeIn(3000);

                        //game mechanics init
                        setTimeout(function () {

                           //move Shizou onClick
                           $("#frame3Shizuo").click(function (e) {

                              //calculate mouse pos relative to frame
                              var parentOffset = $(this).parent().offset();
                              var x = e.pageX - parentOffset.left - 70;
                              var y = e.pageY - parentOffset.top - 145;

                              //calculate char pos relative to frame
                              var shizuoPos = $("#shizuo").position();
                              var xS = shizuoPos.left;
                              var yS = shizuoPos.top;

                              //calculate duration for animation (charSpeed=300px/sec)
                              var runTime = Math.sqrt((xS-x)*(xS-x)+(yS-y)*(yS-y)) / 300;

                              //change animation orientation based on running direction
                              if(x>xS) {
                                 $("#shizuoImg").prop("src", "img/game/shizuo.gif");
                                 x += 35;
                              }
                              if(x<xS) {
                                 $("#shizuoImg").prop("src", "img/game/shizuoleft.gif");
                                 x += 35;
                              }

                              //move char to clicked pos then reset animation
                              move("#shizuo").ease("linear").set("left", x+"px").set("top", y+"px").duration(runTime+"s").end().then(function() {
                                 $("#shizuoImg").prop("src", "img/game/shizuocalmright.gif");
                              });

                           });

                           //coin counter
                           var coins = 0;
                           var coinCounter = setInterval(function () {
                              $(".coin").each(function () {

                                 //get position values
                                 var coinPos = $(this).offset();
                                 var charPos = $("#shizuoImg").offset();
                                 var charWidth = $("#shizuoImg").width();

                                 //detect collision
                                 var collision = (charPos.left < coinPos.left + 20 && charPos.left + charWidth > coinPos.left && charPos.top < coinPos.top + 20 && charPos.top + 120 > coinPos.top);
                                 if(collision) {
                                    coins++;
                                    $("#coinScore").text(coins);
                                    $(this).remove();
                                 }

                                 //if all coins collected stop counter and progress through game
                                 if(coins == 20) {
                                    clearInterval(coinCounter);
                                 }

                              });
                           },100);

                           //IzayaMove
                           var runningIzayaMove =  function () {

                              //get random pos
                              var newPos = randomIzayaPos();
                              var x = newPos.x;
                              var y = newPos.y;

                              //calculate char pos relative to frame
                              var izayaPos = $("#runningIzaya").position();
                              var xS = izayaPos.left;
                              var yS = izayaPos.top;

                              //little debug
                              move("#runningIzaya").ease("linear").set("left", xS+"px").set("top", yS+"px").duration(0).end().then(function() {
                                 $("#runningIzaya").prop("src", "img/game/izaya.gif");
                              });

                              //calculate duration for animation (charSpeed=600px/sec)
                              var runTime = Math.sqrt((xS-x)*(xS-x)+(yS-y)*(yS-y)) / 600;

                              //change animation orientation based on running direction
                              if(x>xS) {
                                 $("#runningIzaya").prop("src", "img/game/izayarunright.gif");
                                 x += 35;
                              }
                              if(x<xS) {
                                 $("#runningIzaya").prop("src", "img/game/izayarun.gif");
                                 x += 35;
                              }

                              console.log(x+" "+y+" "+runTime);

                              //move char to new pos then reset animation
                              move("#runningIzaya").ease("linear").set("left", x+"px").set("top", y+"px").duration(runTime+"s").end().then(function() {
                                 $("#runningIzaya").prop("src", "img/game/izaya.gif");
                              });

                           };

                           var IzayaIntervalMove =  setInterval(function () {
                              runningIzayaMove();
                           }, 3000);

                           //detect collision Izaya and Shizuo
                           var IzayaCollision = setInterval(function () {

                              //get position values
                              var isaPos = $("#runningIzaya").offset();
                              var charPos = $("#shizuoImg").offset();
                              var isaWidth = $("#runningIzaya").width();
                              var isaHeight = $("#runningIzaya").height();
                              var charWidth = $("#shizuoImg").width();

                              //detect collision
                              var collision = (charPos.left < isaPos.left + isaWidth && charPos.left + charWidth > isaPos.left && charPos.top < isaPos.top + isaHeight && charPos.top + 120 > isaPos.top);
                              if(collision) {
                                 runningIzayaMove();
                              }

                              //if all coins collected stop counter and progress through game
                              if(coins == 20) {
                                 clearInterval(IzayaIntervalMove);
                                 if(collision) {
                                    InteractiveModule.frame4().shizuo();
                                    clearInterval(IzayaCollision);
                                 }
                              }

                           },100);

                        }, 3000);
                     });

                  }, 6000);

               }, 2000);

            }
         };
      },

      frame4: function () {
         return {
            shizuo: function () {
               $("#frame3Shizuo").hide("slide", {direction:"left"});
               $("#shizuoEnd").show(0).delay(8000).fadeOut();
               $("#shizuoEndTitle").delay(9000).fadeIn(3000);
               $("#frame4Shizuo").show("slide", {direction:"right"}, "slow");
            }
         };
      }
   };
})();

$(document).on("ready", function () {
   InteractiveModule.init();
   InteractiveModule.bindHandlers();
});
