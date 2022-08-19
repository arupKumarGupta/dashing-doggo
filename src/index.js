window.addEventListener('load', () => {
	const gameOverModal = document.querySelector('.game-over');
	const scoreText = document.querySelector('.score');
	const playAgain = document.querySelector('.again');

	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	canvas.height = 700;
	canvas.width = window.innerWidth;
	let game = new Game(canvas.width, canvas.height);
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
			finalScore = score;
			showGameOverModal();
		}
	}
	animate(lastTime);

	function showGameOverModal() {
		cancelAnimationFrame(gameId);
		gameOverModal.style.display = 'block';
		scoreText.textContent = `Score: ${finalScore}`;
	}
	playAgain.addEventListener('click', () => {
		game = new Game(canvas.width, canvas.height);
		animate(0);
		gameOverModal.style.display = 'none';
	});
});
