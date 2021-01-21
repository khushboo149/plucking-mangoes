const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var dground,tree,treeimg;
var boy,boyimg;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
function preload()
{
	treeimg=loadImage("images/img/tree.png");
	boyimg=loadImage("images/img/boy.png");
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	dground= new Ground();
	stones=new Stone(100,460,23);
	mango1=new Mango(600,290,34);
	mango2=new Mango(855,325,34);
	mango3=new Mango(670,260,34);
	mango4=new Mango(730,200,34);
	mango5=new Mango(710,320,34);
	mango6=new Mango(680,250,34);
	mango7=new Mango(825,170,34);
	mango8=new Mango(880,260,34);
	mango9=new Mango(940,220,34);
	mango10=new Mango(980,305,34);

	attach=new Throw(stones.body,{x:100,y:465});

	tree=createSprite(775,365);
	tree.addImage(treeimg);
	tree.scale=0.42;

boy=createSprite(160,550);
boy.addImage(boyimg);
boy.scale=0.15;


}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  fill("black");
  textSize(18);

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

  

  stones.display();
  dground.display();
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
  drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	attach.fly();
}
function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<-lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body.false);
	}
}

