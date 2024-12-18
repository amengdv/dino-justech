import { drawImage, loadImage } from "./util.js";

const ground1 = await loadImage('ground/ground.png');
const ground2 = await loadImage('ground/ground.png');

let x = 0;
let y = 0;
let width = 0;
let height = 0;

let x1 = 0;
let y1 = 0;

let speed = 0;

function initGround(xNew, yNew, scale, speedNew) {
    scale = scale | 1;
    width = ground1.width * scale;
    height = ground1.height * scale;
    speed = speedNew;
    x = xNew;
    y = yNew;

    x1 = x + width;
    y1 = yNew;
}

function updateGround(deltaTime) {
    x -= speed * deltaTime;
    x1 -= speed * deltaTime;

    if (x + width <= 0) {
        x = x1 + width;
    } else if (x1 + width <= 0) {
        x1 = x + width;
    }
}

function drawGround() {
    drawImage(ground1, x, y, width, height);
    drawImage(ground2, x1, y1, width, height);
}

export {
    initGround,
    drawGround,
    updateGround
}
