// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cam;
let images;
let startingCamPosX = 200;
let startingCamPosY = -250;
let startingCamPosZ = 2000;
let rover;

function preload() {
  images = [];
  images.push(loadImage("grid.png"));
  images.push(loadImage("gun1.png"));
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //cam = createCamera();
  angleMode(DEGREES);
  
  //cam.setPosition(startingCamPosX, startingCamPosY, startingCamPosZ);
  rover = createRoverCam();
  rover.usePointerLock();    // optional; default is keyboard control only
  rover.setState({           // optional
    position: [-400,-200,-200],
    rotation: [0.4,0.3,0],
    sensitivity: 0.001,
    speed: 0.5
    fov: 1
  });
  }


function draw() {
  background("black");
  createGround();
  CameraControls();
}

function createGround() {
  normalMaterial();
  push();
  texture(images[0]);
  rotateX(90);
  plane(500);
  pop();
}

function CameraControls() {




  push();
  texture(images[1]);
  plane(windowWidth, windowHeight);
  pop();
}


// if (keyIsDown(39)) {
//   cam.pan(-3);
// }
// // right arrow pans cam right
// if (keyIsDown(37)) {
//   cam.pan(3);
// }
// //down arrow tilts cam down
// if (keyIsDown(38)) {
//   cam.tilt(-3);
// }
// //  up arrow tilts cam up
// if (keyIsDown(40)) {
//   cam.tilt(3);
// }
// if (keyIsDown(81)) {
//   cam.move(0, 0, 40);
// }
// //e zoom out
// if (keyIsDown(69)) {
//   cam.move(0, 0, -40);
// }
// //a moves cam left
// if (keyIsDown(65)) {
//   cam.move(-15, 0, 0);
// }
// //d moves cam right
// if (keyIsDown(68)) {
//   cam.move(15, 0, 0);
// }
// // w moves cam up
// if (keyIsDown(87)) {
//   cam.move(0, -15, 0);
// }
// // s moves can down
// if (keyIsDown(83)) {
//   cam.move(0, 15, 0);
// }