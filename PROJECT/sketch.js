//function setup() {
//  createCanvas(400, 400);
//}

//function draw() {
//  background(220);
//}



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
