let x = 320;
let y = 180;
let xspeed = 10;
let yspeed = 5;


let r = 25;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  let rand = random(-5, 6);
  background(0);
  rect(0, mouseY - height/8, width/40, height/4)
  rect(width - width/40, y + - height/8, width/40, height/4)
  
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
    yspeed = rand
  if (y > 0 || y < 1500) {
    yspeed = -yspeed;
    }
  }
}