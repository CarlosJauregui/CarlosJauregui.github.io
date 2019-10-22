function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let color_x = windowWidth / 255
  let color_y = windowHeight / 255
  let color_xy = (sqrt(pow(windowWidth, 2) + pow(windowHeight, 2))) / 255
  let mouse_xy = (mouseX + mouseY) / 2
  if(mouseIsPressed){
    fill(255);
  } else {
    fill(floor(mouseX / color_x), floor(mouse_xy / color_xy), floor(mouseY / color_y));
  }
  ellipse(mouseX, mouseY, 80, 80);
}