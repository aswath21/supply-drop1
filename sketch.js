var helicopterIMG, helicopterSprite, packageSprite,packageIMG, rect1, rect2, rect3;
var packageBody,ground, rect1Body, rect2Body, rect3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1 = createSprite(300, 610, 20, 100);
	rect1.shapeColor = 'red'

	rect2 = createSprite(400, 650, 200, 20);
	rect2.shapeColor = 'red'

	rect3 = createSprite(500, 610, 20, 100);
	rect3.shapeColor = 'red'


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2, 200, 10, 10 ,{restitution:1.0, isStatic:true});
	World.add(world, packageBody);
	//keyPressed()
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
	 World.add(world, ground);

	rect1Body = Bodies.rectangle(300, 610, 20, 100, {isStatic:true})
	World.add(world, rect1Body)

	rect2Body = Bodies.rectangle(400, 650, 200, 20, {isStatic:true})
	World.add(world, rect2Body)

	rect3Body = Bodies.rectangle(500, 610, 20, 100, {isStatic:true})
	World.add(world, rect3Body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  rect1.x = rect1Body.position.x
  rect1.y = rect1Body.position.y

  rect2.x = rect2Body.position.x
  rect2.y = rect2Body.position.y

  rect3.x = rect3Body.position.x
  rect3.y = rect3Body.position.y

  drawSprites()
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false)

    
  }
}



