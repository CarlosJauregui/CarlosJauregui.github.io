function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  color_r = 0
  color_g = 0
  color_b = 0
  dir_r = 1
  dir_g = 1
  dir_b = 1
}

function draw() {
  if(mouseIsPressed){
    clear()
  }
  if (color_r < 0){
    dir_r = 1
  }else if(color_r > 255){
    dir_r = 0
  }
  if (color_g < 0){
    dir_g = 1
  }else if(color_g > 255){
    dir_g = 0
  }
  if (color_b < 0){
    dir_b = 1
  }else if(color_b > 255){
    dir_b = 0
  }
  
  if (dir_r == 1){
    color_r = color_r + 1
  }else if(dir_r == 0){
    color_r = color_r - 2
  }
  if (dir_g == 1){
    color_g = color_g + 2
  }else if(dir_g == 0){
    color_g = color_g - 3
  }
  if (dir_b == 1){
    color_b = color_b + 3
  }else if(dir_b == 0){
    color_b = color_b - 1
  }
  
  translate(mouseX / mouseX, mouseY / mouseY);
  translate(p5.Vector.fromAngle(millis() / 300, 60));
  fill(color_r, color_g, color_b)
  circle(mouseX, mouseY, 100);
}