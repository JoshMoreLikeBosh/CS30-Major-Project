// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let yVel;
let accel;
let velocity;
let mass;
let groundTop;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  yVel = 0;
  velocity = 0;
  mass = 100;

  accel = mass * 0.1;
}
function draw() {
  background(50);
  fill(255,0,0);

  // createGround();
  createPlayer();

}

function createPlayer() {
  push();
  rectMode(CENTER);
  velocity += accel;
  yVel += velocity;
  rect(mouseX,yVel, mass,mass);

  if (yVel > height - mass/2) {
    velocity *= -0.3;
    yVel = height - mass/2;
  }
  pop();
}

function createGround() {
  push();
  fill("purple");
  rect(0, windowHeight-50, windowWidth, 50);
  pop();
}

function gravity() {

}

function mousePressed() {
  yVel = 0;
  velocity = 0;
}