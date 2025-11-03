// This was a task for my creative portfolio, the creation of arrays and loops for random artwork.

let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Hrre I'm listing characters.
let charArray = []; // Here I'm turnoing it into an array.

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textAlign(CENTER, CENTER);
  textSize(16); // Here I'm setting the text size to 16.
  frameRate(10); // And the frame rate to 10 for the movement of the letters.

  // Here I made a for loop and put random characters at the start. This was extremely difficult though, and was the most time consuming part.
  for (let i = 0; i < 10; i++) { // Basically here I'm feclaring the value of i, and for when i is less than 10 is when this is valid.
    let c = chars[floor(random(chars.length))]; // This makes a random character length. Floor rounds it to the nearest whole number.
    charArray.push(c); // .push() adds more items to the array, so this adds to the variable 'c'.
  }
}

function draw() {
  // This was added since it sets raandom numbers and latters in a list.
  stroke(random(255), random(255), random(255));
  strokeWeight(random(1, 5));

  //  This draws the random lines across all areas of the page.
  let area1 = random(width);
  let area2 = random(height);
  let area3 = random(width);
  let area4 = random(height);
  line(area1, area2, area3, area4);

  // This loops through the character array and draw each one at a random position, similar to before.
  for (let i = 0; i < charArray.length; i++) {
    fill(random(255), random(255), random(255)); // This randomly fills any hue for each character
    let tx = random(width);
    let ty = random(height);
    text(charArray[i], tx, ty);
  }

  }

// From  a stylistic point of view it doesn-t look ideal but it-s functional.
