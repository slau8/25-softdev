/*
 * Young Ballers
 * Shannon Lau, Taylor Wong
 * SoftDev Period 7
 * 03-07-2018
 * K#10: Objectification
 */

var svg = document.getElementById("slate");
var width = svg.getAttribute("width");
var height = svg.getAttribute("height");

var clear = document.getElementById("clear");

var dot = {
    
    setColor function(c){
	dot.setAttribute("fill",c);
    };
};

//clears the screen and resets the prevX and prevY variables
var clearCallBack = function(e){
    while(svg.firstChild){
	svg.removeChild(svg.firstChild);
    }
};

//draws a dot, returns the x and y coordinates in a list
var drawDot = function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    c.addEventListener("click", changeColor);
    svg.appendChild(c);
    e.stopPropagation();
};

//toggles the color between red and blue
var changeColor = function(e){
    if(this.getAttribute("fill") == "red"){
        this.setAttribute("fill", "blue");
    }
    else{
	console.log("delete");
	svg.removeChild(this);
	randCircle();
    }
    e.stopPropagation();
}

//draws a circle at random coordinates
var randCircle = function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", Math.random() * (width - 10));
    c.setAttribute("cy", Math.random() * (height - 10));
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    c.addEventListener("click", changeColor);
    svg.appendChild(c);
}

//add the event listeners
svg.addEventListener("click", drawDot);
clear.addEventListener("click", clearCallBack);

