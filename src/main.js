class MainGame {
    #gameCanvas;
    #colorIndex = 0;

    #lastTime = 0;
    #fixedDeltaTime = 1 / 60; // Time step in seconds
    #colorChangeInterval = 1; // Change color every 1 second
    #colorTimer = 0;

    constructor() {
        this.#gameCanvas = document.getElementById('gameCanvas');
        this.#fixedDeltaTime *= 1000; // Convert to milliseconds
    }

    #input() {
        console.log('Input');
    }

    #update(deltaTime) {
        // Convert deltaTime to seconds (1 / 60 second)
        const deltaSeconds = deltaTime / 1000;

        this.#colorTimer += deltaSeconds;

        // Change color every colorChangeInterval seconds
        if (this.#colorTimer >= this.#colorChangeInterval) {
            this.#colorIndex = (this.#colorIndex + 1) % 3;
            this.#colorTimer = 0;

            // Update canvas color
            switch (this.#colorIndex) {
                case 0:
                    this.#gameCanvas.style.backgroundColor = 'red';
                    break;
                case 1:
                    this.#gameCanvas.style.backgroundColor = 'green';
                    break;
                case 2:
                    this.#gameCanvas.style.backgroundColor = 'blue';
                    break;
            }
        }

        console.log('Updating...');
    }

    #render() {
        console.log('Render');
    }

    start(currentTime) {
        // Calculate delta time in milliseconds
        const deltaTime = currentTime - this.#lastTime;

        this.#input();
        this.#update(deltaTime);
        this.#render();

        this.#lastTime = currentTime;
    }
}

const mainGame = new MainGame();

function gameLoop(currentTime) {
    mainGame.start(currentTime);
    requestAnimationFrame(gameLoop);
}

// Start the game loop
requestAnimationFrame(gameLoop);
