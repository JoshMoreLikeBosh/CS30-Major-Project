// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let player, floor, floor2, floor3, floor4, floor5, boxy;
let floorHeight = 0;
let floorWidth = 0;
let floorX = 0;
let floorY = 0;
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
    boxy.color = "LightPink";
    boxy.stroke = "MediumVioletRed";
    
  }
  if (kb.released("q")) {
    boxy.remove();
  }
  if (kb.released("p")) {
    reload();
  }
}

function createPlayer() {
  player = new Sprite(50, 0);
  //aplayer.diameter = 50;
  player.color = "lavender";
  player.stroke = "purple";
}

function createSurface () {
  floor = new Sprite(floorX+0, floorY+350, floorWidth+225, floorHeight+25, "d");
  floor2 = new Sprite(floorX+0, floorY+500, floorWidth+800, floorHeight+50, "s");
  floor3 = new Sprite(floorX+440, floorY+725, floorWidth+80, floorHeight+500, "s");
  floor4 = new Sprite(floorX+640, floorY+725, floorWidth+80, floorHeight+500, "s");
  floor5 = new Sprite(floorX+805, floorY+435, floorWidth+300, floorHeight+50, "s");
  floor5.rotation = -25;
  //boxy = new Sprite(0, 25, 25)
}

function playerDeath() {
  if (player.y > windowHeight) {
    player.x = windowWidth/2;
    player.y = windowHeight/8;
  }
}