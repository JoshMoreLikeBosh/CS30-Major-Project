// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let player, floor, floor2, floor3, floor4, boxy;
let floorHeight = 0;
let jumpValue = -8;

function setup() {
  new Canvas(windowWidth, windowHeight);
  world.gravity.y = 15;
  createPlayer();
  createSurface();
} 

function draw() {
  background("white");
  //clear();
  
  playerLeftAndRight();
	camera.x = player.x;
}
function playerLeftAndRight() {
  if (kb.pressing("d")) {
    //player.vel.y = 1;
    player.vel.x = 3;
  }
  if (kb.pressing("a")) {
    //player.vel.y = 1;
    player.vel.x = -3;
  }
  if (kb.released("w")) {
    player.vel.y = jumpValue;
  }
  if (kb.released("e")) {
    boxy = new Sprite(100, 25, 150, 25, "s");
    boxy.x = player.x + 0;
    boxy.y = player.y + 50;
  }
}

function createPlayer() {
  player = new Sprite(50, 0);
  //aplayer.diameter = 50;
  player.color = "lavender";
  player.stroke = "purple";
}

function createSurface () {
  floor = new Sprite(0, floorHeight+350, 200, 25, "d");
  floor2 = new Sprite(0, floorHeight+400, 400, 50);
  floor3 = new Sprite(0, floorHeight+450, 800, 50, "static");
  floor4 = new Sprite(0, floorHeight+500, 800, 50, "static");
  //boxy = new Sprite(0, 25, 25)
}

function playerDeath() {
  if (player.y > windowHeight) {
    player.x = windowWidth/2;
    player.y = windowHeight/8;
  }
}