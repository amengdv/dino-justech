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

function initBird(frameDuration) {
    birdAnim = createAnimation(birdImages.length, frameDuration);
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
}

function updateBird(deltaTime) {
    accumulator += deltaTime;
    const rangeSpawnTime = {
        min: 10,
        max: 20
    }
    const randomRange = getRandomBetweenCont(rangeSpawnTime.min, rangeSpawnTime.max);

    if (accumulator >= randomRange) {
        const randomY = getRandomBetweenDisc(220, 265);
        spawnBird(randomY, 0.5);
        accumulator = 0;
    }

    for (const bird of birds) {
        bird.x -= 200 * deltaTime;
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

