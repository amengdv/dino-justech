import { drawBird, initBird, updateBird } from "./bird.js";
import { drawCactus, updateCactus } from "./cactus.js";
import { drawDino, initDino, updateDino } from "./dino.js";
import { drawGround, initGround, updateGround } from "./ground.js";
import { removeObstacle } from "./obstacle.js";
import { drawScore, getScore, initScore, updateScore } from "./score.js";
import { clearCanvas, renderGameOver } from "./util.js";

let lastTime = 0;
let id;
let gameState = 'running';

export function start(currentTime) {
	if (gameState === 'running') {

		id = window.requestAnimationFrame(start);

		// 60 Frame Per Second = 1 / 60
		const deltaTime = (currentTime - lastTime) / 1000;

		update(2 * deltaTime);
		render(2 * currentTime);

		lastTime = currentTime;
	} else if (gameState === 'gameOver') {
		renderGameOver(getScore());
		window.cancelAnimationFrame(id);
		return;
	}
}

export function initGameState() {
	gameState = 'running';
	lastTime = 0;
	initScore();
	initGround(0, 300, 0.5, 200);
	initDino(20, 336, 0.5);
	initBird(300, 230, 265, 0.4);
}

function update(deltaTime) {
	updateScore();
	updateDino(deltaTime);
	updateGround(deltaTime);
	updateBird(deltaTime);
	updateCactus(deltaTime);
	removeObstacle()
}

function render(currentTime) {
	clearCanvas(0, 0, 800, 600);
	drawScore();
	drawCactus();
	drawGround();
	drawDino(currentTime);
	drawBird(currentTime);
}

export function gameOver() {
	gameState = 'gameOver';
}
