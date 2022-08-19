class InputHandler {
	#keyMap = {
		ArrowDown: true,
		ArrowUp: true,
		ArrowLeft: true,
		ArrowRight: true,
	};
	constructor() {
		this.keys = new Set([]);
		window.addEventListener('keydown', (e) => {
			if (this.#keyMap[e.key]) {
				this.keys.add(e.key);
			}
		});

		window.addEventListener('keyup', (e) => {
			if (this.#keyMap[e.key]) {
				this.keys.delete(e.key);
			}
		});
	}
}
