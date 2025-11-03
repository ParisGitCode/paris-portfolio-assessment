//function setup() {
//  createCanvas(400, 400);
//}

//function draw() {
//  background(220);
//}


/*
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(select==0){
    rgb = [255, 0, 0];
  }else{
    rgb = [0,0,0];
  }
  fill(rgb);
  ellipse(mouseX, mouseY, 100);
}

function mouseClicked() {
  if(select==0){
    select=1;
  }else{
    select=0;
  }
  return false;
}

*/

// Here I'm creating random lines and shapes
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  frameRate(10);
}

function draw() {
  stroke(random(255), random(255), random(255));
  strokeWeight(random(1, 5));

  let area1 = random(width);
  let area2 = random(height);
  let area3 = random(width);
  let area4 = random(height);
  line(area1, area2, area3, area4);
  // I'm using random areas to place the lines and letters

  fill(random(255), random(255), random(255));
  noStroke();

  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let char = chars.charAt(floor(random(chars.length)));
  let tx = random(width);
  let ty = random(height);
  text(char, tx, ty);
}
