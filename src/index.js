window.addEventListener('load', () => {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	canvas.height = 700;
	canvas.width = window.innerWidth;
	const game = new Game(canvas.width, canvas.height);
	let lastTime = 0;
	let gameId;
	let finalScore;
	function animate(timestamp) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		const delta = timestamp - lastTime;
		lastTime = timestamp;
		const { score, isGameOver } = game.run(ctx, delta);
		gameId = requestAnimationFrame(animate);
		if (isGameOver) {
			cancelAnimationFrame(gameId);
			finalScore = score;
		}
	}
	animate(lastTime);
});
