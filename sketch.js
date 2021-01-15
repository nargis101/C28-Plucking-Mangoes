
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, ground, tree, stone, boyImg;
var connector;


function preload(){
	boyImg = loadImage("boy.png");
	treeImg = loadImage("tree.png");
	grassImg = loadImage("grass.png");
	skyImg = loadImage("sky.jpg");
}


function setup() {
	createCanvas(1300, 700);
	engine = Engine.create();
	world = engine.world;

	//creating the ground and stone
	ground1 = new Ground(650, 640, 1300, 20);
	ground2 = new Ground(1311, 350, 20, 700);
	ground3 = new Ground(-9, 350, 20, 700);
	stone = new Stone(120, 105, 15);

	//creating the mangoes
	mango1 = new Mango(830, 220, 70);
	mango2 = new Mango(900, 270, 65);
	mango3 = new Mango(1130, 150, 60);
	mango4 = new Mango(1070, 60, 55);
	mango5 = new Mango(1000, 260, 65);
	mango6 = new Mango(910, 170, 65);
	mango7 = new Mango(1020, 165, 65);
	mango8 = new Mango(950, 85, 60);
	mango9 = new Mango(1100, 250, 60);
	mango10 = new Mango(1190, 220, 60);
	mango11 = new Mango(1250, 260, 60);

	//creating the constraint from the boy's hand to the stone
	connector = new Connector(stone.body, {x: 240, y: 450});

	Engine.run(engine);
	
}


function draw() {
  background(255);
  Engine.update(engine);

  image(skyImg, 0, -20, 1300, 600);
  ground1.display();
  ground2.display();
  ground3.display();

  textSize(20);
  fill(0);
  text("press space to get a second chance to play!", 82, 100);
  text("help Juno pluck the mangoes by throwing the stone!", 50, 70);

  image(grassImg, 0, 300, 1300, 400);
  image(boyImg, 200, 370, 200, 300);
  image(treeImg, 740, 5, 550, 650);
   
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  stone.display();

  connector.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}


function mouseReleased(){
	connector.fly();
}


function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 169, y: 385});
		connector.attach(stone.body);
	}
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<= 55){
		Matter.Body.setStatic(lmango.body, false);
	}	
}