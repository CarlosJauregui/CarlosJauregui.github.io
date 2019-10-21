function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(mouseIsPressed){
    fill(mouseX / 3, mouseY / 2, 85);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}