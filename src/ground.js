// Image Variable
const ground = new Image();


// Position Variable
let posX;
let posY;
let width;
let height;

function initGround() {
    ground.src = '../resources/ground.png';
    posX = 0;
    ground.onload = () => {
        width = ground.width;
        height = ground.height;
        posY = 260;
    };
}

function updateGround(deltaTime) {
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function drawGround(ctx, currentTime) {
    ctx.drawImage(ground, posX, posY, width, height);
}

export {
    initGround,
    drawGround,
    updateGround
}
