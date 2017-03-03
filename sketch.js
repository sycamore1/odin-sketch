$(document).ready(function() {
	var penColour = "#000";
	/* function defaultPad() {
	for ( var x = 1; x <= 256; x++ ) {
    		$(".container").append($('<div class="grid"></div>'));
    	}
		$(".grid").on('mouseenter', function(){
			$(this).css({'background-color': penColour});
		})
	}
	defaultPad(); */

	
	function clearPad() {
		$(".grid").css({'background-color': '#fff'});
		penColour = "#000";
	}

	$("#reset").on('click', function(){
		clearPad();
	})
	
	function squareSize(i) {
		$(".grid").css({'height': 480/i, 'width': 480/i,});
	}

	var res = 64;
	$("#new").on('click', function() {
		res = prompt("Please enter number of squares [max: 64]");
		squareSize(res);
		clearPad();
	})

	var numSquare = res * res;
	for ( var x = 1; x <= numSquare; x++ ) {
    	$(".container").append($('<div class="grid"></div>'));
    }
	
	$(".grid").on('mouseenter', function(){
		$(this).css({'background-color': penColour});
	})

	$("#randColour").on('click', function() {
		var rgb1 = Math.floor(Math.random() * 256);
		var rgb2 = Math.floor(Math.random() * 256);
		var rgb3 = Math.floor(Math.random() * 256);
		var randColour = "rgb(" + rgb1 + ", " + rgb2 + ", " + rgb3 + ")";
		penColour = randColour
	})

	

	/* GRADIENT MODE
	$("#grad").on('click', function(){

		$(".grid").on('mouseenter', function(){
			var opacity = 0;			
			$(this).css({'opacity': opacity +=0.1});
		})
	}) */

})


