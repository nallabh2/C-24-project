class Ball{
  constructor(x,y,w,h){
    this.x=x;
    this.y=y;
    this.width=w;
    this.height=h;
    this.gravity=false;
    this.velocityX=0;
    this.velocityY=0;
  }
  display(){
    fill("black")
    ellipse(this.x,this.y,this.width,this.height);
    
    this.x+=this.velocityX;
    this.y+=this.velocityY;
    
    if(this.gravity==true){
    this.velocityY+=0.1
  }
  }
  
}