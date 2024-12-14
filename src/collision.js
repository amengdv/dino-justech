/**
 * @typedef {Object} Obstacles
 * @property {import("./bird").Bird | import("./cactus").Cactus} object
 */

/**
 * @type {Obstacles[]}
 */
const obstacles = [];


/**
 * @param {import("./bird").Bird | import("./cactus").Cactus} obstacle 
*/
function addObstacle(obstacle) {
    obstacles.push(obstacle);
}


function checkCollision(dinoX, dinoY, dinoWidth, dinoHeight) {
    // Loop through all obstacles
    for (let obstacle of obstacles) {
        // Simple rectangular collision detection
        if (
            dinoX < obstacle.posX + obstacle.width &&
            dinoX + dinoWidth > obstacle.posX &&
            dinoY < obstacle.posY + obstacle.height &&
            dinoY + dinoHeight > obstacle.posY
        ) {
            // Collision detected
            return true;
        }
    }
    // No collision
    return false;
}

// Export functions
export {
    addObstacle,
    checkCollision,
};
