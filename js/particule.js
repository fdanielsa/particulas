var canvas, context;
var maxWidth, maxHeight;
var time = new Date().getTime();
//var particle = {
	//x: Math.random() * window.innerWidth,
	//y: Math.random() * window.innerHeight,
	//radius: Math.random() * 10
//};
var particles = [];
var particleCounter = 700;
var PI2 = Math.PI*2;

function init() {
	canvas = document.createElement("canvas");
	context = canvas.getContext("2d");
	//container.appendChild(canvas);
	document.body.appendChild(canvas);
	setParticles();
	setSize();
	window.addEventListener("resize", setSize);
}
 
function setParticles() {
	for (var i = 0; i < particleCounter; i++) {
		var particle = new Particle();
		particles.push(particle);
	}
}

function setSize() {
	maxWidth = window.innerWidth;
	maxHeight = window.innerHeight;
	canvas.width = maxWidth;
	canvas.height= maxHeight;
}

function animate() {
	requestAnimationFrame(animate);
	time = new Date().getTime()
	render();
}

//this(la posicion) args(argumentos) Particle (clase)
//todas las clases llevan una funcion dentro.
var Particle = function(args) {
	if (args === undefined) args = {};
	this.x = args.x || (Math.random() * window.innerWidth);
	this.y = args.y || (Math.random() * window.innerHeight);
	this.radius = args.radius || (Math.random() * 7);
	return this;

}

function render(){
	//draw mehods
	context.clearRect(0,0, maxWidth, maxHeight);
	for (var i = 0; i < particles.length; i++) {
		var particle = particles[i];
		context.beginPath();
		context.arc(particle.x, particle.y, particle.radius, PI2, false);
		context.stroke();
		context.fill();
		context.closePath();
	};

}

init();
animate();