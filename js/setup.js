//BASE PARA UN CANVAS
//var container = document getElementByld("container");
var canvas, context;
var maxWidth, maxHeight;
var time = new Date() getTime();


function init() {
	canvas = document.createElement("canvas");
	context = canvas getContext("2d");
	//container.appendChild(canvas);
	document body appendChild(canvas);
	setSize();
	window.addEventListener("resize", setSize);
}

function setSize() {
	maxWidth = window.innerWhidth;
	maxHeight = window innerHeigth;
	canvas.width = maxWidth;
	canvas height = maxHeight;
}

function animate() {
	requestAnimationFrame(animate);
	render();
}

function render(){
	//draw mehods
}

init();
animate();