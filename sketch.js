var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,leafImg;
var apple,leaf,oleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png") ;
  leafImg   = loadImage("leaf.png")  ;
  oleafImg     = loadImage("orangeleaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);
  
  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  
}

function draw() {
  background(0);
  createOleaf();
  createleaf();
  createApple();
  drawSprites();

  if(keyIsDown(LEFT_ARROW)){
    rabbit.position.x=rabbit.position.x -3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    rabbit.position.x=rabbit.position.x +3;
  }
  
}
function createApple(){
  if(frameCount % 80 === 0){
  var apple=createSprite(random(350,50),40,100,10); 
  apple.addImage(appleImg);
  apple.x = Math.round(random(10,60))        
  apple.scale=0.05;
  apple.velocityY=3;
  apple.lifetime=85;
  apple.depth = rabbit.depth;
  rabbit.depth=rabbit.depth+1;}
}

function createleaf(){
  if(frameCount % 100 === 0){
  var leaf=createSprite(random(50,350),30,100,100);
   leaf.addImage(leafImg);
   leaf.x = Math.round(random(10,60))
   leaf.scale=0.05;
   leaf.velocityY=4;
   leaf.lifetime=80;
   leaf.depth = rabbit.depth
   rabbit.depth = rabbit.depth + 1;}
 }

function createOleaf(){
  if(frameCount % 120 === 0){
  var oleaf=createSprite(random(350,350),40,10,10);
  oleaf.addImage(oleafImg);
  oleaf.x= Math.round(random(1,100))
  oleaf.scale=0.05;
  oleaf.velocityY=3;
  oleaf.lifetime=85;
  oleaf.depth = rabbit.depth
  rabbit.depth = rabbit.depth + 1;}
}

