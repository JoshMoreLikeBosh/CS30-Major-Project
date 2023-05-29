// P5.Play Platformer
// Josh Wright
//
// Extra for Experts:
// - explored with P5.Play and learned how to use it to make a platformer

let player, boxy;
let floorGroup;
let floorHeight = 0;
let floorWidth = 0;
let floorX = 0;
let floorY = 0;
let jumpValue = 8;
let boxyArray = [];
let floorCounter1 = 0, floorCounter2 = 0;
let mySound, mySound2, mySound3;
let myImage, myImage2, myImage3;

function preload() {
  // Loads Music Files
  soundFormats("mp3", "ogg");
  mySound = loadSound("bgSong.mp3");
  mySound2 = loadSound("bgSong2.mp3");
  mySound3 = loadSound("meow.mp3");

  // Loads Image Files
  myImage = loadImage("bgImage.jpg");
  myImage2 = loadImage("bgImage2.jpg");
  myImage3 = loadImage("besnnt.PNG");
}

function setup() {
  mySound3.play();
  new Canvas(windowWidth, windowHeight);
  world.gravity.y = 15;
  groupTest();
  createPlayer();
} 

function draw() {
  background("white");
  playerMovement();
  movingPlatform1();
  buttonPushable();
  camera.x = player.x;
  camera.y = player.y;
}

// Players Movement
// ~~~~~~~~~~~~~~~~

function playerMovement() {
  // move right
  if (kb.pressing("d") || kb.pressing("right")) {
    player.vel.x = 3;
  }

  // move left
  if (kb.pressing("a") || kb.pressing("left")) {
    player.vel.x = -3;
  }

  // ground pound
  if (kb.presses("s") || kb.presses("down")) {
    player.vel.y = jumpValue*2;
    player.vel.x = 0;
  }

  // jump
  if (kb.presses("w") || kb.presses("up")) {
    player.vel.y = -jumpValue;
  }

  // Creates a platform under the player
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
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

// Creates the Player
// ~~~~~~~~~~~~~~~~~~~~

function createPlayer() {
  player = new Sprite(50, 0);
  //player.diameter = 50;
  player.color = "lavender";
  player.stroke = "purple";
  player.x = 0;
}

// WIP player death
// ~~~~~~~~~~~~~~~~

function playerDeath() {
  if (player.y > windowHeight) {
    player.x = windowWidth/2;
    player.y = windowHeight/8;
  }
}

function groupTest() {
  //Initalized Values
  floorGroup = new Group();
  floorGroup.width = 50;
  floorGroup.height = 20;
  floorGroup.x = 0;
  floorGroup.y = 0;
  console.log(floorGroup.y);
  floorGroup.collider = "s";
  //create multiples of floor
  while (floorGroup.length < 25) {
    let floorThing = new floorGroup.Sprite();
  }

  // template for each floor

  // floorGroup[].x = 0;
  // floorGroup[].y = 0;
  // floorGroup[].width = 0;
  // floorGroup[].height = 0;

  // Creation of Each Floor
  // ~~~~~~~~~~~~~~~~~~~~~~

  // CONTROL TUTORIAL TEXT BOXES

  // floor 1
  floorGroup[0].x = 0;
  floorGroup[0].y = 150;
  floorGroup[0].width = 0;
  floorGroup[0].height = 0;
  floorGroup[0].text = "Controls";
  floorGroup[0].textSize = 50;
  floorGroup[0].collider = "none";

  // floor 8
  floorGroup[7].x = 0;
  floorGroup[7].y = 200;
  floorGroup[7].width = 0;
  floorGroup[7].height = 0;
  floorGroup[7].text = "W = Jump";
  floorGroup[7].textSize = 50;
  floorGroup[7].collider = "none";

  // floor 9
  floorGroup[8].x = 0;
  floorGroup[8].y = 250;
  floorGroup[8].width = 0;
  floorGroup[8].height = 0;
  floorGroup[8].text = "A & D = Left & Right";
  floorGroup[8].textSize = 50;
  floorGroup[8].collider = "none";

  // floor 10
  floorGroup[9].x = 0;
  floorGroup[9].y = 300;
  floorGroup[9].width = 0;
  floorGroup[9].height = 0;
  floorGroup[9].text = "E = Create Platform";
  floorGroup[9].textSize = 50;
  floorGroup[9].collider = "none";

  // floor 11
  floorGroup[10].x = 0;
  floorGroup[10].y = 350;
  floorGroup[10].width = 0;
  floorGroup[10].height = 0;
  floorGroup[10].text = "Q = Delete Newest Platform";
  floorGroup[10].textSize = 50;
  floorGroup[10].collider = "none";

  // FLOORS AND WALLS STUFF
  // ~~~~~~~~~~~~~~~~~~~~~~~

  // floor 2
  floorGroup[1].x = 500;
  floorGroup[1].y = 750;
  floorGroup[1].width = 150;
  floorGroup[1].height = 600;

  // floor 3
  floorGroup[2].x = 647;
  floorGroup[2].y = 428;
  floorGroup[2].width = 200;
  floorGroup[2].height = 60;
  floorGroup[2].rotation = -30;

  // floor 4
  floorGroup[3].x = 1068;
  floorGroup[3].y = 651;
  floorGroup[3].width = 700;
  floorGroup[3].height = 600;

  // floor 5
  floorGroup[4].x = 1465;
  floorGroup[4].y = 649;
  floorGroup[4].width = 60;
  floorGroup[4].height = 600;
  floorGroup[4].rotation = -15;

  // floor 6
  floorGroup[5].x = 0;
  floorGroup[5].y = 750;
  floorGroup[5].width = 600;
  floorGroup[5].height = 600;

  // floor 7
  floorGroup[6].x = 1465+125;
  floorGroup[6].y = 649-125;
  floorGroup[6].width = 60;
  floorGroup[6].height = 600;
  floorGroup[6].rotation = -15;

  // floor 12
  floorGroup[11].x = 1565;
  floorGroup[11].y = 950;
  floorGroup[11].width = 60;
  floorGroup[11].height = 100;
  floorGroup[11].rotation = -35;

  // floor 13
  floorGroup[12].x = 1565+122;
  floorGroup[12].y = 950-122;
  floorGroup[12].width = 60;
  floorGroup[12].height = 100;
  floorGroup[12].rotation = -35;

  //floor 14
  floorGroup[13].x = 1615;
  floorGroup[13].y = 1010;
  floorGroup[13].width = 60;
  floorGroup[13].height = 100;
  floorGroup[13].rotation = -55;

  //floor 15
  floorGroup[14].x = 1615+125;
  floorGroup[14].y = 1010-125;
  floorGroup[14].width = 60;
  floorGroup[14].height = 100;
  floorGroup[14].rotation = -75;

  //floor 16
  floorGroup[15].x = 1665;
  floorGroup[15].y = 1040;
  floorGroup[15].width = 60;
  floorGroup[15].height = 100;
  floorGroup[15].rotation = -75;

  //floor 17
  floorGroup[16].x = 1665+130;
  floorGroup[16].y = 1047;
  floorGroup[16].width = 200;
  floorGroup[16].height = 60;

  //floor 18 MOVING PLAT
  floorGroup[17].x = 1965;
  floorGroup[17].y = 1047;
  floorGroup[17].width = 100;
  floorGroup[17].height = 20;
  floorGroup[17].dx = 1;
  floorGroup[17].dy = 1;

  //floor 19 MOVING PLAT
  floorGroup[18].x = 1915;
  floorGroup[18].y = 1032;
  floorGroup[18].width = 10;
  floorGroup[18].height = 20;
  floorGroup[18].dx = 1;
  floorGroup[18].dy = 1;
  
  //floor 20 MOVING PLAT
  floorGroup[19].x = 2015;
  floorGroup[19].y = 1032;
  floorGroup[19].width = 10;
  floorGroup[19].height = 20;
  floorGroup[19].dx = 1;
  floorGroup[19].dy = 1;

  // floor 21
  floorGroup[20].x = 2450;
  floorGroup[20].y = 1032;
  floorGroup[20].width = 150;
  floorGroup[20].height = 60;


  // floor 22 BUTTON
  floorGroup[21].x = 1000;
  floorGroup[21].y = 337;
  floorGroup[21].width = 30;
  floorGroup[21].height = 30;

  // floor 23
  floorGroup[22].x = 978;
  floorGroup[22].y = 345;
  floorGroup[22].width = 15;
  floorGroup[22].height = 15;

  // floor 24
  floorGroup[23].x = 1022;
  floorGroup[23].y = 345;
  floorGroup[23].width = 15;
  floorGroup[23].height = 15;

  // floor 25
  floorGroup[24].x = 1200;
  floorGroup[24].y = -45;
  floorGroup[24].width = 25;
  floorGroup[24].height = 800;
}

// if colliding w/ player, slowly change height, and revert back to original height
function buttonPushable() {
  if (player.collides(floorGroup[21])) {
    floorGroup[21].height -= 2;
    floorGroup[21].y += 1;
    floorGroup[24].y -= 10;
  }
}




function movingPlatform1() {
  floorGroup[17].x += floorGroup[17].dx;
  console.log(floorGroup[17].dx);
  if (floorGroup[17].x > 2300) {
    floorGroup[17].dx *= -1;
  }
  else if (floorGroup[17].x === 1965) {
    floorGroup[17].dx *= -1;
  }
  // small block 1
  floorGroup[18].x += floorGroup[18].dx;
  console.log(floorGroup[18].dx);
  if (floorGroup[18].x > 2300-50) {
    floorGroup[18].dx *= -1;
  }
  else if (floorGroup[18].x === 1915) {
    floorGroup[18].dx *= -1;
  }

  //small block 2
  floorGroup[19].x += floorGroup[19].dx;
  console.log(floorGroup[19].dx);
  if (floorGroup[19].x > 2300+50) {
    floorGroup[19].dx *= -1;
  }
  else if (floorGroup[19].x === 2015) {
    floorGroup[19].dx *= -1;
  }
}

