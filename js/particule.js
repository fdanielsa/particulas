Math.distance = function(a, b){
	return Math.sqrt( Math.pow((a.x-b.x), 2) + Math.pow((a.y-b.y), 2) );
}
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
	this.position = {
		x: args.x || (Math.random() * window.innerWidth),
		y: args.y || (Math.random() * window.innerHeight)
	}
	this.alpha = Math.random();
	this.rgba = "rgba(255,255,255,"+this.alpha+")";
	this.velocity = { 
		x: (Math.random() * 4) -2,
		y: (Math.random() * 4) -2
	};
	this.radius = args.radius || this.alpha * 3;
	//se renderizo el context
	this.draw = function(ctx) {
		this.update();
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, this.radius, PI2, false);
		ctx.fillStyle = this.rgba;
		ctx.fill();
		ctx.closePath();
	}
	//update actualiza la posicion en x
	this.update = function() {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		if(this.position.x < 0) this.position.x = canvas.width;
		if(this.position.y < 0) this.position.y = canvas.height;
		if(this.position.x > canvas.width) this.position.x = 0;
		if(this.position.y > canvas.width) this.position.y = 0;
	}
	return this;

}

function render(){
	//draw mehods
	context.clearRect(0,0, maxWidth, maxHeight);
	for (var i = 0; i < particles.length; i++) {
		var a = particles[i];
		a.draw(context);
		for (var j = i + 1; j < particles.length; j++) {
			var b = particles[j];
			var distance = Math.distance(a.position, b.position);
			if(distance < 30) {
				context.beginPath();
				context.moveTo(a.position.x, a.position.y);
				context.lineTo(b.position.x, b.position.y);
				context.stroke();
				context.lineWidth = 1 - (distance/30);
				
				context.strokeStyle = "white";
				context.closePath();
			}
		}
	}
}

init();
animate();