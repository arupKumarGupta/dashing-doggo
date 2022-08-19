class Sprite {
	constructor(assetPath, spriteWidth, spriteHeight, width, height) {
		this.spriteWidth = spriteWidth;
		this.spriteHeight = spriteHeight;
		this.width = width;
		this.height = height;
		this.assetPath = assetPath;
		this.image = new Image();
		this.image.src = assetPath;
	}
}
