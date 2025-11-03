/*
  Commenting out the while loops so the draw function works.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  let i = 0;
  while(i<500){
    r = random(20)
    circle(50+r,i,i);
    i+=10;
  
  }
}

*/

// loops 
let row = 19; 
let col = 19;   
let pad = 5;   
let sWidth, sHeight;  
let rgba = [90, 180, 200, 255];     

function setup() {
  createCanvas(windowWidth, windowHeight);
  sWidth = (width / col) - (pad + pad / col);
  sHeight = (height / row) - (pad + pad / row);
  rectMode(CENTER); 
  noStroke();
}

function draw() {
  background(200); 

  for (let i = 0; i < row; i++) {
    for (let ii = 0; ii < col; ii++) {
      let x = pad + (ii * sWidth) + (pad * ii) + (sWidth / 2);
      let y = pad + (i * sHeight) + (pad * i) + (sHeight / 2);

      fill(rgba); 
      rect(x, y, sWidth, sHeight); 

      push();
      angleMode(DEGREES);
      translate(x, y);
      rotate(i * 5 + millis() / 50);
      fill(255, 100);
      rect(0, 0, sWidth, sHeight); 
      pop();
    }
  }
}

