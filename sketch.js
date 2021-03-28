
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);



	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	pballObj=new pball(1050,550,4);


	Engine.run(engine);
	
	
 
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  

  groundObject.display();
  dustbinObj.display();
  pballObj.display();
  keyPressed.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(pballObject.body,pballObject.body.position,{x:130,y:-145});
	

	} 
}

