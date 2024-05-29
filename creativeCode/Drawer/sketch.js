

let x=0
let y=0

function setup() {
  createCanvas(400, 400);
  frameRate(60)
  background(220)
}

function mousePressed(){
  stroke(1)
  noFill()
  ellipse(mouseX,mouseY, 20)
  x=mouseX
  y=mouseY
}

function mouseReleased(){
  stroke(1)
  noFill()
  ellipse(mouseX,mouseY, 20)
  line(x,y,mouseX,mouseY)
}

function draw() {
  //background(220);
  if(mouseIsPressed){
    let d=dist(pmouseX,pmouseY,mouseX,mouseY)
    //line(pmouseX,pmouseY,mouseX,mouseY)
    strokeWeight(d/3)
    let ellipseColour=color(150, 100, 100, 100)
    fill(ellipseColour)
    noStroke()
    ellipse(mouseX,mouseY, 20)
    
  }
  strokeWeight(1)
}