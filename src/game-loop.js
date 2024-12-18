import { drawBird, initBird, spawnBird, updateBird } from "./bird.js";
import { drawCactus, spawnCactus } from "./cactus.js";
import { drawDino, initDino, updateDino } from "./dino.js";
import { drawGround, initGround, updateGround } from "./ground.js";
import { clearCanvas } from "./util.js";

let lastTime = 0;

export function start(currentTime) {
    window.requestAnimationFrame(start);

    // 60 Frame Per Second = 1 / 60
    const deltaTime = (currentTime - lastTime) / 1000;

    update(2 * deltaTime);
    render(2 * currentTime);

    lastTime = currentTime;
}

export function initGameState() {
    initGround(0, 300, 0.5, 200);
    initDino(20, 336, 0.5);
    initBird(300);
    spawnCactus(200, 0.5, 1);
}

function update(deltaTime) {
    updateDino(deltaTime);
    updateGround(deltaTime);
    updateBird(deltaTime);
}

function render(currentTime) {
    clearCanvas(0, 0, 800, 600);
    drawCactus();
    drawGround();
    drawDino(currentTime);
    drawBird(currentTime);
}
