function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(20);
  rectMode(CENTER);
  mousePress = 0 
  // What else goes here?
}

function draw() {
  r = random(256)
  g = random (256)
  b = random(256)
  fill (r,g,b)
  let w = [10, 20, 30, 40, 50]
  let width = random(w) + mousePress
  rect(mouseX,mouseY,width) //random width of squares
  print ("the last color of square was"+r,g,b)
}

function mousePressed() {
 mousePress += 10
  
 
}

function keyPressed() {
  background (r,g,b)//random color background when you press a key
}
