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

// clear screen to white
var clearCallBack = function(e){
    while(svg.firstChild){
	     svg.removeChild(svg.firstChild);
    }
};

var dotCallBack = function(e){
    drawDot(e.offsetX, e.offsetY, 25, "blue");
    e.stopPropagation();
}

// draws a dot
var drawDot = function(x, y, r, color){
    var c = {
      cx : x,
      cy : y,
      radius: r,
      fill : color,
      circle : document.createElementNS("http://www.w3.org/2000/svg", "circle"),
      update : function(e){
          if (this.getAttribute("fill") == "blue"){
            this.setAttribute("fill", "red");
          } else {
            var x = Math.random() * width - r;
            var y = Math.random() * height - r;
            this.setAttribute("cx", x);
            this.setAttribute("cy", y);
          }
          e.stopPropagation();
      },
      display : function(){
          svg.appendChild(this.circle);
      }
    };
    c.circle.setAttribute("cx", x);
    c.circle.setAttribute("cy", y);
    c.circle.setAttribute("r", r);
    c.circle.setAttribute("fill", color);
    c.circle.setAttribute("stroke", "black");
    c.circle.addEventListener("click", c.update);
    c.display();
};

//add the event listeners
svg.addEventListener("click", dotCallBack);
clear.addEventListener("click", clearCallBack);
