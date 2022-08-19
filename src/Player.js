class Player extends GameEntity {
	#sprite = new Sprite(PLAYER_ASSET, 200, 200);
	constructor(gameWidth, gameHeight) {
		super(gameWidth, gameHeight);
		this.y = this.gameHeight - this.#sprite.spriteHeight;
		this.x = 0;
		this.frameX = 0;
		this.frameY = 0;
		this.vx = 0;
		this.vy = 0;
		this.weight = 1;
	}
	draw(ctx) {
		ctx.save();
		ctx.drawImage(
			this.sprite,
			this.frameX * this.spriteWidth,
			this.frameY * this.spriteHeight,
			this.spriteWidth,
			this.spriteHeight,
			this.x,
			this.y,
			this.spriteWidth,
			this.spriteHeight
		);
		ctx.restore();
	}

	update(input) {
		if (input.keys.has('ArrowRight')) {
			this.vx = 5;
			this.frameX = (this.frameX + 1) % 9;
		} else if (input.keys.has('ArrowLeft')) {
			this.vx = -5;
			this.frameX = (this.frameX + 1) % 9;
		} else {
			this.vx = 0;
			this.frameX = 0;
		}

		if (this.x < 0) {
			this.x = 0;
		}
		if (this.x > this.gameWidth - this.spriteWidth) {
			this.x = this.gameWidth - this.spriteWidth;
		}

		// horizontal
		this.x += this.vx;
		// vertical

		if (input.keys.has('ArrowUp') && this.onGround) {
			this.vy = -30;
		}
		this.y += this.vy;
		if (!this.onGround) {
			this.vy += this.weight;
			this.frameY = 1;
			this.frameX = (this.frameX + 1) % 7;
		} else {
			this.vy = 0;
			this.frameY = 0;
		}

		if (this.y > this.gameHeight - this.spriteHeight) {
			this.y = this.gameHeight - this.spriteHeight;
			this.vy = 0;
		}
	}

	get onGround() {
		return this.y >= this.gameHeight - this.spriteHeight;
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
