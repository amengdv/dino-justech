import { createAnimation, drawImage, loadImages } from "./util.js";

const dinoRun = await loadImages([
    'dino/run/dinorun1.png',
    'dino/run/dinorun2.png'
]);

let dinoAnimation;

let x = 0;
let y = 0;
let width = 0;
let height = 0;

function initDino(xNew, yNew, scale) {
    // Add onload handler to set dimensions when image loads
    width = dinoRun[0].width * scale;
    height = dinoRun[0].height * scale;
    x = xNew;
    y = yNew;

    dinoAnimation = createAnimation(dinoRun.length, 300);
}

function drawDino(currentTime) {
    const currFrame = dinoAnimation(currentTime);
    drawImage(dinoRun[currFrame], x, y, width, height);
}

export {
    initDino,
    drawDino
}
