const obstacles = []

export function addObstacle(obstacle) {
    obstacles.push(obstacle);
}

export function removeObstacle() {
    for (const obstacle of obstacles) {
        if (obstacle.x <= 0) {
            const idx = obstacles.indexOf(obstacle);
            obstacles.splice(idx, 1);
        }
    }
}


export function isCollide(dinoX, dinoY, dinoWidth, dinoHeight) {
    for (const obstacle of obstacles) {
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
