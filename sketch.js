// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// i apologize for this long line of code, this is just so i can make a new sprite for each floor
let player, floor, floor2, floor3, floor4, floor5, floor6, floor7, floor8, floor9, floor10, floor11, floor12, floor13, floor14, floor15, floor16, floor17, floor18, floor19, floor20, boxy;
let floorGroup;
let floorHeight = 0;
let floorWidth = 0;
let floorX = 0;
let floorY = 0;
let jumpValue = 8;
let boxyArray = [];

function setup() {
  new Canvas(windowWidth, windowHeight);
  world.gravity.y = 15;
  createPlayer();
  createSurface();
  groupTest();
} 

function draw() {
  background("white");
  //clear();
  
  playerLeftAndRight();
	camera.x = player.x;
}

function playerLeftAndRight() {
  // move right
  if (kb.pressing("d")) {
    //player.vel.y = 1;
    player.vel.x = 3;
  }
  // move left
  if (kb.pressing("a")) {
    //player.vel.y = 1;
    player.vel.x = -3;
  }
  // ground pound
  if (kb.presses("s")) {
    player.vel.y = -jumpValue*2;
    player.vel.x = 0;
  }

  // jump
  
  if (player.vel.y <= 0) {
    if (kb.presses("w")) {
      player.vel.y = -jumpValue;
    }
    

  }
  //console.log(player.vel.y);
  // create box under
  
  //Sprite(100, 25, 150, 25, "s");
  if (kb.presses("e")) {
    boxy = new Sprite(100, 25, 150, 25, "s");
    boxy.x = player.x + 0;
    boxy.y = player.y + 50;
    boxy.color = "LightPink";
    boxy.stroke = "MediumVioletRed";
    boxyArray.push(boxy);
  }
  if (kb.presses("q")) {
    let toDestroy = boxyArray.pop();
    toDestroy.remove();
  }
}

// push boxy into array and press delete key to remove from array

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
  floor6 = new Sprite(floorX+1078, floorY+374.5, floorWidth+300, floorHeight+50, "s");
  //boxy = new Sprite(0, 25, 25)
}

function playerDeath() {
  if (player.y > windowHeight) {
    player.x = windowWidth/2;
    player.y = windowHeight/8;
  }
}

function groupTest() {
  //creates
  floorGroup = new Group();
  floorGroup.width = 50;
  floorGroup.height = 20;
  floorGroup.x = 0;
  floorGroup.y = 0;
  console.log(floorGroup.y);
  floorGroup.collider = "s";
  //floorGroup.y = 750;
  //create multiples of floor
  while (floorGroup.length < 5) {
    let floorThing = new floorGroup.Sprite();
    floorThing.x = floorGroup.length * floorGroup.width;
    floorThing.y = floorGroup.length * floorGroup.height + 200;
  
  }
  floorGroup[0].rotation = -45;
  floorGroup[3].width = 100;
}