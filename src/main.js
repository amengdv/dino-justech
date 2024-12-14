import { drawBird, initBird } from "./bird.js";
import { drawCactus, initCactus } from "./cactus.js";
import { drawDino, initDino, updateDino } from "./dino.js";
import { drawGround, initGround, updateGround } from "./ground.js";
import { drawScore, initScore } from "./score.js";

/**
 * @type {CanvasRenderingContext2D} ctx
 */
const ctx = document.getElementById('gameCanvas').getContext('2d');

// Variable
let lastTime;

function main() {
    lastTime = 0;
    initGround();
    initDino();
    initScore(700, 20, '20px serif');
    initBird();
    initCactus();
    window.requestAnimationFrame(start);
}

function start(currentTime) {
    window.requestAnimationFrame(start);

    //console.log(currentTime);
    const deltaInSecond = (currentTime - lastTime) / 1000;

    update(deltaInSecond);
    render(currentTime);

    lastTime = currentTime;
}

function update(deltaTime) {
    updateDino(deltaTime);
    updateGround(deltaTime);
}

function render(currentTime) {
    ctx.clearRect(0, 0, 800, 600);
    drawScore(ctx);
    //drawCactus(ctx);
    drawGround(ctx);
    drawDino(ctx, currentTime);
    // drawBird(ctx, currentTime);
}

main();
