const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(1200,600);
 

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  ground = new Ground(600,595,1200,10);

  ground2 = new Ground(390,300,260,10);
  ground3 = new Ground(900,400,200,10);

  polygon = new Polygon(150,200,30,30);

  launcher = new Slingshot(polygon.body,{x:150, y:110})
  
  
  block1 = new Block(480,275,30,40);
  block2 = new Block(450,275,30,40);
  block3 = new Block(420,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(360,275,30,40);
  block6 = new Block(330,275,30,40);
  block7 = new Block(300,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  block17 = new Block(900,275,30,40);
  block18 = new Block(900,315,30,40);
  block19 = new Block(870,315,30,40);
  block20 = new Block(930,315,30,40);
  block21 = new Block(900,355,30,40);
  block22 = new Block(870,355,30,40);
  block23 = new Block(840,355,30,40);
  block24 = new Block(930,355,30,40);
  block25 = new Block(960,355,30,40);
  


}

function draw() {
  background("red");

  textSize(25);
  text("PRESS SPACE TO PLAY AGAIN",50 ,50);

  ground.display();
  ground2.display();
  ground3.display();

  ground.display();
  ground2.display();
  stroke("black")
  fill("skyblue");
  block1.display();
  block5.display();
  block8.display();
  block11.display();
  block13.display();
  block15.display();
  block16.display();

  fill("pink")
  block4.display();
  
  fill("Aqua");
  block3.display();
  block7.display();
  block10.display();
  fill("pink");
  block2.display();
  block6.display();
  block9.display();
  block12.display();
  block14.display();
  
  
  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block24.display();
  fill("Aqua")
  
  block21.display();
  block22.display();
  block23.display();

  fill("pink"); 
  block25.display();
 
    
  

  polygon.display();

  launcher.display();
  drawSprites();
}

function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased()  {
  launcher.fly()
  

}

function keyPressed()  {
  if(keyCode===32)  {
    Matter.Body.setPosition(polygon.body,{x:150, y:200})
    launcher.attach(polygon.body);

  }

}