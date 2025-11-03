/*

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

*/

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


/* 
Mouse events

let select = 0;
let size = 30;
let rgba = [20, 20, 20, 20]; 

function setup() {
  noStroke(); 
  createCanvas(800, 800);
}

function draw() {
  fill(rgba);
  ellipse(mouseX, mouseY, size, size);
  if(select!=2){
    size = random(10, 200);
  }
}

function mouseClicked() {
  
   console.log('select: '+select); 
  
  rgba[select] = random(0,255); 
  rgba[3] = random(5,50); 
  select++; 
 
  if(select >= 3)
    console.log('reset select'); 
    select = 0; 
  }
  return false; 
}

*/
