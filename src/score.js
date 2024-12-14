const prefix = 'SCORE';

// Position Variable
let xPos;
let yPos;

// Config
let fontConf;
let score;

function initScore(x, y, font) {
    fontConf = font;
    xPos = x;
    yPos = y;
    score = 0;
}

function updateScore() {
    score += 1
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function drawScore(ctx) {
    ctx.font = fontConf;
    let scoreText = `${prefix}: ${score}`;
    ctx.fillText(scoreText, xPos, yPos);
}

export {
    initScore,
    updateScore,
    drawScore
}
