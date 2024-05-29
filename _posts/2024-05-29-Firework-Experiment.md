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
<br>
<img src="/My-coding-portfolio/images/firework-with-jean.png" alt="alt text" width="400">

From here I decided to explore how I could take this firework, and no longer be as easy to discern that it is a firework.

The first thing I did was experiment with the background, in the class demo it was set to (0,10) as to be black with a little bit of opacity as to make the firework dissapear. I played around with changing the opacity to 0, and the colour to 100. That created the following. 

<img src="/My-coding-portfolio/images/firework-white-back-no-opacity.png" alt="alt text" width="400">

I decided I liked the result but I did change the background colour to 0 as it was not showing through. 

From here I experimented with the gravity, speed, fall and life span.



<img src="/My-coding-portfolio/images/firework-fall-0.png" alt="alt text" width="400">

This first experiment had me change the speed up, to a random number between 2.5 to 4.5. Then the other thing I did was add a random number between 0.1 to -0.1 which created the criss cross floating in the middle. I personally really like this experiment as each "firework" now looks like a water lilly.


<img src="/My-coding-portfolio/images/firework-fall-negative.png" alt="alt text" width="400">

The next experiment I did was to play around with the fall. After setting the fall to -5, I found that it created a much larger flower looking shape that is resemblant of grass textures in video games. The reason it looks as it does is because I kept the random gravity which means that each particle is pulled down or up randomly which creates the nice variations between them.


<img src="/My-coding-portfolio/images/firework-fall-positive.png" alt="alt text" width="400">

After the above experiment, I had to try a positive fall. This resulted in the fireworks displaying as rings and falling down. The fall is set to a much bigger number compared to above which is why the pull on each particle is much much stronger.

<img src="/My-coding-portfolio/images/firework-speed-low-gravity-high.png" alt="alt text" width="400">

As for a final experiment, I set the speed to a much lower random number (-0.5 to 0.5). This caused an intresting effect where the "fireworks" were not being pulled so much to the side as they were being pulled down. This was caused from the gravity pulling the particles down much more as the slower (and potentially negative) speed meant they were slower to go outwards. 


[The final p5 project](/My-coding-portfolio/_creativeCode/Firework\Final/index.html)
