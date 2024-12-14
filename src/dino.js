// Image Variable
const images = [];
const dino1 = new Image();
const dino2 = new Image();

// Animation Variable
const frameDuration = 100;
let currentFrame = 0;
let lastFrameTime = 0;

// Position Variable
let posX;
let posY;
let width;
let height;

let velocityY = 0;
let isGrounded = false;
const GROUND_LEVEL = 297;
const JUMP_STRENGTH = -400;
const GRAVITY = 600;

let isJumping = false;

// Key Variable
let upPressed = false;
let downPressed = false;

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
        posY = 297;
    }
}

function jump() {
    if (isGrounded) {
        velocityY = JUMP_STRENGTH;
        isGrounded = false;
        isJumping = true;
    }
}

function updateDino(deltaTime) {
    // Input
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    if (upPressed) {
        jump();
    }

    velocityY += GRAVITY * deltaTime;

    posY += velocityY * deltaTime;
    if (posY >= GROUND_LEVEL) {
        posY = GROUND_LEVEL;
        velocityY = 0;
        isGrounded = true;
        isJumping = false;
    }
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

function keyDownHandler(event) {
    if (event.code === "ArrowDown") {
        downPressed = true;
    } else if (event.code === "ArrowUp") {
        upPressed = true;
    }
}

function keyUpHandler(event) {
    if (event.code === "ArrowDown") {
        downPressed = false;
    } else if (event.code === "ArrowUp") {
        upPressed = false;
    }
}

export {
    initDino,
    drawDino,
    updateDino
}
