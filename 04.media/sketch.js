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


let hum; 
let img; 
function preload(){
  img = loadImage('Antenna.jpg');
    hum = loadSound("humm.wav");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}
function draw() {
  image(img, 0, 0, windowWidth, 500);
  image(capture, 50, 10, 320, 240);
  filter(INVERT); 
}
function mouseClicked(){
  hum.loop();
  hum.amp(0.7); 
}
