import { drawImage, loadImages } from "./util.js";

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

function spawnCactus(x, scale, variant) {
    /**
     * @type {Cactus}
     */
    const cactus = {
        variant: variant,
        x: x,
        width: cactusImages[variant].width * scale,
        height: cactusImages[variant].height * scale
    }

    cactus.y = 300 - cactus.height + 105;

    cacti.push(cactus);
}

function drawCactus() {
    for (const cactus of cacti) {
        drawImage(cactusImages[cactus.variant], cactus.x, cactus.y, cactus.width, cactus.height);
    }
}

export {
    spawnCactus,
    drawCactus
}