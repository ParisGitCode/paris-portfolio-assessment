let a = "this is ";        
let b = 'my '   
let c = 1 // a number 
let d = " poem"  

let e = "this is ";        
let f = 'my '   
let g = 2 // a number 
let h = " poem"  

let i = "i am";        
let j = ' creating' 


function setup(){
  createCanvas(windowWidth, windowHeight);
  let myText = a+b+c+d; 
  let newText = e+f+g+h;
  let newerText = i+j

	// Combine
  fill(1);
  textSize(width/50);
  textAlign(LEFT, CENTER);
  text(myText, width/2, height/2)
  text(newText, width/4, height/6)
  text(newerText, width/5, height/2)
  text(newText, width/4, height/6); 
}


