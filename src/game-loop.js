import { drawDino, initDino } from "./dino.js";

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
    initDino(10, 10, 0.5);
}

function update(deltaTime) {
}

function render(currentTime) {
    drawDino(currentTime);
}
