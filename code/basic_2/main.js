// TODO
// - using and updating state
// - interactivity (mouse click, key presses)
// - conditionals

const STATE = {
  score: 0
}

// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

// runs every frame
function draw() {
  background(0,0,255);

  // change fill color depending on score
  if (STATE.score < 50) {
    fill(255, 204, 0);
  } else {
    fill(37, 204, 107);
  }

  // change circle radius depending on score
  [centerX, centerY] = [width/2, height/2];
  ellipse(centerX, centerY, 80 + STATE.score);

  // show score
  textSize(32);
  text(`your score is ${STATE.score}`, 0, 32);
}

function mouseClicked() {
  STATE.score += 1;
}

function keyPressed() {
  // lookup keycodes here: http://keycode.info/
  if (keyCode === 65) { // a
    STATE.score += 20;
  } else if (keyCode === 87) { // w
    STATE.score -= 20;
  }
}

// resize canvas when the browser window resizes
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
