var numSquares = 0;
var color = "#ffffff";
var width,height;

window.onload = function(){
	
	// Where all squares will be put
	var container = document.getElementById("squareContainer");
	
	// Get info from form fields when button clicked
	document.getElementById("buttonSubmit").addEventListener("click", function(){
		numSquares = document.getElementById("inputNumber").value;
		color = document.getElementById("inputColor").value;
		alert(numSquares + " " + color);
	}, false);
	
}
