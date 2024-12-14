// Obstacles array to store all obstacles in the game
const obstacles = [];

function createObstacle(x, y, width, height) {
    return {
        x: x,
        y: y,
        width: width,
        height: height
    };
}

function addObstacle(x, y, width, height) {
    const obstacle = createObstacle(x, y, width, height);
    obstacles.push(obstacle);
}

function checkCollision(dinoX, dinoY, dinoWidth, dinoHeight) {
    // Loop through all obstacles
    for (let obstacle of obstacles) {
        // Simple rectangular collision detection
        if (
            dinoX < obstacle.x + obstacle.width &&
            dinoX + dinoWidth > obstacle.x &&
            dinoY < obstacle.y + obstacle.height &&
            dinoY + dinoHeight > obstacle.y
        ) {
            // Collision detected
            return true;
        }
    }
    // No collision
    return false;
}

function updateObstacles(speed) {
    // Move obstacles to the left
    for (let i = obstacles.length - 1; i >= 0; i--) {
        obstacles[i].x -= speed;

        // Remove obstacles that are off-screen
        if (obstacles[i].x + obstacles[i].width < 0) {
            obstacles.splice(i, 1);
        }
    }
}

/**
 * Draw obstacles (for debugging)
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
 */
function drawObstacles(ctx) {
    ctx.fillStyle = 'rgba(255, 0, 0, 0.3)'; // Semi-transparent red
    for (let obstacle of obstacles) {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }
}

// Export functions
export {
    addObstacle,
    checkCollision,
    updateObstacles,
    drawObstacles
};
