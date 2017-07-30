var img;
var smallPoint, largePoint;

// to try this with your own image, 
// add an image to the file and 
// swap 'dave.jpg' for the image title
function preload() {
  img = loadImage("dave.jpg");
}

function setup() {
  createCanvas(720, 400);
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  //stroke(0);
  background(255);
  img.loadPixels();
}

function draw() {
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  rect(x, y, pointillize, pointillize);
}