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
