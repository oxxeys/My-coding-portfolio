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
    this.speed=1
  }
  
  update(){
    this.x+=this.speed
  }
  
  show(){
    ellipse(this.x,this.y, 5)
  }
  
}