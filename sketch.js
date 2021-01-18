
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paperball;
var groundsprite;
var bottomSprite;
var side1, side2;

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

  paperball = new Paper(200,450,40);

  groundsprite = new Ground(width/2,700,1500,20);

  bottomSprite = new Dustbin(1100,680,170,20);
  side1 = new Dustbin(1020,640,20,100);
  side2 = new Dustbin(1190,640,20,100);


	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  drawSprites();
  paperball.display();
  groundsprite.display();
  bottomSprite.display();
  side1.display();
  side2.display();
  keyPressed();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW){
       Matter.body.applyForce(paperball.body, paperball.body.position,{x:85,y:-85});
   }
}