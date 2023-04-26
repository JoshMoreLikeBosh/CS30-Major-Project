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
let images;
let img;
let movement = 0;

function preload() {
  let images = [];

}

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

  createGround();
  createPlayer();
  playerControls();

}



function createGround() {
  push();
  fill("purple");
  rect(0, windowHeight-50, windowWidth, 50);
  pop();
}


function mousePressed() {
  push();
  yVel = 0;
  velocity = 0;
  mouseX===mouseX;
  pop();
}

function playerControls() {
  if (keyIsDown(68)) {
    movement += 15;
  }
  if (keyIsDown(65)) {
    movement -= 15;
  }
  if (keyIsDown(32)) {
    yVel = 300;
    if (keyIsDown(65)) {
      movement -= 30;
    }
    if (keyIsDown(68)) {
      movement += 30;
    }
  }
}

function createPlayer() {
  push();
  rectMode(CENTER);
  velocity += accel;
  yVel += velocity;
  rect(movement,yVel, mass,mass);

  if (yVel > height - mass/2) {
    velocity *= -0.3;
    yVel = height - mass/2;
  }
  pop();
}