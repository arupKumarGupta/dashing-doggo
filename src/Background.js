class Background extends GameEntity {
	#sprite = new Sprite(BACKGROUND_ASSET, 2400, 720);
	constructor(game, gameWidth, gameHeight) {
		super(game, gameWidth, gameHeight);

		this.x = 0;
		this.y = 0;
		this.vx = 10;
	}
	update() {
		this.x -= this.vx;
		if (this.x < -this.sprite.width) {
			this.x = 0;
		}
	}

	draw(ctx) {
		ctx.drawImage(this.sprite, this.x, this.y);
		ctx.drawImage(this.sprite, this.x + this.sprite.width - 5, 0);
	}
	get spriteWidth() {
		return this.#sprite.spriteWidth;
	}
	get spriteHeight() {
		return this.#sprite.spriteHeight;
	}
	get sprite() {
		return this.#sprite.image;
	}
}
