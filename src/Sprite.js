class Sprite {
	constructor(assetPath, spriteWidth, spriteHeight) {
		this.spriteWidth = spriteWidth;
		this.spriteHeight = spriteHeight;
		this.image = new Image();
		this.assetPath = assetPath;
		this.image.src = assetPath;
	}
}
