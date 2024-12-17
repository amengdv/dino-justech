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
