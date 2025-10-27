let img; 

function preload() {
  img = loadImage('Antenna.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(img, 70, 0);
}
