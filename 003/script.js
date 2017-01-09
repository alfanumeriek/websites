var numSquares = 0;
var activeColorA = "white";
var activeColorB = "black";
var squareSize = 15;
var newDiv;

window.onload = function(){
	drawGrid(20,20);
}

function drawGrid(x, y){
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
		newDiv = document.createElement("div");
		newDiv.id = newDivId;
		newDiv.setAttribute("class", "square");
		document.getElementById("gridContainer").appendChild(newDiv);
		// Change color and size
		newDiv = document.getElementById(newDivId);
		newDiv.style.background = activeColorA;
		newDiv.style.width = squareSize+"px";
		newDiv.style.height = squareSize+"px";
		// Add click event
		newDiv.addEventListener("click", changeColor);
		newDiv.addEventListener("context", changeColor);
		numSquares--;
	}
}

function changeColor(e) {
    //alert(e);
		if(this.style.background = activeColorA){
			this.style.background = activeColorB;
		}
		else{
			this.style.background = activeColorA;
		}
		
}