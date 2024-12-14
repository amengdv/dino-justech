import { drawBird, updateBird } from "./bird.js";
import { drawCactus, updateCactus } from "./cactus.js";
import { drawDino, initDino, updateDino } from "./dino.js";
import { drawGround, initGround, updateGround } from "./ground.js";
import { drawScore, initScore, updateScore } from "./score.js";

/**
 * @type {CanvasRenderingContext2D} ctx
 */
const ctx = document.getElementById('gameCanvas').getContext('2d');

// Variables
let lastTime;
let gameState = 'running';
let animationFrameId;

function main() {
    lastTime = 0;
    gameState = 'running';
    initGround();
    initDino();
    initScore(400, 20, '20px serif');
    animationFrameId = window.requestAnimationFrame(start);
}

function start(currentTime) {
    if (gameState === 'running') {
        animationFrameId = window.requestAnimationFrame(start);

        const deltaInSecond = (currentTime - lastTime) / 1000;

        update(deltaInSecond);
        render(currentTime);

        lastTime = currentTime;
    } else if (gameState === 'gameOver') {
        renderGameOver();
    }
}

function update(deltaTime) {
    updateDino(deltaTime);
    updateGround(deltaTime);
    updateBird(deltaTime);
    updateCactus(deltaTime);
    updateScore();
}

function render(currentTime) {
    ctx.clearRect(0, 0, 800, 600);
    drawScore(ctx);
    drawCactus(ctx);
    drawGround(ctx);
    drawDino(ctx, currentTime);
    drawBird(ctx, currentTime);
}

function renderGameOver() {
    ctx.fillStyle = 'black';
    ctx.font = '40px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', 400, 300);

    // Optional: Add restart instructions
    ctx.font = '20px serif';
    ctx.fillText('Press SPACE to Restart', 400, 350);
}

function restartGame() {
    gameState = 'running';
    lastTime = 0;

    // Reinitialize game components
    initGround();
    initDino();
    initScore(400, 20, '20px serif');

    // Restart the animation loop
    animationFrameId = window.requestAnimationFrame(start);
}

document.addEventListener('keydown', (event) => {
    if (gameState === 'gameOver' && event.code === 'Space') {
        restartGame();
    }
});

main();

// Export gameState for use in other modules
export {
    gameState,
    animationFrameId
};
