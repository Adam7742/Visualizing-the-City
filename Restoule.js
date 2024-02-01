function setup() {
  createCanvas(400, 400);
}
// variables
x = 30 
// X/Y = Size
y = x * 2
v = 150
// V/Y = X axis location
b = v + 100
function draw() {
  background(20, 100, 40);
  fill(220)
  rect(100, 100, 200)
  fill(200, 100, 100)
  ellipse(v, 150, x)
  fill(100, 100, 0)
  ellipse(b, 200, y)
}