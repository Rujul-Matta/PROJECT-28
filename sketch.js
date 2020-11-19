
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground_1 = new ground();
	tree_1 = new tree(width-225,350);
	boy_1 = new boy();

	stone_1 = new stone(67,200);

	mango_1 = new Mango(1000, 250);
	mango_2 = new Mango(1050, 300);
	mango_3 = new Mango(1050, 200);
	mango_4 = new Mango(1100, 250);
	mango_5 = new Mango(1150, 175);
	mango_6 = new Mango(1200, 300);
	mango_7 = new Mango(1200, 200);
	mango_8 = new Mango(1150, 250);
	mango_9 = new Mango(1250, 250);
	mango_10 = new Mango(1300, 275);

	rope_1 = new Rope(stone_1.body,{x: 67,y:200})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

//   textSize(25);
//   text(mouseX + "," + mouseY , width/2 , height/2)
  
  ground_1.display();
  tree_1.display();
  boy_1.display();
  stone_1.display();

  mango_1.display();
  mango_2.display();
  mango_3.display();
  mango_4.display();
  mango_5.display();
  mango_6.display();
  mango_7.display();
  mango_8.display();
  mango_9.display();
  mango_10.display();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone_1.body,{x:mouseX, y: mouseY})
}
function mouseReleased(){
    rope_1.fly()
}



