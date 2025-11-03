This was the first lesson on p5.js. On the sketch.js, I created multiple squares as the starter activity.

I pretty much was following the class for this lesson. We were experimenting with layering and color by creating a series of overlapping squares on a canvas. I began by setting up a 640×480 pixel canvas in the setup() function and gave it a light gray background using background(230). I also applied a custom stroke color using stroke(20, 200, 200) and set the stroke weight to 10 pixels to give each square a bold outline.

In the draw() function, I created five squares of increasing brightness and size. I used the fill() function to assign each square a different shade of gray, starting with black (fill(0)) and gradually increasing the brightness up to a very light gray (fill(220)). Each square is drawn using the rect() function, and I adjusted their positions so they overlap slightly, creating a layered effect.
