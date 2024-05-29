let p

function setup() {
  createCanvas(400, 400);
  p= new Particle(200,200)
}

function draw() {
  background(220);
  p.update()
  p.show()
}

class Particle{
  constructor(x,y){
    this.x=x
    this.y=y
    this.a=random(TWO_PI)
    this.speed=1
    this.moveX=cos(this.a)*this.speed
    this.moveY=sin(this.a)*this.speed
  }
  
  update(){
    this.x+=this.moveX
    this.y+=this.moveY
  }
  
  show(){
    ellipse(this.x,this.y, 5)
  }
  
}