import { addObstacle } from "./obstacle.js";
import { drawImage, loadImages, getRandomBetweenCont, getRandomBetweenDisc } from "./util.js";

const cactusImages = await loadImages([
    'cactus/cactuslargedouble.png',
    'cactus/cactuslargesingle.png',
    'cactus/cactuslargetriple.png',
    'cactus/cactussmalldouble.png',
    'cactus/cactussmallsingle.png',
    'cactus/cactussmalltriple.png',
]);


/**
 * @typedef {Object} Cactus
 * @property {number} variant
 * @property {number} x
 * @property {number} y
 * @property {number} width
 * @property {number} height
 */

/**
 * @type {Cactus[]}
 */
const cacti = [];

let accumulator = 0;

function spawnCactus(scale, variant) {
    /**
     * @type {Cactus}
     */
    const cactus = {
        variant: variant,
        width: cactusImages[variant].width * scale,
        height: cactusImages[variant].height * scale
    }

    cactus.x = 800 + cactus.width;
    cactus.y = 300 - cactus.height + 105;

    cacti.push(cactus);
    addObstacle(cactus);
}

function updateCactus(deltaTime) {
    accumulator += deltaTime;
    const rangeSpawnTime = {
        min: 12,
        max: 28,
    }
    const randomRange = getRandomBetweenCont(rangeSpawnTime.min, rangeSpawnTime.max);

    if (accumulator >= randomRange) {
        const randomVariant = getRandomBetweenDisc(0, cactusImages.length - 1);
        spawnCactus(0.5, randomVariant);
        accumulator = 0;
    }

    for (const cactus of cacti) {
        cactus.x -= 200 * deltaTime;
        if (cactus.x + cactus.width <= 0) {
            const idx = cacti.indexOf(cactus);
            cacti.splice(idx, 1);
        }
    }
}

function drawCactus() {
    for (const cactus of cacti) {
        drawImage(cactusImages[cactus.variant], cactus.x, cactus.y, cactus.width, cactus.height);
    }
}

export {
    spawnCactus,
    drawCactus,
    updateCactus
}