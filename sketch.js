var flowers,flowersImage,flowerGroup;
var bee,beeImage;
var ground,groundImage;
var bushes,bushesImage,bushGroup;
var gardener,gardenerImage;
var score = 0
var edges;
var collidedSound;

function preload() {
flowersImage = loadImage("flowers.png")
beeImage = loadImage("bee.png")
groundImage = loadImage("ground.png")
bushesImage = loadImage("bushes.png")
gardenerImage = loadImage("gardener.png")
collidedSound = loadSound("collided.wav")
}

function setup() {
createCanvas(displayWidth,displayHeight - 50)

bee = createSprite(500,displayHeight - 500,50,50);
bee.addImage(beeImage);
bee.scale = 0.1

ground = createSprite(displayWidth/2,displayHeight -200,displayWidth,30)
ground.addImage(groundImage)

gardener = createSprite(50,displayHeight - 400,30,20)
gardener.addImage(gardenerImage)
gardener.scale = 0.5
gardener.velocityX = 4;

flowerGroup = new Group()
bushGroup = new Group();

//edges = createEdgeSprites();
}

function draw() {
  background("white");
  text("Score: " + score,300,100)

//bee.bounceOff(edges[2])
//bee.bounceOff(edges[4])


  //gameCamera
 // camera.position.x = bee.x
  //camera.position.y = displayHeight/2

  //controlling bee
if(keyDown("LEFT_ARROW")) {
  bee.x = bee.x -10
}

if(keyDown("RIGHT_ARROW")) {
  bee.x = bee.x + 10
}

if(keyDown("SPACE")) {
  bee.velocityY =  - 10
}
bee.velocityY = bee.velocityY + 0.8

//collide
bee.collide(ground)
 
//moving ground
ground.velocityX = -3

//infinite ground

if(ground.x < 300) {

  ground.x = displayWidth/2
}

if(gardener.x > displayWidth) {
  gardener.x = 50
}

if(bee.isTouching(flowerGroup)) {
  score = score+100
}

if(score > 2000) {
  background(0);
  textSize(50);
  fill("white")
  text("WON THE GAME",300,200)
  ground.velocityX = 0
  gardener.velocityX = 0
  flowerGroup.destroyEach()
  bushGroup.destroyEach()

}

if(bee.isTouching(gardener)) {
  background("red");
  textSize(50);
  fill("white")
  text("GAME OVER",300,200)
  ground.velocityX = 0
  gardener.velocityX = 0
  flowerGroup.destroyEach()
  bushGroup.destroyEach()
  bee.velocityY = 0
  bee.velocityX = 0
  collidedSound.play();
}


flowers1();
bush();
  drawSprites();
}

function flowers1() {

  if(frameCount % 200 === 0) {

  
  flowers = createSprite(displayWidth - 20,displayHeight - 300,20,20);
  flowers.velocityX = -6;

  flowers.addImage(flowersImage)

  flowers.scale = 0.4
  flowerGroup.add(flowers)
  }
}

function bush() {

  if(frameCount % 200 === 0) {

  
 bushes = createSprite(displayWidth - 20,displayHeight - 300,20,20);
  bushes.velocityX = -3;

  bushes.addImage(bushesImage)

  bushes.scale = 0.4
  bushGroup.add(bushes);
  }
}