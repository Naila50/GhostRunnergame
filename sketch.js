var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  //spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}
function draw () {
 background("black");
 drawSprites();
 if(gameState==="play"){
  if(tower.y > 400){
    tower.y = 300
   }
   if(keyDown("right_arrow")){
     ghost.x= ghost.x +3
   }
   if(keyDown("left_arrow")){
    ghost.x= ghost.x -3
  }
  if(keyDown("space")){
    ghost.velocityY = -5;
  }
  ghost.velocityY = ghost.velocityY +0.8 
  
  spawnClimbers();
  if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
  gameState = "end";
  ghost.destroy();
  climbersGroup.destroyEach();
  doorsGroup.destroyEach();
  }
 }
 else if (gameState==="end"){
   fill('white')
   textSize (25)
  text("GAME OVER",280,280)
 tower.visible = false 
}

 

}
function spawnClimbers(){


if(frameCount%150===0){
  var door = createSprite(200,-50);
  var climber = createSprite(200,10);
  var invisibleBlock = createSprite(200,15);
  invisibleBlock.visible = false
  
  door.addImage(doorImg);
  climber.addImage(climberImg);
  door.velocityY = +5;
  climber.velocityY = +5;
  invisibleBlock.velocityY = +5;
  doorsGroup.add(door)
  climbersGroup.add(climber)
  invisibleBlockGroup.add(invisibleBlock)
  door.lifetime = 800;
  climber.lifetime = 800;
  invisibleBlock.lifetime = 800;



}



}
