
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dust1,dust2,dust3;
var ground1;
var crumpledPaper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1=new Ground(400, 700, 800, 20);

	dust1=new Dustbin(600, 680, 200, 20);
	dust2=new Dustbin(500, 600, 20, 180);
	dust3=new Dustbin(700, 600, 20, 180);

	crumpledPaper=new Paper(30,600,30);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();

  dust1.display();
  dust2.display();
  dust3.display();

  crumpledPaper.display();

  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:40,y:-40})
  }
}



