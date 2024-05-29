---
title: "Random Walker"
date: 2024-05-29
---

This experiment is loosely inspired by Vera Molnar, who was a well known early creative coder/computer artist. One of Vera's most well known pieces is (Des)Ordres, which is a piece containing squares that are all alligned, forming a appealing pattern as can be seen below: 

<img src="/My-coding-portfolio/images/verha_molnar_images_test.png" alt="alt text" width="200"> <br>
(image credit to: https://dam.org/museum/artists_ui/artists/molnar-vera/des-ordres/)


To begin with, I started with a in class demo that focused on randomly generating small ellipses of colour around the screen.

[In class version](/My-coding-portfolio/_creativeCode/RandWalker\First/index.html)

The main two functions that made the code run were:
```
function draw() {
  background(255, 1);

  let x = random(0, 255)
  let direction
  let newDirection=floor(random(numDirections)) * x
  let xStep=cos(newDirection * x * TWO_PI/numDirections) * step * sin(newDirection)
  let yStep=sin(newDirection * TWO_PI/numDirections) * step

  xPrev=xPos
  yPrev=yPos
  xPos+=xStep
  yPos+=yStep
  
  edges()
  
  //line(xPrev,yPrev,xPos,yPos)
  
  let a=random(1,255)
  let b=random(1,255)
  let c=random(1,255)
  stroke(a, b, c)
  fill(a,b,c)
  
  ellipse(xPos, yPos, 1)
}
```
The draw function draws an ellipse with the x and y pos using xStep and yStep, then records the position in xPrev and yPrev which act as a history of where the dot was last drawn.

This previous position is then used in the edges function, as a way to wrap the path around if it reaches the edge of the screen.
```
function edges(){
  if (xPos<0){
     xPos=width-1
     xPrev=xPos
  }
  
   if (xPos>width){
     xPos=1
     xPrev=xPos
   }
  
     if (yPos<0){
     yPos=height-1
     yPrev=yPos
     }
  
   if (yPos>height){
     yPos=1
     yPrev=yPos
   }
}
```
the if statments simply checks if the x/y position is at the width (or is less than 0 in the case for the reverse), and if returned as true then it will move the position to the other end of the screen.

This is where the in class demo ended. 
From here I took the random walker and I tried a number of smaller little things:

I added a mouse down function as to make the code run only when the mouse is held down. This made the piece more interactive which I enjoyed.
```
if (mouseIsPressed) {ellipse(xPos + randNum, yPos + randNum, 1)} 
```
<img src="/My-coding-portfolio/images/rand_walker.png" alt="alt text" width="200">


Although the piece was interactive, I wanted it to feel like the user was also having a conversation with the machine, therefore I increased the size of the users dot and added back in a second ellipse that was automatically placed.
```
if (mouseIsPressed) {ellipse(xPos + randNum, yPos + randNum, 5)} 
  ellipse(yPos, xPos, 1)
```

[In class version](/My-coding-portfolio/_creativeCode/RandWalker\Second/index.html)








