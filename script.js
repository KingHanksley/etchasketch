var pixels = 16;
$(document).ready(function(){
	for (var i=0; i< pixels * pixels; i++) {
	$(".inner-container").append("<div class='pixel'>" + i + "</div>");
   }
   $(".pixel").hover(
   	function(){
   		$(this).addClass("etched");
   	}
   	);
});