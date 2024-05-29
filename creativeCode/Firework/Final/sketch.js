let firework
let r
let g 
let b 
let fc

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0,0);
  
  
  if(firework){
    firework.update()
  }
}

function mousePressed(){
    r = random(0,255); //generating random colours, a different set each time mouse pressed
    g = random(0,200); 
    b = random(0,200);
  
  firework=new Firework(mouseX, mouseY, random(2,2000))
}

class Firework{ 
  constructor(x,y,n){
    this.p=[]
    this.numParticles=n
    for(let i=0; i<this.numParticles; i++){ 
      this.p.push(new Particle(x,y))
    }
  }
  
  update(){

    
    for(let i=this.p.length-1; i>=0; i--){
      if(this.p[i].update()){
        this.p[i].show()
      } else {
        // remove it if particle off of screen
        this.p.splice(i,1)
      }
    }
    fill(255)

  }
  
}


class Particle{
  constructor(x,y){
    this.x=x
    this.y=y
    this.a=random(TWO_PI)
    this.speed=random(2.5,4.5)
    this.fall=0
    //random gravity
    this.gravity=random(0.1,-0.1) //this makes the float up effect as can be pos or neg
    this.moveX=cos(this.a)*this.speed
    this.moveY=sin(this.a)*this.speed
    this.lifeSpan=120
    this.ttl=this.lifeSpan
  }
  
  update(){
    this.x+=this.moveX
    this.y+=this.moveY
    this.y+=this.fall
    this.fall+=this.gravity
    
    this.ttl--
    this.size=this.ttl
    return this.ttl>0
    
  }
  
  show(){
     fill(r/this.ttl*this.lifeSpan,g/this.ttl*this.lifeSpan,b/this.ttl*this.lifeSpan) //fills with random colours that change over time
    noStroke()
    ellipse(this.x, this.y, this.size/15) //gets smaller over time
    line(this.x, this.y, this.size)
  }
}