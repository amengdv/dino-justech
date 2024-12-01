const images = [];
const dino1 = new Image();
const dino2 = new Image();
const frameDuration = 100;

let currentFrame = 0;
let lastFrameTime = 0;
let posX;
let posY;
let width;
let height;

function initDino() {
    dino1.src = '../resources/dinorun1.png';
    dino2.src = '../resources/dinorun2.png';
    dino1.onload = () => {
        images[0] = dino1;
        images[1] = dino2;
        const scaleFact = 0.5;
        width = images[0].width * scaleFact;
        height = images[0].height * scaleFact;
        posX = 400 - width;
        posY = 300;
    }
}

function updateDino(deltaTime) {
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function drawDino(ctx, currentTime) {

    if (currentTime - lastFrameTime > frameDuration) {
        currentFrame = (currentFrame + 1) % images.length;
        lastFrameTime = currentTime;
    }

    ctx.drawImage(images[currentFrame], posX, posY, width, height);
}

export {
    initDino,
    drawDino,
    updateDino
}
