var ball;
var wall1,wall2,wall3
var pressable=true;

function setup() {
  createCanvas(400, 400);
  
  ball= new Ball(50,200,20,20);
  
  wall1=new Wall(260,350,100,10);
  wall2=new Wall(260,310,10,40);
  wall3=new Wall(350,310,10,40);
}

function draw() {
  background(220);
  ball.display();
  wall1.display();
  wall2.display();
  wall3.display();
  collide(ball,wall1);
  collide(ball,wall3);
  text("press space",150,100);
 keyPressed();
}

function collide(sprite1,sprite2){
  if (touched(sprite1,sprite2)){
    pressable=false;
    sprite1.velocityX=0;
    sprite1.velocityY=0;
  }
  
}

function keyPressed(theKey){
 
  if(keyCode==32&&pressable==true){
  ball.gravity=true;
  ball.velocityX=5;

  }
}