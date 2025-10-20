let person = 55; 
let cold = false;
let home; 
let kitchen = "red is a great colour"
console.log(home)
let x; 
let y; 

function setup() {
  createCanvas(600, 400);
  let pet = "cat is big fgfgfg fgfgfg"
  x = random(0, 600)
  y = random(0, 400)
}

function draw() {
  //background(220);
  //circle
  fill(0,255,0);
  circle(x, y, 50);
  person = height/2;
  console.log(person)
  // The text
  fill(255,0,0);
  textSize(30);
  text(kitchen, 100, 100)
}

function draw() {
  background(320);
  circle(30,50,30)
  fill(0,255,0);
  circle(x, y, 50);
  fill(255,0,0);
  textSize(30);
  text(kitchen, 100, 100)
}

