function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  var g = 15;
  color_r = 0
  color_g = 0
  color_b = 0
}



function draw() {
  if(mouseIsPressed){
    clear()
  }
  color_r = color_r + 1
  color_g = color_g + 2
  color_b = color_b + 3

  if (color_r > 250){
    color_r = 0
  }
  if (color_g > 250){
    color_g = 0
  }
  if (color_b > 250){
    color_b = 0
  }
  rectMode(CENTER);
  translate(mouseX / mouseX, mouseY / mouseY);
  translate(p5.Vector.fromAngle(millis() / 500, 80));
  fill(color_r, color_g, color_b)
  rect(mouseX, mouseY, 90, 90);
}