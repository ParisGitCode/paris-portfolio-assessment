lt size = 5

function setup() {
  createCanvas(400, 400);
}

function draw() {
  noFill();
  ellipse(mouseX, mouseY, size, size)

  size += 5;
  size = size % 100;
  
}
