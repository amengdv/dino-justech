import { checkCollision } from "./collision.js";
import { gameState } from "./main.js";

// Image Variable
const imagesRun = [];
const dino1 = new Image();
const dino2 = new Image();

const imagesDuck = [];
const dinoDuck1 = new Image();
const dinoDuck2 = new Image();

const images = {
    run: imagesRun,
    duck: imagesDuck
};

// Position Variable
let posX = 400;
let posY = 297;
let width = 0;
let height = 0;

// Animation Variable
const frameDuration = 100;
let currentFrame = 0;
let lastFrameTime = 0;
let action = 'run';

let velocityY = 0;
let isGrounded = false;
const GROUND_LEVEL = 297;
const JUMP_STRENGTH = -400;
const GRAVITY = 600;

let isJumping = false;

// Key Variable
let upPressed = false;
let downPressed = false;

// Flag to track if images are loaded
let imagesLoaded = false;

/**
 * Initialize dino and load images
 * @returns {Promise<void>}
 */
function initDino() {
    return new Promise((resolve) => {
        dino1.src = '../resources/dinorun1.png';
        dino2.src = '../resources/dinorun2.png';
        dinoDuck1.src = '../resources/dinoduck1.png';
        dinoDuck2.src = '../resources/dinoduck2.png';

        // Wait for the first image to load
        dino1.onload = () => {
            imagesRun[0] = dino1;
            imagesRun[1] = dino2;

            imagesDuck[0] = dinoDuck1;
            imagesDuck[1] = dinoDuck2;

            const scaleFact = 0.5;
            width = imagesRun[0].width * scaleFact;
            height = imagesRun[0].height * scaleFact;
            posX = 400 - width;
            posY = 297;

            imagesLoaded = true;
            resolve();
        };

        // Handle potential image loading errors
        dino1.onerror = () => {
            console.error('Failed to load dino run image');
            resolve();
        };
    });
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
    if (downPressed) {
        action = 'duck';
    } else {
        action = 'run';
    }

    velocityY += GRAVITY * deltaTime;

    posY += velocityY * deltaTime;
    if (posY >= GROUND_LEVEL) {
        posY = GROUND_LEVEL;
        velocityY = 0;
        isGrounded = true;
        isJumping = false;
    }

    const touch = checkCollision(posX, posY, width, height);
    if (touch) {
        gameState = 'gameOver';
    }
}

/**
 * Draw dino on canvas
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} currentTime 
 */
function drawDino(ctx, currentTime) {
    // Check if images are loaded and not undefined
    if (!imagesLoaded || !images[action] || images[action].length === 0) {
        return;
    }

    // Update animation frame
    if (currentTime - lastFrameTime > frameDuration) {
        currentFrame = (currentFrame + 1) % images[action].length;
        lastFrameTime = currentTime;
    }

    // Safely draw image
    const currentImage = images[action][currentFrame];
    if (currentImage) {
        ctx.drawImage(currentImage, posX, posY, width, height);
    }
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
