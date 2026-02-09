p5.disableFriendlyErrors = true;

let canvas;

function setup() {
  pixelDensity(1);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('position', 'fixed');
  canvas.style('top', '0');
  canvas.style('left', '0');
  canvas.style('z-index','-1');
  frameRate(10);
  windowResized();
  background(255);
}

function draw() {
  noStroke();
  drawCircle01(100, 0, 3);
  drawCircle01(width/2-100, height/2+100, 5);
  drawCircle01(width/4*3, height+200, 6);
  drawCircle01(width/6*5, 0, 7);
  drawCircle01(width, 0, 8);
  drawCircle01(-10, height, 9);
  drawCircle02(0, 0, 3);
  drawCircle02(width/4*1, height/4*1, 4);
  drawCircle02(width, height/2, 6);
}

function drawCircle01(x, y, i) {
  fill(220, 243, 250, 100);
  circle(x, y, height/4*1 + 400 * noise(i + frameCount * 0.02));
  filter(BLUR, 8);
}

function drawCircle02(x, y, i) {
  fill(207, 247, 246, 70);
  circle(x, y, height/3*1.5 + 500 * noise(i + frameCount * 0.02));
  filter(BLUR, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
