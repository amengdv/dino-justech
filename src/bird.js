import { addObstacle } from "./collision.js";
import { getRandomBetween, getRandomInt } from "./util.js";

// Animation Variable
const frameDuration = 100;
let currentFrame = 0;
let lastFrameTime = 0;

let accumulator = 0;

/**
 * @typedef {Object} Bird
 * @property {HTMLImageElement[]} birdImages[]
 * @property {number} posX
 * @property {number} posY
 * @property {number} width
 * @property {number} height
 */

/**
 * @type {Bird[]}
 */
const birds = [];

let width = 0;
let height = 0;

/**
 * @param {number} newX 
 * @param {number} newY 
 */
function initBird(newX, newY) {
    const bird1 = new Image();
    const bird2 = new Image();
    bird1.src = '../resources/bird1.png';
    bird2.src = '../resources/bird2.png';
    bird1.onload = () => {
        const images = [
            bird1,
            bird2
        ];
        width = bird1.width * 0.5;
        height = bird1.height * 0.5;

        const bird = {
            birdImages: images,
            posX: newX,
            posY: newY,
            width: width,
            height: height
        }

        birds.push(bird);
        addObstacle(bird);
    }
}

function updateBird(deltaTime) {

    accumulator += deltaTime;

    // in seconds
    const spawnTimeRange = {
        min: 10,
        max: 20
    }

    const randTimeFromRange = getRandomBetween(spawnTimeRange.min, spawnTimeRange.max);

    const randomYPos = getRandomInt(200, 230);

    if (accumulator >= randTimeFromRange) {
        initBird(800 + width, randomYPos);
        accumulator = 0;
    }

    for (let bird of birds) {
        bird.posX -= 300 * deltaTime;
        if (bird.posX < 0) {
            const idx = birds.indexOf(bird);
            birds.splice(idx, 1);
        }
    }

}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function drawBird(ctx, currentTime) {
    if (currentTime - lastFrameTime > frameDuration) {
        currentFrame = (currentFrame + 1) % 2;
        lastFrameTime = currentTime;
    }

    for (const bird of birds) {
        ctx.drawImage(bird.birdImages[currentFrame], bird.posX, bird.posY, bird.width, bird.height);
    }
}

export {
    initBird,
    updateBird,
    drawBird
}
