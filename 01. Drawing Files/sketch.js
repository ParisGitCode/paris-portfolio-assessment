// Here I made a simple emoji smiling face as my first activity task.
function setup() {
  createCanvas(500, 400); // I made the canvas 500 x 400.
  background(255);
}

function draw() {
  background(255); // Here the background is set.


  fill(255, 255, 0); // This sets the colour of the emoji as yellow
  ellipse(200, 200, 200, 200);

  fill(0);
  ellipse(170, 200, 20, 40); 
  ellipse(230, 200, 20, 40);  // Here I'm filling in the eyes.
    
  arc(200, 240, 60, 30, 0, PI); // This PI gives the angle of the circle that the arc is in the direction of. It creates a smile.
}
// Overall for my first task this was pretty simple, the PI in the arc was something I had to research as I was unsure of why it was not working in the way I wanted it to.
