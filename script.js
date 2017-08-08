var pixels = 16;
var pixelsize = String(640 / pixels) + "px";

function drawgrid() {
   for (var i=0; i< pixels * pixels; i++) {
   $(".inner-container").append("<div class='pixel'></div>");
   }
   $(".pixel").css({"height": pixelsize});
   $(".pixel").css({"width": pixelsize});
}

function cleargrid() {
	$(".pixel").remove();
}

function etch() {
	  $(".pixel").hover(
    function(){
   		$(this).addClass("etched");
   	}
   	);
}

$(document).ready(function(){
	drawgrid();
	$("#choose-size").change(function(){
		alert("Size changed!");
		pixels = $(this).val();
		pixelsize = String(640 / pixels) + "px";
		cleargrid();
		drawgrid();
		etch();
	});	
	etch();
	$("#clear").click(function(){
		$(".pixel").removeClass("etched");
	});
	$("#shake").click(function(){
		$(".outer-container").animate({left: "300px"}, "fast");
		$(".outer-container").animate({left: "0px"}, "fast");
		$(".pixel").each(function(){
			if (Math.random() > 0.66) {
				$(this).removeClass("etched");
			}
		});
	});
});