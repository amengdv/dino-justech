import { addObstacle } from "./collision.js";
import { getRandomBetween, getRandomInt } from "./util.js";

// Image Variables with height offsets
const cactusData = [
    { src: '../resources/cactuslargedouble.png', width: 0, height: 0 },
    { src: '../resources/cactuslargesingle.png', width: 0, height: 0 },
    { src: '../resources/cactuslargetriple.png', width: 0, height: 0 },
    { src: '../resources/cactussmalldouble.png', width: 0, height: 0 },
    { src: '../resources/cactussmallsingle.png', width: 0, height: 0 },
    { src: '../resources/cactussmalltriple.png', width: 0, height: 0 },
];

let accumulator = 0;


/**
 *  @typedef {Object} Cactus
 * @property {HTMLImageElement} cactusImage
 * @property {number} posX
 * @property {number} posY
 * @property {number} width
 * @property {number} height
 */

/**
 * @type {Cactus[]}
 */
const cacti = [];

/**
 * @param {number} newX
 * @param {number} newY 
 * @param {number} variation 
 */
function initCactus(newX, variation) {
    /**
     * @type {Cactus}
     */
    let cactus = null;

    const image = new Image();
    image.src = cactusData[variation].src;
    image.onload = () => {
        const width = image.width * 0.5;
        const height = image.height * 0.5;
        cactusData[variation].width = width;
        cactusData[variation].height = height;

        cactus = {
            cactusImage: image,
            posX: newX,
            posY: (260 - height) + 105,
            width: width,
            height: height
        }

        cacti.push(cactus);
        addObstacle(cactus);
    }
}

function updateCactus(deltaTime) {
    accumulator += deltaTime;

    // in seconds
    const spawnTimeRange = {
        min: 5,
        max: 10
    }

    const randTimeFromRange = getRandomBetween(spawnTimeRange.min, spawnTimeRange.max);

    const randomVariation = getRandomInt(0, 6);

    if (accumulator >= randTimeFromRange) {
        initCactus(850, randomVariation);
        accumulator = 0;
    }

    for (let cactus of cacti) {
        cactus.posX -= 200 * deltaTime;
        if (cactus.posX < 0) {
            const idx = cacti.indexOf(cactus);
            cacti.splice(idx, 1);
        }
    }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function drawCactus(ctx) {
    for (const cactus of cacti) {
        ctx.drawImage(cactus.cactusImage, cactus.posX, cactus.posY, cactus.width, cactus.height);
    }
}

export {
    initCactus,
    updateCactus,
    drawCactus
};
