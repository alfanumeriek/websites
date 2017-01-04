var numSquares = 0;
var color = "#ffffff";
var width,height;

window.onload = function(){
	
	// Hide squares
	document.getElementById("squareContainer").style.display = "none";
	
	// Where all squares will be put
	var container = document.getElementById("squareContainer");
	
	// Get info from form fields when button clicked
	document.getElementById("buttonSubmit").addEventListener("click", function(){
		numSquares = document.getElementById("inputNumber").value;
		color = document.getElementById("inputColor").value;
		
		// Hide form fields and show squares
		document.getElementById("formContainer").style.display = "none";
		document.getElementById("squareContainer").style.display = "inline";
		
		// Add square div's
		while(numSquares > 0){
			var newDivId = "square" + numSquares;
			var newDiv = document.createElement("div");
			newDiv.id = newDivId;
			newDiv.setAttribute("class", "square");
			document.getElementById("squareContainer").appendChild(newDiv);
			// Change color
			document.getElementById(newDivId).style.background = color;
			numSquares--;
		}
	}, false);
}