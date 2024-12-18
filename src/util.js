/**
 * @param {string} path
 * @returns {Promise<HTMLImageElement>}
 */
export function loadImage(path) {
    const image = new Image();
    image.src = `../public/${path}`;

    return new Promise((resolve, reject) => {
        image.onload = () => {
            resolve(image);
        }
        image.onerror = reject;
    });
}

/**
 * @param {string[]} paths
 * @returns {Promise<HTMLImageElement[]>}
 */
export async function loadImages(paths) {
    const images = [];
    try {
        for (const path of paths) {
            const image = await loadImage(path);
            images.push(image);
        }
        return images;
    } catch (err) {
        console.log('Error loading images:', err);
        return [];
    }
}

/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

/**
 * @param {HTMLImageElement} image 
 */
export function drawImage(image, x, y, width, height) {
    ctx.drawImage(image, x, y, width, height);
}

export function clearCanvas(x, y, w, h) {
    ctx.clearRect(x, y, w, h);
}

/**
 * Creates an animation function that cycles through images as frames.
 *
 * @param {HTMLImageElement[]} images - Array of images to be used as animation frames.
 * @param {number} frameDuration - The duration (in milliseconds) for each frame to display.
 * @returns {(currentTime: number) => number} - A function that takes the current time (timestamp)
 *   and returns the index of the current frame to display.
 */
export function createAnimation(frameCount, frameDuration) {
    let lastTime = 0;
    let currentFrame = 0;
    return (currentTime) => {
        if (currentTime - lastTime >= frameDuration) {
            currentFrame = (currentFrame + 1) % frameCount;
            lastTime = currentTime;
        }
        return currentFrame;
    }
}

export function getRandomBetweenCont(min, max) {
    return Math.random() * (max - min) + min;
}

export function getRandomBetweenDisc(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function renderGameOver() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = 'rgb(200 0 0)';
    ctx.font = '40px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', 400, 300);
}
