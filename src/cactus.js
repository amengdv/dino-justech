import { getRandomInt } from "./util.js";

// Image Variables with height offsets
const images = [];
const cactusData = [
    { src: '../resources/cactuslargedouble.png' },
    { src: '../resources/cactuslargesingle.png' },
    { src: '../resources/cactuslargetriple.png' },
    { src: '../resources/cactussmalldouble.png' },
    { src: '../resources/cactussmallsingle.png' },
    { src: '../resources/cactussmalltriple.png' },
];

function initCactus() {
    const usedPositions = []; // Keep track of used x positions

    cactusData.forEach(({ src }) => {
        const image = new Image();
        image.src = src;
        image.onload = () => {
            // Calculate width and height with scaling (50% in this case)
            const width = image.width * 0.5;
            const height = image.height * 0.5;

            // Generate a unique xRand position
            let xRand;
            do {
                xRand = getRandomInt(0, 800);
            } while (usedPositions.some(pos => Math.abs(pos - xRand) < width)); // Avoid overlap

            usedPositions.push(xRand); // Store the xRand to prevent overlap

            // Calculate y position based on height
            const yRand = (260 - height) + 105;

            // Store the image and calculated dimensions/positions
            images.push({ image, xRand, yRand, width, height });
        };
    });
}

function updateCactus() {
    // Future functionality can go here
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function drawCactus(ctx) {
    for (const { image, xRand, yRand, width, height } of images) {
        ctx.drawImage(image, xRand, yRand, width, height);
    }
}

export {
    initCactus,
    updateCactus,
    drawCactus
};
