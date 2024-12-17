import { drawImage, loadImages } from "./util.js";

const dinoRun = await loadImages([
    'dino/run/dinorun1.png',
    'dino/run/dinorun2.png'
]);

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
}

function drawDino(currentTime) {
    drawImage(dinoRun[0], x, y, width, height);
}

export {
    initDino,
    drawDino
}
