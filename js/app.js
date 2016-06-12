$(document).ready(function() {
   $('.ryu').mouseenter(function() {
     $('.ryu-state').removeClass('ryu-active');
     $('.ryu-ready').addClass('ryu-active');
   })
   .mouseleave(function() {
     $('.ryu-state').removeClass('ryu-active');
     $('.ryu-still').addClass('ryu-active');
   })
   .mousedown(function() {
     playHadouken();
     $('.ryu-state').removeClass('ryu-active');
     $('.ryu-throwing').addClass('ryu-active');
     $('.hadouken').finish().show().animate(
          {"left": "1020px"},
          500,
          function() {
          $(this).stop();
          $(this).hide();
          $(this).css("left", "520px");
        }
     );
    })
   .mouseup(function() {
     $('.ryu-state').removeClass('ryu-active');
     $('.ryu-ready').addClass('ryu-active');
   });

var xKeyPressed = false;
$(document).keydown(function(e) {
    if (e.keyCode == 88) {
      if (xKeyPressed === false) {
         xKeyPressed = true;
            playCool();
            $('.ryu-state').removeClass('ryu-active');
            $('.ryu-cool').addClass('ryu-active');
          }
    }
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      if (xKeyPressed === true) {
          xKeyPressed = false;
             $("#cool")[0].pause();
+            $("#cool")[0].load();
             $('.ryu-state').removeClass('ryu-active');
             $('.ryu-still').addClass('ryu-active');
          }
     }
 });
 })
function playHadouken() {
  $("#hadouken-sound")[0].volume = 0.5;
  $("#hadouken-sound")[0].load();
  $("#hadouken-sound")[0].play();
}
function playCool() {
  $("#cool")[0].volume = 0.5;
  $("#cool")[0].load();
  $("#cool")[0].play();
}
