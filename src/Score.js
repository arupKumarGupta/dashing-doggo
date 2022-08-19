class Score extends GameEntity {
	constructor(game, gameWidth, gameHeight) {
		super(game, gameWidth, gameHeight);
	}

	draw(ctx) {
		ctx.save();
		ctx.fillStyle = '#000000';
		ctx.font = '40px DynaPuff';
		ctx.fillText(`Score: ${this.game.score}`, 20, 50);
		ctx.restore();
	}
	update() {}
}
