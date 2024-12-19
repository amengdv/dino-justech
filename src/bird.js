import { addObstacle } from "./obstacle.js";
import { createAnimation, drawImage, getRandomBetweenCont, getRandomBetweenDisc, loadImages } from "./util.js";

const birdImages = await loadImages([
    'bird/bird1.png',
    'bird/bird2.png'
]);

/**
 * @typedef {Object} Bird
 * @property {number} x
 * @property {number} y
 * @property {number} width
 * @property {number} height
 */

/**
 * @type {Bird[]}
 */
const birds = [];

let birdAnim;
let accumulator = 0;

let minHeight;
let maxHeight;
let scale;

const rangeSpawnTime = {
    min: 10,
    max: 30
}
let randomRange;

function initBird(frameDuration, minHeightNew, maxHeightNew, scaleNew) {
    randomRange = getRandomBetweenCont(rangeSpawnTime.min, rangeSpawnTime.max);
    birdAnim = createAnimation(birdImages.length, frameDuration);
    minHeight = minHeightNew;
    maxHeight = maxHeightNew;
    scale = scaleNew;
}

function spawnBird(y, scale) {
    /**
     * @type {Bird}
     */
    const bird = {
        y: y,
        width: birdImages[0].width * scale,
        height: birdImages[0].height * scale
    }

    bird.x = bird.width + 800;

    birds.push(bird);
    addObstacle(bird);
}

function updateBird(deltaTime) {
    accumulator += deltaTime;

    if (accumulator >= randomRange) {
        console.log(randomRange);
        randomRange = getRandomBetweenCont(rangeSpawnTime.min, rangeSpawnTime.max);
        const randomY = getRandomBetweenDisc(minHeight, maxHeight);
        spawnBird(randomY, scale);
        accumulator = 0;
    }

    for (const bird of birds) {
        bird.x -= 250 * deltaTime;
        if (bird.x + bird.width <= 0) {
            const idx = birds.indexOf(bird);
            birds.splice(idx, 1);
        }
    }
}

function drawBird(currentTime) {
    const currFrame = birdAnim(currentTime);
    for (const bird of birds) {
        drawImage(birdImages[currFrame], bird.x, bird.y, bird.width, bird.height);
    }
}

export {
    spawnBird,
    drawBird,
    updateBird,
    initBird
}

