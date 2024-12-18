import { drawBird, initBird, updateBird } from "./bird.js";
import { drawCactus, updateCactus } from "./cactus.js";
import { drawDino, initDino, updateDino } from "./dino.js";
import { drawGround, initGround, updateGround } from "./ground.js";
import { removeObstacle } from "./obstacle.js";
import { clearCanvas } from "./util.js";

let lastTime = 0;
let gameState = 'running';

export function gameOver() {
    gameState = 'gameOver';
    console.log(gameState);
}

export function start(currentTime) {
    const id = window.requestAnimationFrame(start);

    // 60 Frame Per Second = 1 / 60
    const deltaTime = (currentTime - lastTime) / 1000;

    update(2 * deltaTime);
    render(2 * currentTime);

    lastTime = currentTime;

    if (gameState === 'gameOver') {
        window.cancelAnimationFrame(id);
    }
}

export function initGameState() {
    initGround(0, 300, 0.5, 200);
    initDino(20, 336, 0.5);
    initBird(300);
}

function update(deltaTime) {
    updateDino(deltaTime);
    updateGround(deltaTime);
    updateBird(deltaTime);
    updateCactus(deltaTime);
    removeObstacle();
}

function render(currentTime) {
    clearCanvas(0, 0, 800, 600);
    drawCactus();
    drawGround();
    drawDino(currentTime);
    drawBird(currentTime);
}
