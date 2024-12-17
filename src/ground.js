import { drawImage, loadImage } from "./util.js";

const ground = await loadImage('ground/ground.png');

let x = 0;
let y = 0;
let width = 0;
let height = 0;

function initGround(xNew, yNew, scale) {
    scale = scale | 1;
    width = ground.width * scale;
    height = ground.height * scale;
    x = xNew;
    y = yNew;
}

function drawGround() {
    drawImage(ground, x, y, width, height);
}

export {
    initGround,
    drawGround
}
