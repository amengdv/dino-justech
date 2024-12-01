import { drawDino, initDino, updateDino } from "./dino.js";

/**
 * @type {CanvasRenderingContext2D} ctx
 */
const ctx = document.getElementById('gameCanvas').getContext('2d');

// Variable
let lastTime;

function main() {
    lastTime = 0;
    initDino();
    window.requestAnimationFrame(start);
}

function start(currentTime) {
    window.requestAnimationFrame(start);

    console.log(currentTime);
    const deltaInSecond = (currentTime - lastTime) / 1000;

    update(deltaInSecond);
    render(currentTime);

    lastTime = currentTime;
}

function update(deltaTime) {
    updateDino(deltaTime);
}

function render(currentTime) {
    ctx.clearRect(0, 0, 800, 600);
    drawDino(ctx, currentTime);
}

main();
