
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImage=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new Stone(200,200);
  sling1 = new SlingShot(stone1.body,pointB);
  ground1 = new Ground(400,700,800,30);
  tree1 = new Tree(600,500,30,150);
  mango1 = new Mango();
  mango2 = new Mango();
  mango3 = new Mango();
  mango4 = new Mango();
  mango5 = new Mango();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone1.display();
  sling1.display();
  ground1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);


  drawSprites();
 imageMode(CENTER)
 image(boyImage,200,200,20,100);
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone1.body,{x:235,y:420})
    sling1.attach(stone1.body);
  }
}
function detectCollision(Lstone,Lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false)
  }
}

