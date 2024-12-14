// Image Variabl
const images = [];
const bird1 = new Image();
const bird2 = new Image();

// Animation Variable
const frameDuration = 100;
let currentFrame = 0;
let lastFrameTime = 0;

// Position Variable
let posX;
let posY;
let width;
let height;

function initBird() {
    bird1.src = '../resources/bird1.png';
    bird2.src = '../resources/bird2.png';
    bird1.onload = () => {
        images[0] = bird1;
        images[1] = bird2;

        const scaleFact = 0.5;
        width = images[0].width * scaleFact;
        height = images[0].height * scaleFact;
        posX = 400 - width;
        posY = 100;
    }
}

function updateBird() {
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function drawBird(ctx, currentTime) {
    if (currentTime - lastFrameTime > frameDuration) {
        currentFrame = (currentFrame + 1) % images.length;
        lastFrameTime = currentTime;
    }

    ctx.drawImage(images[currentFrame], posX, posY, width, height);
}

export {
    initBird,
    updateBird,
    drawBird
}
