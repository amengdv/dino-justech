let lastTime;

function main() {
    lastTime = 0;
    window.requestAnimationFrame(start);
}

function start(currentTime) {
    window.requestAnimationFrame(start);

    const deltaInSecond = (currentTime - lastTime) / 1000;

    update(deltaInSecond);
    render();

    lastTime = currentTime;
}

function update(deltaTime) {
    console.log("Second per frame:", deltaTime);
}

function render() {
}

main();
