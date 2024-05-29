let xPos, yPos
let xPrev, yPrev
let numDirections=4
let direction=0
let step=20


function setup() {
  createCanvas(windowWidth, windowHeight);
  xPos = width/2
  yPos = height/2  
  xPrev=xPos
  yPrev=yPos
  //background(0, 0);
  frameRate(90)
}

function draw() {
  background(255, 1);

  let x = random(0, 255)
  let direction
  let newDirection=floor(random(numDirections)) 
  let xStep=cos(newDirection * TWO_PI/numDirections) * step
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
  
  
  randNum = floor(random(1, 5))
  if (randNum = 1) randNum = -20
  if (randNum = 2) randNum = -10
  if (randNum = 3) randNum = 0
  if (randNum = 4) randNum = 10
  if (randNum = 5) randNum = 20
  
  
  let rand1 = random(5,-5)
  let rand2 = random(10,-10)
  let rand3 = random(15,-15)
  
  square(xPos+rand1/rand2, yPos+rand1/rand3, 3)
  if (mouseIsPressed) {square(xPos + rand1, yPos+ rand1, 5)} 
  noFill()
  stroke(c,b,a)
  if (mouseIsPressed) {square(xPos + rand2, yPos+ rand2, 10)} 
  stroke(b,c,a)
  if (mouseIsPressed) {square(xPos+ rand3, yPos+ rand3, 15)} 
  
  //console.log("true")
  
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