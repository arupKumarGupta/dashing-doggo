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
