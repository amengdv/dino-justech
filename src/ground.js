// Image Variable
const ground = new Image();

// Position Variables
let posX1;
let posX2;
let posY;
let width;
let height;

function initGround() {
    ground.src = '../resources/ground.png';
    posX1 = 0;
    posX2 = null; // Will be set to width in onload

    ground.onload = () => {
        width = ground.width;
        height = ground.height;
        posY = 260;
        // Set the second ground image's initial position to right after the first
        posX2 = width;
    };
}

function updateGround(deltaTime) {
    if (posX2 === null) return; // Not loaded yet

    const speed = 200; // Pixels per second (adjust for desired speed)
    const movement = speed * deltaTime;

    // Move both ground images
    posX1 -= movement;
    posX2 -= movement;

    // Reset positions when they move completely off screen
    if (posX1 <= -width) {
        posX1 = posX2 + width;
    }
    if (posX2 <= -width) {
        posX2 = posX1 + width;
    }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function drawGround(ctx) {
    if (posX2 === null) return; // Not loaded yet

    // Draw two ground images side by side
    ctx.drawImage(ground, posX1, posY, width, height);
    ctx.drawImage(ground, posX2, posY, width, height);
}

export {
    initGround,
    drawGround,
    updateGround
}
