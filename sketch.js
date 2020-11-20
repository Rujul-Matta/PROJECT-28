
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var world = World;
var body = Body;
var bodies = Bodies;
var M1;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, 600);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(width/2, height-10, width, 10);
  tree_1 = new tree(width-225,590, 100, 2);
  
	boy_1 = new boy(width+10,475,200,425);
	stone_1 = new Rock(285,475,50,50);

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
  
  rope_1 = new SlingShot(stone_1.body, {x:285, y:375});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);


  textSize(25);
  text("Press space to get a second chance " , width/2 - 250 , height/2)
  ground.display();

  tree_1.display();
  imageMode(CENTER);
  image(tree_1.image, width-225, 350, 500, 500);

  boy_1.display();
  imageMode(CENTER);
  image(boy_1.image,350,475,200,425)
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

  rope_1.display();
 
  detectCollision(stone_1,mango_1);
  detectCollision(stone_1,mango_2);
  detectCollision(stone_1,mango_3);
  detectCollision(stone_1,mango_4);
  detectCollision(stone_1,mango_5);
  detectCollision(stone_1,mango_6);
  detectCollision(stone_1,mango_7);
  detectCollision(stone_1,mango_8);
  detectCollision(stone_1,mango_9);
  detectCollision(stone_1,mango_10);
}
function keyPressed(){
  if(keyCode === 32){
    rope_1.attach(stone_1.body);
  }
}
function mouseDragged(){
    Matter.Body.setPosition(stone_1.body,{x:mouseX, y: mouseY})
    Matter.Body.setStatic(stone_1.body,false)
}
function mouseReleased(){
    rope_1.fly();
}

function detectCollision(stone,mango){
  stoneBodyPosition = stone.body.position;
  mangoBodyPosition = mango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= mango.width/2 + stone_1.width/2){
    Matter.Body.setStatic(mango.body, false);
  }

}


