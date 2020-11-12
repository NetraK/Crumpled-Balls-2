
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper,paperImg;
var ground;
var dustbin1,dustbinImg,dustbinObj;
var world;

function preload()
{
//	dustbinImg = loadImage("dustbingreen.png");
//  paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200,450,70);
	ground = new Ground(width/2,670,width,20);

	dustbinObj = new Dustbin(1200,650);
	

	var render = Render.create({
		element:document.body,
		engine:engine,
		options:
		{
			width:1600,height:700,
			wireframes:false
		}
	});

	Engine.run(engine);
	Render.run(render);

}

function draw() {
  rectMode(CENTER);
  background(230);
  
  paper.display();
  ground.display();
  dustbinObj.display();
  
 // drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
	}
	
}



