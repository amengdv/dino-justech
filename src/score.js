import { drawText } from "./util.js";

let score;

function initScore() {
    score = 0;
}

function updateScore() {
    score += 1;
}

function drawScore() {
    drawText(`Score: ${score}`, 20, { x: 600, y: 30 }, 'serif');
}

function getScore() {
    return score;
}

export {
    initScore,
    updateScore,
    drawScore,
    getScore,
}
