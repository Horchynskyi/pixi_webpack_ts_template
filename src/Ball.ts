import { Sprite, Texture } from 'pixi.js';

export class Ball extends Sprite {
	readonly radius: number = null;

	constructor(texture: Texture) {
		super(texture);

		this.radius = this.width / 2;
	}
}
