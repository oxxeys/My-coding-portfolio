---
title: "Firework Experiment"
date: 2024-05-29
---
This experiment plays with ellipses and making them move in random ways as to immitate fireworks.

The following section was replicated from an in class demo:

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
