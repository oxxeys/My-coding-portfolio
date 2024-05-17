let step
let numAcross=10



function setup() {
  createCanvas(1000, 1000);
  step = width/numAcross;
  frameRate (15)
}

function draw() {
  background(220, 88);
  
  for(let j=0; j<numAcross; j++){
    for(let i=0; i<numAcross; i++){
      drawTile(i, j, step)
   }
  }
}

function drawTile(across, down, step){
  let numSquares = 15+sin(frameCount)
  push()
  translate((across+0.5)*step, (down+0.5)*step)
  //angleMode(DEGREES)
  rectMode(CENTER)
  noFill()
  for(let k=numSquares-1;k>=0;k--){
    let amount = (1080 * sin(frameCount * 0.05) + 50)
    let r=random(amount)
    fill(random(40,180),random(0, 255),random(0, 255))
    stroke(random(0, 255),random(0, 255),random(0, 255))
    if(r<5){
      rect(0,0,step*k/numSquares)
    }
    
  }
  
  let x = frameCount;
  let y = 1080 * sin(frameCount * 0.05) + 50;
  point(x, y);

  //rect(0, 0, step, step)
  pop()
}  

