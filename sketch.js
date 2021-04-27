
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,600,10);
	  ground = new Ground(400,680,800,20);
    leftSide = new Dustbin(550,620,20,100);
	  bottom = new Dustbin(610,660,100,20);
	  rightSide = new Dustbin(670,620,20,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
  ground.display();
  
  drawSprites();
 
}

  function keyPreesed(){
	  if(keyCode === UP_ARROW){
		  matter.body.applyForce(paperObject.body, paperObject.body.position,{x:85, y: -85})
	  }
  }







