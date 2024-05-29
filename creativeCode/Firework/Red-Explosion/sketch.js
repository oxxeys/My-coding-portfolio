let firework 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 10);
  if(firework){
  firework.update()
  }
}

function mousePressed(){
  firework=new Firework(mouseX,mouseY, random(20,500))
}


class Firework{
  constructor(x,y,n){
    this.p=[]
    this.numParticles=n
    for(let i=0; i<this.numParticles; i++){
      this.p.push(new Particle(200,200))
    }
  }

    update(){
      // this.p.forEach(function(tempVar,i){
      //   if (tempVar.update()){
      //     tempVar.show()
      //   } else{
      //     this.p.splice(i,1)
      //   }
      // })
      
      for(let i=this.p.length-1; i>=0; i--){
        if(this.p[i].update()){
        this.p[i].show()
      } else {
        // remove it
        this.p.splice(i,1)
      }
    }   
      fill(255)
      text(this.p.length,20,20)
  }
}
    
class Particle{
  constructor(x,y){
    this.x=x
    this.y=y
    this.a=random(TWO_PI)
    this.speed=random(0.2,1.5)
    this.fall=0
    this.gravity=0.006
    this.moveX=cos(this.a)*this.speed
    this.moveY=sin(this.a)*this.speed
  }
  
  update(){
    this.x+=this.moveX
    this.y+=this.moveY
    this.y+=this.fall
    this.fall+=this.gravity
    return this.y<height
  }
  
  show(){
    fill(255,0,0)
    noStroke()
    ellipse(this.x,this.y, 5)
  }
  
}