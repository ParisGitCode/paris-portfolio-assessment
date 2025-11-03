// I-m creating a simple camera with a frame/

let cam;

function preload() {
// Here I loaded a bow image
  bow = loadImage("bow.png");
}

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.size(640, 480);
  cam.hide();
}

function draw() {
  background(255);
  image(cam, 0, 0, width, height);
  noFill();
  stroke(255, 105, 180); //  I made the border hot pink, so this is how I did it.
  strokeWeight(10);
  rect(0, 0, width, height);

  //  Ten I placed the image at the top center.
  imageMode(CENTER);
  image(bow, width / 2, 60, 100, 60)
}
