/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();
        
        // Calculates Reading Time
        $('.post-content').readingTime({
            readingTimeTarget: '.post-reading-time',
            wordCountTarget: '.post-word-count',
        });
        
        // Creates Captions from Alt tags
        $(".post-content img").each(function() {
            // Let's put a caption if there is one
            if($(this).attr("alt") && !$(this).hasClass("emoji"))
              $(this).wrap('<figure class="image"></figure>')
              .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
        });
        
    });

}(jQuery));

function loadPage(pwd) {
  if (pwd == 'wearablehealth'){
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }
  else {
		$("#password").attr("placeholder","wrong password");
		$("#password").val("");
  }
}

 
$("#loginbutton").on("click", function() {
	loadPage($("#password").val());
});

$("#password").focus();