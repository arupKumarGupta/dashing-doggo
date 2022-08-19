class Enemy extends GameEntity {
	#sprite = new Sprite(ENEMY_SNAIL_ASSET, 160, 119);
	toBeDeleted = false;
	constructor(game, gameWidth, gameHeight, speedModifier = 1) {
		super(game, gameWidth, gameHeight);
		this.x = this.gameWidth;
		this.y = this.gameHeight - this.spriteHeight;
		this.frameX = 0;
		this.fps = 20;
		this.maxFrame = 5;
		this.frameTimer = 0;
		this.frameInterval = 1000 / this.fps;
		this.speed = 8;
		this.enemySpeedModifier = speedModifier;
		this.collisionOffset = 30;
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

	markForDeletion() {
		if (!this.markedForDeletion) {
			this.markedForDeletion = true;
			this.game.updateScore();
		}
	}

	draw(ctx) {
		ctx.drawImage(
			this.sprite,
			this.frameX * this.spriteWidth,
			0,
			this.spriteWidth,
			this.spriteHeight,
			this.x,
			this.y,
			this.spriteWidth,
			this.spriteHeight
		);
	}

	update(deltaTime) {
		if (this.x < -this.spriteWidth) {
			this.markForDeletion();
		}
		this.x -= this.speed * this.enemySpeedModifier;
		super.update(deltaTime);
	}
}
