
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball


function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
	Matter.Bodies.circle(200,200, 10)
		World.add(World, Matter);
		
	function keyPressed(){
		if (keyCode === UP_ARROW){

		}
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  groundObj.display();
  groundObj = new ground(width/2, 670, width, 20);
  leftSide = new ground(1100, 600, 20, 120);
  rightSide = new ground(1100, 600, 120, 20);
}