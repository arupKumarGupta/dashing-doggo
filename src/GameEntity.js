class GameEntity {
	markedForDeletion = false;
	constructor(game, gameWidth, gameHeight) {
		this.game = game;
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		this.fps = 20;
		this.maxFrame = 5;
		this.frameTimer = 0;
		this.frameInterval = 1000 / this.fps;
		this.frameX = 0;
		this.frameY = 0;
	}
	draw(ctx) {}
	update(deltaTime, ...args) {
		if (this.frameTimer > this.frameInterval) {
			this.frameX = (this.frameX + 1) % this.maxFrame;
			this.frameTimer = 0;
		} else {
			this.frameTimer += deltaTime;
		}
	}
}
