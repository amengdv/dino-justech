let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;


function input() {
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
}

/**
 * 
 * @param {KeyboardEvent} event 
 */
function keyDownHandler(event) {
  if (event.code === "ArrowRight") {
    rightPressed = true;
  } else if (event.code === "ArrowLeft") {
    leftPressed = true;
  }
  if (event.code === "ArrowDown") {
    downPressed = true;
  } else if (event.code === "ArrowUp") {
    upPressed = true;
  }
}


/**
 * 
 * @param {KeyboardEvent} event 
 */
function keyUpHandler(event) {
  if (event.code === "ArrowRight") {
    rightPressed = false;
  } else if (event.code === "ArrowLeft") {
    leftPressed = false;
  }
  if (event.code === "ArrowDown") {
    downPressed = false;
  } else if (event.code === "ArrowUp") {
    upPressed = false;
  }
}

export {
    input,
    rightPressed,
    leftPressed,
    upPressed,
    downPressed,
}