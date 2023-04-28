// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let player, floor, floor2, floor3;
let floorHeight = 0;

function setup() {
	new Canvas(windowWidth, windowHeight);
	world.gravity.y = 15;
	player = new Sprite(50, 0);
	floor = new Sprite(25, floorHeight+600, windowWidth, 40, "static");
  floor2 = new Sprite(10, floorHeight+250, 450, 40, "static");
  floor3 = new Sprite(50, floorHeight+400, 225, 40, "static");
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
  if (kb.pressing("w")) {
    player.vel.y = 30;
    
  }
  console.log()
//   if (player.vel.y = 30) {
// }
}

