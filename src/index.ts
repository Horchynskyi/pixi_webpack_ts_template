import { Application, Assets } from 'pixi.js';
import { Ball } from './Ball';

// Asynchronous IIFE
(async () => {
	// Create a PixiJS application.
	const app = new Application();

	// Intialize the application.
	await app.init({ background: '#1099bb', resizeTo: window });

	// Then adding the application's canvas to the DOM body.
	document.body.appendChild(app.canvas);

	// load the texture we need
	const texture = await Assets.load('assets/bag.png');

	// This creates a texture from a 'bunny.png' image
	const bunny = new Ball(texture);

	// Setup the position of the bunny
	bunny.x = app.renderer.width / 2;
	bunny.y = app.renderer.height / 2;

	// Rotate around the center
	bunny.anchor.x = 0.5;
	bunny.anchor.y = 0.5;

	// Add the bunny to the scene we are building
	app.stage.addChild(bunny);

	// Listen for frame updates
	app.ticker.add((dt) => {
		// each frame we spin the bunny around a bit
		bunny.rotation += 0.01;
	});
})();
