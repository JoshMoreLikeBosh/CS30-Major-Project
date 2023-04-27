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
let groundHeight;
let walls;
let sprite;

function preload() {
  //let images = [];
  img = loadImage("walkright.gif");
}

function setup() {
  new Canvas(windowWidth, windowHeight);
  noStroke();

  yVel = 0;
  velocity = 0;
  mass = 100;

  accel = mass * 0.1;

  groundHeight = 50;

  sprite = new Sprite();
  sprite.width = mass;
  sprite.height = mass;
  sprite.x = movement;
  sprite.y = yVel;
}


function draw() {
  background(50);
  //fill(255,0,0);

  createGround();
  //createPlayer();
  playerControls();
}



function createGround() {
  push();
  fill("purple");
  rect(0, windowHeight-50, windowWidth, groundHeight);
  pop();
}


// function mousePressed() {
//   push();
//   yVel = 0;
//   velocity = 0;
//   mouseX===mouseX;
//   pop();
// }

function playerControls() {
  if (keyIsDown(68)) {
    movement += 15;
  }
  if (keyIsDown(65)) {
    movement -= 15;
  }
  if (keyIsDown(32)) {
    yVel -= mass/2;
    if (keyIsDown(65)) {
      movement -= 17;
    }
    if (keyIsDown(68)) {
      movement += 17;
    }
  }
}






// function createPlayer() {
//   push();
//   rectMode(CENTER);
//   velocity += accel;
//   yVel += velocity;
//   push();
//   sprite = new Sprite();
//   sprite.width = mass;
//   sprite.height = mass;
//   sprite.x = movement;
//   sprite.y = yVel;
//   //texture(img);
//   //rect(movement,yVel, mass,mass);
//   pop();
//   if (yVel > height - mass/2) {
//     velocity *= -0.3;
//     yVel = height - mass/2;
//   }
//   pop();
// }
