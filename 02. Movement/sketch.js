// Movemennt, generative art piece
// Here I put random text with names of animals in alphabetical order for my artwork.

let animals = ["Cat", "Dog", "Elephant", "Tiger", "Lion", "Zebra", "Giraffe", "Penguin", "Koala", "Rabbit","Snake"];

function setup() {
  createCanvas(600, 400);
  background(255);
  textSize(10);
}
// Here I set the text size, canvas size and the background which was already preset.

function draw() {

  let first = random(width); // Then I added randokm areas that the text can go into.
  let first2 = random(height);

  let r = random(255); // And some colours.
  let g = random(255);
  let b = random(255);
  fill(r, g, b);

  text(animals, first, first2);

  }

// Ultimately it worked, but not the way I wanted. It doesn't seperate the array values at all, instead it executes the array evenly.
