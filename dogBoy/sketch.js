var dog,boy;
var dogImg,boyImg;

var groundStreet;
var groundStreetImg;

var cone;
var coneImg;
var coneGroup;
coneGroup = new Group();

var invisibleUp,invisibleDown;

var gameState = PLAY;
var END =0;
var PLAY =1;

var distance =0;
var gameOver, restart;

function preload(){
dogImg = loadImage("Dog_Running.png");
boyImg = loadImage("Boy_Running.png");
groundStreetImg = loadImage("Street.png")
coneImg = loadImage("cone.png")

}

function setup() {

  createCanvas(600,300);

  dog = createSprite(75,150);
  dog.addImage("dog",dogImg);
  dog.scale = 0.125;

  boy = createSprite(325,150);
  boy.addImage("boy",boyImg);
  boy.scale = 0.1;

  cone = createSprite(600,150);
  cone.addImage("cone",coneImg);
  cone.scale = 0.1;
  cone.velocityX = -5;

  groundStreet = createSprite(300,150);
  groundStreet.addImage("groundStreet",groundStreetImg);
  groundStreet.scale = 0.2;
  
  invisibleUp = createSprite(600,000);
  invisibleUp.width = 1200;
  invisibleUp.height = 50;
  invisibleUp.visible = false;

  invisibleDown = createSprite(600,300);
  invisibleDown.width = 1200;
  invisibleDown.height = 50;
  invisibleDown.visible = false;

}

function draw() {

  drawSprites();

  textSize(20);
  fill(255);
  text("Distance: "+ distance,0,30);
  
  if(keyDown("up_arrow")){
    boy.velocityY = boy.velocityY + -1;
  }

if(keyDown("down_arrow")){
  boy.velocityY = boy.velocityY + 1;
} 

  dog.y = boy.y;
  dog.depth = groundStreet.depth + 1;
  boy.depth = groundStreet.depth + 1;
  cone.depth = groundStreet.depth + 1;
  boy.depth = cone.depth + 1;
  
  boy.collide(invisibleUp);
  boy.collide(invisibleDown);
}

//Esqueci como que usa o "Group" (ConeGroup) e fazer os cones aparecer no mapa aleatoriamente

//Queria que varios cones aparecem em lugares diferentes, como no jogo da bicicleta 
//que aparece varios ciclistas em diferentes lugares
function coneSpawn(){
  


}