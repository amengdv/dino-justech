const { MainGame } = require("./MainGame");

const mainGame = new MainGame();

function gameLoop(currentTime) {
    mainGame.start(currentTime);
    requestAnimationFrame(gameLoop);
}

// Start the game loop
requestAnimationFrame(gameLoop);
