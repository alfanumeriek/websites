var numSquares = 0;
var backgroundColor = "white";
var activeColor = "black";
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
		newDiv.style.background = backgroundColor;
		newDiv.style.width = squareSize+"px";
		newDiv.style.height = squareSize+"px";
		// Add click event
		newDiv.addEventListener("mousedown", startDrawing);
		numSquares--;
	}
	
	// Colorpicker
	activeColor = document.getElementById("colorPicker").value;
	document.getElementById("colorPicker").addEventListener("change", changeColor);
}

function startDrawing(e) {
		this.style.background = activeColor;
		var allDivs = document.getElementById("gridContainer").childNodes;
//alert(allDivs[1].id);
		allDivs.forEach(function(div){
			div.addEventListener("mouseover", startDrawing);
			document.addEventListener("mouseup", stopDrawing);
			//div.style.background = "pink";
		});
}

function stopDrawing(e){
	var allDivs = document.getElementById("gridContainer").childNodes;
	allDivs.forEach(function(div){
		div.removeEventListener("mouseover", startDrawing);
	});
}

function changeColor(){
	activeColor = document.getElementById("colorPicker").value;
}