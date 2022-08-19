window.addEventListener('load', () => {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	const inputHandler = new InputHandler();
	const player = new Player(canvas.width, canvas.height);
	console.log(player);
	let lastTime = 0;
	function animate(timestamp) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		const delta = timestamp - lastTime;
		lastTime = timestamp;
		player.draw(ctx);
		player.update(inputHandler);
		requestAnimationFrame(animate);
	}
	animate(lastTime);
});
