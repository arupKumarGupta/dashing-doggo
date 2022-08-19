class Game {
	score = 0;

	constructor(gameWidth, gameHeight) {
		this.gameHeight = gameHeight;
		this.gameWidth = gameWidth;
		this.player = new Player(this, gameWidth, gameHeight);
		this.enemies = [];
		this.background = new Background(this, gameWidth, gameHeight);
		this.inputHandler = new InputHandler();

		this.frameInterval = 1000;
		this.frameTimer = 0;
		this.seedTimer =
			Math.floor(Math.random() * 1500) + (Math.random() * 3000 - 1500);

		this.enemySpeedModifier = 1;
		this.scoreText = new Score(this, gameWidth, gameHeight);
		this.isGameOver = false;
	}

	addEnemies(deltaTime) {
		if (this.frameTimer > this.frameInterval + this.seedTimer) {
			this.frameTimer = 0;
			if (this.score > 1500) {
				this.enemySpeedModifier += 0.02;
			}
			this.enemies = [
				...this.enemies.filter((e) => !e.markedForDeletion),
				new Enemy(
					this,
					this.gameWidth,
					this.gameHeight,
					this.enemySpeedModifier
				),
			];
			this.seedTimer = Math.floor(Math.random() * 1500);
		} else {
			this.frameTimer += deltaTime;
		}
	}

	run(ctx, deltaTime) {
		this.addEnemies(deltaTime);
		[this.background, this.player, this.scoreText, ...this.enemies].forEach(
			(v) => {
				v.draw(ctx);
				v.update(deltaTime, this.inputHandler);
			}
		);
		this.detectCollision();
		return {
			score: this.score,
			isGameOver: this.isGameOver,
		};
	}

	updateScore() {
		this.score += 1;
	}

	detectCollision() {
		for (let enemy of this.enemies) {
			const dx = this.player.x - enemy.x;
			const dy = this.player.y - enemy.y;
			const dist = Math.sqrt(dx * dx + dy * dy) + enemy.collisionOffset;
			if (dist < enemy.spriteWidth / 2 + this.player.spriteWidth / 2) {
				this.isGameOver = true;
				break;
			}
		}
	}
}
