const canvas = document.querySelector('canvas');
const CANVAS_HEIGHT = (canvas.height = 700);
const CANVAS_WIDTH = (canvas.width = 700);
const ctx = canvas.getContext('2d');
const GAME_SPEED = 1;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'assets/backgroundLayers/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'assets/backgroundLayers/layer-2.png';

const backgroundLayer3 = new Image();
backgroundLayer3.src = 'assets/backgroundLayers/layer-3.png';

const backgroundLayer4 = new Image();
backgroundLayer4.src = 'assets/backgroundLayers/layer-4.png';

const backgroundLayer5 = new Image();
backgroundLayer5.src = 'assets/backgroundLayers/layer-5.png';
let x = 0;
class Layer {
	static GAME_SPEED;
	constructor(image, speedModifier = 1, gameSpeed = 5) {
		Layer.GAME_SPEED = gameSpeed;
		this.image = image;
		this.speedModifier = speedModifier;
		this.x = 0;
		this.y = 0;
		this.width = image.width;
		this.height = 700;
		this.speed = Layer.GAME_SPEED * this.speedModifier;
	}
	update(frame = 0) {
		this.speed = Layer.GAME_SPEED * this.speedModifier;
		this.x = (frame * this.speed) % this.width;
	}
	draw(ctx) {
		ctx.drawImage(this.image, this.x, 0);
		ctx.drawImage(this.image, this.x + this.image.width, 0);
	}
}

const backgrounds = [
	{ layer: backgroundLayer1, speed: 1 },
	{ layer: backgroundLayer2, speed: 1 },
	{ layer: backgroundLayer3, speed: 1 },
	{ layer: backgroundLayer4, speed: 1.5 },
	{ layer: backgroundLayer5, speed: 2 },
];
const layers = backgrounds.map(
	({ layer, speed }) => new Layer(layer, speed, GAME_SPEED)
);

let frame = 0;
const animate = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	layers.forEach((layer) => {
		layer.update(frame--);
		layer.draw(ctx);
	});

	requestAnimationFrame(animate);
};

window.addEventListener('load', () => {
	animate();
});
