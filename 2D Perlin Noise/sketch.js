var yoff = 0.0;        // 2nd dimension of perlin noise
var yiff = 0.0;
var yuff = 0.0;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    noFill(255);
    strokeWeight(5);
    stroke(random(255),random(255), 255);
    
    // We are going to draw a polygon out of the wave points
    beginShape(); 
  
    var xoff = 0;       // Option #1: 2D Noise
    // var xoff = yoff; // Option #2: 1D Noise
  
    // Iterate over horizontal pixels
    for (var x = 0; x <= width; x += 10) {
        // Calculate a y value according to noise, map to 
    
        // Option #1: 2D Noise
        var y = map(noise(xoff, yoff), 0, 1, 200,300);

        // Option #2: 1D Noise
        //var y = map(noise(xoff), 0, 1, 200,300);
    
        // Set the vertex
        vertex(x, y); 
        // Increment x dimension for noise
        xoff += 0.05;
    }
    // increment y dimension for noise
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    
    
    
    stroke(random(255), 255, random(255));
    
    // We are going to draw a polygon out of the wave points
    beginShape(); 
  
    var xiff = 0;       // Option #1: 2D Noise
    // var xoff = yoff; // Option #2: 1D Noise
  
    // Iterate over horizontal pixels
    for (var a = 0; a <= width; a += 10) {
        // Calculate a y value according to noise, map to 
    
        // Option #1: 2D Noise
        var b = map(noise(xiff, yiff), 0, 1, 500,300);

        // Option #2: 1D Noise
        // var y = map(noise(xoff), 0, 1, 200,300);
    
        // Set the vertex
        vertex(a, b); 
        // Increment x dimension for noise
        xiff += 0.05;
    }
    // increment y dimension for noise
    yiff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    
    
    
    stroke(255,random(255), random(255));
    
    // We are going to draw a polygon out of the wave points
    beginShape(); 
  
    var xuff = 0;       // Option #1: 2D Noise
    // var xoff = yoff; // Option #2: 1D Noise
  
    // Iterate over horizontal pixels
    for (var n = 0; n <= width; n += 10) {
        // Calculate a y value according to noise, map to 
    
        // Option #1: 2D Noise
        var m = map(noise(xuff, yuff), 0, 1, 0,300);

        // Option #2: 1D Noise
        // var y = map(noise(xoff), 0, 1, 200,300);
    
        // Set the vertex
        vertex(n, m); 
        // Increment x dimension for noise
        xuff += 0.05;
    }
    // increment y dimension for noise
    yuff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    
    
    
    fill(0);
    stroke(0);
    rect(0, 0, 5, height);
    
    fill(0);
    stroke(0);
    rect(width - 5, 0, 10, height);
    
    fill(0);
    stroke(0);
    rect(0, 0, width, 20);
    
    fill(0);
    stroke(0);
    rect(0, height - 20, width, 20);
}