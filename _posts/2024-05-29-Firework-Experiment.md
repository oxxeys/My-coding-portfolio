---
title: "Firework Experiment"
date: 2024-05-29
---
This experiment plays with ellipses and making them move in random ways as to immitate fireworks.

The following section was replicated from an in class demo, alongside a classmate:

To start with creating a firework, we must create an ellipse that will function as one of the falling fragments of a firework. We do this in a class as later on we want to create a lot of these falling fragments, which will all add up to create the impression of a firework exploding.
```
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
```
The above code creates a class named Particle, sets it x and y positions, then moves it along the x axis by its speed. This comes together to create a simple ellipse that moves to the right.
[Move the ellipse to the right](/My-coding-portfolio/_creativeCode/Firework\Move-to-right/index.html)

From here the next goal was to make the ellipse move randomly, which the following code does;
```
    this.a=random(TWO_PI)
    this.moveX=cos(this.a)*this.speed
    this.moveY=sin(this.a)*this.speed
```
The above picks a random angle of a full circle then converts that to a x and y coordinate 
[Move the ellipse randomly](/My-coding-portfolio/_creativeCode/Firework\Move-randomly/index.html)

From here I added a number of things to the experiment:
Firstly a mouse pressed function was added as to have the firework spawn when the mouse is clicked.
```
function mousePressed(){
  firework=new Firework(mouseX,mouseY, random(20,500))
}
```
The above means that the particle will be created whenever the mouse is pressed. This uses the firework class which is a class that creates an array that holds a random number of the particles from the Particle class.
```

class Firework{
  constructor(x,y,n){
    this.p=[]
    this.numParticles=n
    for(let i=0; i<this.numParticles; i++){
      this.p.push(new Particle(200,200))
    }
  }

    update(){

      
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
```
Upon updating, the class also checks if the particle is showing and if not, it removes it from the array. In the update function there is also a piece of text which displays how many particles there currently are. 
```
    this.speed=random(0.2,1.5)
    this.fall=0
    this.gravity=0.006
```
```
       this.y+=this.fall
    this.fall+=this.gravity
    return this.y<height
  }
  
  show(){
    fill(255,0,0)
    noStroke()
    ellipse(this.x,this.y, 5)
  }

```
Speed, gravity and all were all also added in the particle class which allowed me to create more realistic fireworks that fell down based on gravity. I also updated the show() function as to include stying of the firework
[Last code of the class demo](/My-coding-portfolio/_creativeCode/Firework\Red-Explosion/index.html)

This is where the in class demo ends.

The two last things I did do with my classmate was add random colours to the firework, and make the firework fade over its lifetime.
```
    r = random(0,255); //generating random colours, a different set each time mouse pressed
    g = random(0,200); 
    b = random(0,200);
```
```
  show(){
     fill(r/this.ttl*this.lifeSpan,g/this.ttl*this.lifeSpan,b/this.ttl*this.lifeSpan) //fills with random colours that change over time
     ellipse(this.x, this.y, this.size/15) //gets smaller over time
```
r is the colour, ttl is the time to live of the particle (set equal to its life span just above). The code takes the rgb colour and then divides it by how long it will be alive then times that result by its life span, which results in the colour fading to rgb 0 before it reaches the end of its life. The size is also made smaller over time as to recreate a fizzle out effect.

This is how the page looks after a mouse click at this point:
<img src="/My-coding-portfolio/images/firework-with-jean.png" alt="alt text" width="200">

From here I decided to explore with changing some values of the experiment, 

