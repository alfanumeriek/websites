var numSquares = 0;
var activeColor = "white";
var squareSize = 15;

window.onload = function(){
	drawGrid(20,20);
}

drawGrid = function(x, y){
	// x and y being the number of squares wide and high
	var container = document.getElementById("gridContainer");
	
	numSquares = x*y;
	
	// Calculate grid size (= div gridContainer) and draw grid
	var gridWidth = x*(squareSize+1);
	var gridHeight = y*(squareSize+1);
	container.style.width = gridWidth+"px";
	container.style.height = gridHeight+"px";
	
	// Position color palette relative to grid
	document.getElementById("colorPalette").style.left = gridWidth + 20 + "px";
	
	// Draw grid with squares
	while(numSquares > 0){
		var newDivId = "square" + numSquares;
		var newDiv = document.createElement("div");
		newDiv.id = newDivId;
		newDiv.setAttribute("class", "square");
		document.getElementById("gridContainer").appendChild(newDiv);
		// Change color and size
		document.getElementById(newDivId).style.background = activeColor;
		document.getElementById(newDivId).style.width = squareSize+"px";
		document.getElementById(newDivId).style.height = squareSize+"px";
		numSquares--;
	}
}

changeColor = function(){
	
}