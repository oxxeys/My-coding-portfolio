let pg
let verts=[]
let maxVerts = 150
let x=0
let y=0

function setup() {
  createCanvas(400, 400);
  pg = createGraphics(400,400)
  frameRate(60)
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
  
  pg.line(x,y,mouseX,mouseY)
  clear()
}

function draw() {
  background(0, 50)
  if(mouseIsPressed){
    //let d=dist(pmouseX,pmouseY,mouseX,mouseY)
    //line(pmouseX,pmouseY,mouseX,mouseY)
    strokeWeight(1)
    let ellipseColour=color(150, 100, 100, 100)
    fill(ellipseColour)
    noStroke()
    //ellipse(mouseX,mouseY, 20)
    //line(x,y,mouseX,mouseY)
    
    
    beginShape()
    verts.forEach(function(vert){
      vertex(vert.x, vert.y)
    })
    
    endShape()
    verts.push({x:mouseX, y: mouseY})
    
    if(verts.length>maxVerts){
      verts.shift()
    }
  }
  //pg.background(200)
  image(pg, 0, 0)
  
}