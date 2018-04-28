var canvas, context;
var maxWidth, maxHeight;
var time = new Date().getTime();

function init() {
	canvas = document.createElement("canvas");
	context = canvas.getContext("2d");
	//container.appendChild(canvas);
	document.body.appendChild(canvas);
	setSize();
	window.addEventListener("resize", setSize);
}

function setSize() {
	maxWidth = window.innerWidth;
	maxHeight = window.innerHeight;
	canvas.width = maxWidth;
	canvas.height= maxHeight;
}

function animate() {
	requestAnimationFrame(animate);
	render();
}

function render() {
	context.clearRect(0, 0, maxWidth, maxHeight);
	//draw mehodt 
	context.fillStyle = "red";
	context.fillRect(0, 0, 100, 100);
	context.drawRect(0, 0, 100, 100);
	context.beginPath();
	context.moveTo(maxWidth/2, maxHeight/2);
	context.lineTo(400, 500);
	context.lineTo(300, 550);
	context.lineTo(400, 500);
	context.lineTo(200, 100);
	context.lineTo(maxWidth/2, maxHeight/2);
	context.strokeStyle = "blue";
	context.stroke();
	context.closePath();

	context.beginPath();
	context.arc(300, 300, 10, Math.PI*2,false);
	context.strokeStyle = "green";
	context.stroke();
}

init();
animate();