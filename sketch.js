
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,line1,line2,line3,ground;
var paperbody,groundS;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;
	paper=createSprite(200,625,1,1);
	var paper_options = {
		isStatic:false,
        restitution:0.3,
        friction:0.5,
		density:1.2,
	}
	paperbody=Bodies.circle(200,625,10,paper_options);
	World.add(world,paperbody);
	groundS=createSprite(width/2, 660, width,10);
	line1=createSprite(650,650,200,10);
	line1.shapeColor="red";

	line2=createSprite(750,600,10,100);
	line2.shapeColor="red";

	line3=createSprite(550,600,10,100);
	line3.shapeColor="red";
	var goptions={
		isStatic:true
	}
	ground=Bodies.rectangle(width/2, 650, width, 10,goptions  );
	World.add(world, ground);

	
	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.x= paperbody.position.x 
  paper.y= paperbody.position.y 
  
  fill("white")
  ellipseMode(RADIUS);
  ellipse(paper.position.x,paper.position.y,20,20);
 
 drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperbody.body,paperbody.body.position,{x:85,y:-85});

	}
}



