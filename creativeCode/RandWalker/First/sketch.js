let xPos, yPos
let xPrev, yPrev
let numDirections=100
let direction=0
let step=20


function setup() {
  createCanvas(windowWidth, windowHeight);
  xPos = width/2
  yPos = height/2  
  xPrev=xPos
  yPrev=yPos
  //background(0, 0);
  frameRate(60)
}

function draw() {
  background(255, 1);

  let x = random(0, 255)
  let direction
  let newDirection=floor(random(numDirections)) * x
  let xStep=cos(newDirection * x * TWO_PI/numDirections) * step * sin(newDirection)
  let yStep=sin(newDirection * TWO_PI/numDirections) * step
  
  // let newDirection=noise(xPos,yPos)*TWO_PI
  // let xStep=cos(newDirection) * step
  // let yStep=sin(newDirection) * step
  
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



function edges(){
//   if (xPos<0) newDirection=1
//   if (xPos>width) newDirection=width-1
  
//   if (yPos<0) newDirection=4
//   if (yPos>height) newDirection
  
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