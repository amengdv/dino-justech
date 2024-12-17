import { drawDino, initDino } from "./dino.js";
import { clearCanvas } from "./util.js";

let lastTime = 0;

export function start(currentTime) {
    window.requestAnimationFrame(start);

    // 60 Frame Per Second = 1 / 60
    const deltaTime = (currentTime - lastTime) / 1000;

    update(deltaTime);
    render(currentTime);

    lastTime = currentTime;
}

export function initGameState() {
    initDino(20, 20, 0.5);
}

function update(deltaTime) {
}

function render(currentTime) {
    clearCanvas(0, 0, 800, 600);
    drawDino(currentTime);
}
