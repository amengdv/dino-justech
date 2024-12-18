import { downPressed, input, upPressed } from "./input.js";
import { isCollide } from "./obstacle.js";
import { createAnimation, drawImage, loadImages } from "./util.js";

const dinoRun = await loadImages([
    'dino/run/dinorun1.png',
    'dino/run/dinorun2.png'
]);

const dinoDuck = await loadImages([
    'dino/duck/dinoduck1.png',
    'dino/duck/dinoduck2.png',
])

const actions = {
    run: dinoRun,
    duck: dinoDuck
}

let action = 'run';
let dinoAnimation;

let x = 0;
let y = 0;
let yVel = 0;
let gravity = 350;
let state = 'running';
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

function jump() {
    state = 'jumping';
    yVel = -280;
}

function updateDino(deltaTime) {
    input();
    if (upPressed && state !== 'jumping') {
        jump();
    } else if (downPressed) {
        action = 'duck';
    } else {
        action = 'run';
    }

    if (y >= 336) {
        state = 'running';
    }

    y += yVel * deltaTime;
    y = Math.min(y, 336);
    yVel += gravity * deltaTime;

    const collided = isCollide(x, y, width, height);
    if (collided) {

    }
}

function drawDino(currentTime) {
    const currFrame = dinoAnimation(currentTime);
    drawImage(actions[action][currFrame], x, y, width, height);
}

export {
    initDino,
    updateDino,
    drawDino
}
