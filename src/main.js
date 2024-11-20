class Main {
    constructor() {
    }

    #update() {
        console.log('Updating...');
    }

    #render() {
        console.log('Rendering...');
    }

    start() {
        console.log('Starting...');
        this.#update();
        this.#render();
    }
}

const main = new Main();

main.start();
