let lastTime = 0;

export function start(currentTime) {
    window.requestAnimationFrame(start);

    // 60 Frame Per Second = 1 / 60
    const deltaTime = (currentTime - lastTime) / 1000;

    update(deltaTime);
    render();

    lastTime = currentTime;
}

function update(deltaTime) {
    console.log('Updating, delta time:', deltaTime);
}

function render() {
    console.log('Rendering...');
}
