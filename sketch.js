const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events= Matter.Events; 

var engine, world;

var ground;

var divisionHeight = 300

var plinkos = [];
var particles = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,900,50);

  for(var k = 0;k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight))
    }

  for(var j=40;j<=width;j=j+50){
   plinkos.push(new Plinko(j,75));
  } 

 for(var j = 15;j<=width-10;j=j+50){
   plinkos.push(new Plinko(j,175));
   }
}

function draw() {
  background("black");
 
 
for(var k=0;k<divisions.length;k++){
  divisions[k].display()
}

for(var j=0;j<plinkos.length;j++){
  plinkos[j].display()
}
ground.display();

  drawSprites();
  
}