var pixels = 16;
var pixelsize = String(640 / pixels) + "px";

$(document).ready(function(){
		
	for (var i=0; i< pixels * pixels; i++) {
	$(".inner-container").append("<div class='pixel'></div>");
   }
   $(".pixel").css({"height": pixelsize});
   $(".pixel").css({"width": pixelsize});
   $(".pixel").hover(
   	function(){
   		$(this).addClass("etched");
   	}
   	);
});