
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function preload()





function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	block1 = Bodies.circle(220,10,10,block1opitions);
	World.add(world,block1)
	
	block2 = Bodies.circle(110,50,10,10,block2opitions);
	World.add(world,block2)

	block3 = Bodies.circle(350,50,10,10,block3opitions);
	World.add(world,block3)

var block1_opitions = {
	restitution:0.7,
	friction:0.1,
	frictionAir:0.3
}


	Engine.run(engine);
  
}

	

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
Engine.update(engine);


}


var plane_opitions={
	isStatic:true

}

