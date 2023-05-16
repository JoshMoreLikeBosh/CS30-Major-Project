// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// i apologize for this long line of code, this is just so i can make a new sprite for each floor
let player, floor0, floor2, floor3, floor4, floor5, floor6, floor7, floor8, floor9, floor10, floor11, floor12, floor13, floor14, floor15, floor16, floor17, floor18, floor19, floor20, boxy;
let floorGroup;
let floorHeight = 0;
let floorWidth = 0;
let floorX = 0;
let floorY = 0;
let jumpValue = 8;
let boxyArray = [];
let mySound, mySound2, mySound3;
let myImage, myImage2, myImage3;

function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("bgSong.mp3");
  mySound2 = loadSound("bgSong2.mp3");
  mySound3 = loadSound("meow.mp3");

  myImage = loadImage("bgImage.jpg");
  myImage2 = loadImage("bgImage2.jpg");
  myImage3 = loadImage("besnnt.PNG");
}

function setup() {
  mySound3.play();
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
  camera.y = player.y;
}

function playerLeftAndRight() {
  // move right
  if (kb.pressing("d") || kb.pressing("right")) {
    //player.vel.y = 1;
    player.vel.x = 3;
  }
  // move left
  if (kb.pressing("a") || kb.pressing("left")) {
    //player.vel.y = 1;
    player.vel.x = -3;
  }
  // ground pound
  if (kb.presses("s") || kb.presses("down")) {
    player.vel.y = jumpValue*2;
    player.vel.x = 0;
  }
  // jump
  if (player.vel.y <= 0) {
    if (kb.presses("w") || kb.presses("up")) {
      player.vel.y = -jumpValue;

    }
    console.log(player.vel.y);



  }
  //console.log(player.vel.y);
  // create box under
  
  //Sprite(100, 25, 150, 25, "s");
  if (kb.presses("e") || kb.presses("space")) {
    boxy = new Sprite(100, 25, 150, 25, "s");
    boxy.x = player.x + 0;
    boxy.y = player.y + 50;
    boxy.color = "LightPink";
    boxy.stroke = "MediumVioletRed";
    boxyArray.push(boxy);
  }
  if (kb.presses("q") || kb.presses("shift")) {
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

  // floor0 = new Sprite(floorX+0, floorY+350, floorWidth+225, floorHeight+25, "d");
  // floor2 = new Sprite(floorX+0, floorY+500, floorWidth+800, floorHeight+50, "s");
  // floor3 = new Sprite(floorX+440, floorY+725, floorWidth+80, floorHeight+500, "s");
  // floor4 = new Sprite(floorX+640, floorY+725, floorWidth+80, floorHeight+500, "s");
  // floor5 = new Sprite(floorX+805, floorY+435, floorWidth+300, floorHeight+50, "s");
  // floor5.rotation = -25;
  // floor6 = new Sprite(floorX+1078, floorY+374.5, floorWidth+300, floorHeight+50, "s");
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
  while (floorGroup.length < 10) {
    let floorThing = new floorGroup.Sprite();
    floorThing.x = floorGroup.length * floorGroup.width;
    floorThing.y = floorGroup.length * floorGroup.height + 200;
  
  }
  // template for each floor

  // floorGroup[].x = 0;
  // floorGroup[].y = 0;
  // floorGroup[].width = 0;
  // floorGroup[].height = 0;


  // floor 1
  floorGroup[0].x = 0;
  floorGroup[0].y = 750;
  floorGroup[0].width = 600;
  floorGroup[0].height = 600;

  // floor 2
  floorGroup[1].x = 500;
  floorGroup[1].y = 750;
  floorGroup[1].width = 150;
  floorGroup[1].height = 600;

  // floor 3
  floorGroup[2].x = 700;
  floorGroup[2].y = 750;
  floorGroup[2].width = 200;
  floorGroup[2].height = 600;
  floorGroup[2].rotation = -45;

  // floor 4
  floorGroup[3].x = 0;
  floorGroup[3].y = 750;
  floorGroup[3].width = 600;
  floorGroup[3].height = 600;

  // floor 5
  floorGroup[4].x = 0;
  floorGroup[4].y = 750;
  floorGroup[4].width = 600;
  floorGroup[4].height = 600;

  // floor 6
  floorGroup[5].x = 0;
  floorGroup[5].y = 750;
  floorGroup[5].width = 600;
  floorGroup[5].height = 600;

  // floor 7
  floorGroup[6].x = 0;
  floorGroup[6].y = 0;
  floorGroup[6].width = 0;
  floorGroup[6].height = 0;
  
}