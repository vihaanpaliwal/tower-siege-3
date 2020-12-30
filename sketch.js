const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;
var hexagon;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;

function preload(){
  getBackgroundImg();
}

function setup() {
   createCanvas(1000,400);

  
  engine = Engine.create();
  world = engine.world;

 
  ground1=new Ground(390+60,310,270,12);

    block1=new blueBox(300+60,275,30,40);
  block2=new blueBox(330+60,275,30,40);
  block3=new blueBox(360+60,275,30,40);
  block4=new blueBox(390+60,275,30,40);
  block5=new blueBox(420+60,275,30,40);
  block6=new blueBox(450+60,275,30,40);
  block7=new blueBox(480+60,275,30,40);

  
  block8=new greenBox(330+60,235,30,40);
  block9=new greenBox(360+60,235,30,40);
  block10=new greenBox(390+60,235,30,40);
  block11=new greenBox(420+60,235,30,40);
  block12=new greenBox(450+60,235,30,40);

  
  block13=new pinkBox(360+60,195,30,40);
  block14=new pinkBox(390+60,195,30,40);
  block15=new pinkBox(420+60,195,30,40);
  
 
  block16=new yellowBox(390+60,155,30,40);

  
  ground2=new Ground(800,225,210,12);


  block17=new blueBox(800-60,205,30,40);
  block18=new blueBox(800-30,205,30,40);
  block19=new blueBox(800,205,30,40);
  block20=new blueBox(800+30,205,30,40);
  block21=new blueBox(800+60,205,30,40);

  block22=new pinkBox(800-30,205-40,30,40);
  block23=new pinkBox(800,205-40,30,40);
  block24=new pinkBox(800+30,205-40,30,40);

  block25=new greenBox(800,205-80,30,40);

  
  ground3=new Ground(500,390,1000,20);

  
  hexagon=new polygon(200,200,20);

  sling=new SlingShot(hexagon.body,{x:180,y:190})
}

function draw() {

  
  background(bg); 

  Engine.update(engine);
  
  textSize(20);
  text("Score: "+ score, 430,90);


  ground1.display();

  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();

  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();

  block13.display();
  block14.display();
  block15.display();
  block13.score();
  block14.score();
  block15.score();

  
  block16.display();
  block16.score();

  ground2.display();

  
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();

  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block22.score();
  block23.score();
  block24.score();
  block25.score();


  hexagon.display();
  
  
  ground3.display();

 
  sling.display();


  
  strokeWeight(0);
  fill("white");
  textSize(22);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",150,30);
  
}

function mouseDragged()
{
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}


function mouseReleased()
{
   sling.fly();
}


function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(hexagon.body,{x:100,y:200});
    sling.attacher(hexagon.body);
  }
}

async function getBackgroundImg () {
  var response = await fetch ('http://worldtimeapi.org/api/timezone/Asia/Tokyo');
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if (hour>=06 && hour<=18) {
   var  bg = (255,255,255);
  } else {
    bg = (0,0,0);
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}