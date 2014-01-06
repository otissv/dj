
$(document).ready(function() {

  var lastAnmimated = null;

  $('.animation').click(function(event) {
    var targetId = event.target.id
    animate(targetId);
    setTimeout(function () {
      removeAnimate();
    }, 1100);

  });

  function animate(targetId) {
    $('#' + targetId).addClass('animation-' + targetId);
    lastAnmimated = targetId;
  };
  function removeAnimate(){
    if (lastAnmimated !== null) {
      $('#' + lastAnmimated).removeClass('animation-' + lastAnmimated);
    }
  }
});