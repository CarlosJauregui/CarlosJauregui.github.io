function setup() {
  createCanvas(800, 500);
}

function draw() {
  if(mouseIsPressed){
    fill(mouseX / 3, mouseY / 2, 200);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}