const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball1;
var slingShot;
var polygon_img;
var score=0
var tree,mango1,mango2,mango3,mango4,boy,treeimg,boyimg,mangoimg;
//var ball2,ball3,ball4,ball5,slingshot2,slingshot3,slingshot4,slingshot5;
function preload(){
  polygon_img=loadImage("stone.png");
  treeimg=loadImage("tree.png");
  boyimg=loadImage("boy.png");
  mangoimg=loadImage("mango.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,380,900,20);
  tree =  createSprite(600,200,500,300);
  tree.addImage(treeimg);
  tree.scale=0.3;
  boy=createSprite(80,320,50,200);
  boy.addImage(boyimg);
  boy.scale=0.09;
  mango1= createSprite(700,100,50,50);
  mango1.addImage(mangoimg);
  mango1.scale=0.05;
  mango2= createSprite(600,100,50,50);
  mango2.addImage(mangoimg);
  mango2.scale=0.05;
  mango3= createSprite(500,80,50,50);
  mango3.addImage(mangoimg);
  mango3.scale=0.05;
  mango4= createSprite(600,200,50,50);
  mango4.addImage(mangoimg);
  mango4.scale=0.05;
 // stand1 = new Stand(390,300,250,10);
  //stand2 = new Stand(700,200,200,10);
 
  //level one
 /* block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);*/

  //ball holder with slings
  ball1 = Bodies.circle(50,200,20);
  World.add(world,ball1);

  slingShot = new Slingshot(this.ball1,{x:40,y:270});

  /*ball2 = Bodies.circle(100,200,20);
  World.add(world,ball2);

  slingShot2 = new Slingshot(this.ball2,{x:200,y:95});

  ball3 = Bodies.circle(150,200,20);
  World.add(world,ball3);

  slingShot3 = new Slingshot(this.ball3,{x:300,y:95});

  ball4 = Bodies.circle(200,200,20);
  World.add(world,ball4);

  slingShot4 = new Slingshot(this.ball4,{x:400,y:95});

  ball5= Bodies.circle(250,200,20);
  World.add(world,ball5);

  slingShot5 = new Slingshot(this.ball5,{x:500,y:95});*/

}
function draw() {
  background(56,44,44); 
 drawSprites();
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);


  ground.display();
 /* stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();*/
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball1.position.x,ball1.position.y,40,40);
  /*image(polygon_img ,ball2.position.x,ball2.position.y,40,40);
  image(polygon_img ,ball3.position.x,ball3.position.y,40,40);
  image(polygon_img ,ball4.position.x,ball4.position.y,40,40);
  image(polygon_img ,ball5.position.x,ball5.position.y,40,40);*/
 //textsize(20);
 //text("score= "+score , 150,20);
 
 slingShot.display();
 /*slingShot2.display();
 slingShot3.display();
 slingShot4.display();
 slingShot5.display();*/
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
  score=score+10;
}