import { initGameState, start } from "./game-loop.js";

function main() {
    initGameState();
    window.requestAnimationFrame(start);
}

main();
