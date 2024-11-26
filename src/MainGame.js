export class MainGame {
    #gameCanvas;
    #colorChangeInterval = 1; // Change color every 1 second
    #colorTimer = 0;
    #colorIndex = 0;

    #lastTime = 0;

    constructor() {
        this.#gameCanvas = document.getElementById('gameCanvas');
    }

    /**
     * Handle physics update
     * @param {number} deltaTime in seconds
    */
    #update(deltaTime) {
        this.#colorTimer += deltaTime;

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

    /**
    * Handle animation and AI update
    */
    #render() {
        console.log('Render');
    }

    start(currentTime) {
        // Calculate delta time in seconds
        const deltaTime = (currentTime - this.#lastTime) / 1000;

        this.#update(deltaTime);
        this.#render();

        this.#lastTime = currentTime;
    }
}

