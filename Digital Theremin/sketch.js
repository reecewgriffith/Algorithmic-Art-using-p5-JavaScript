//reecewgriffith

var osc, fft;

function setup() {
    createCanvas(1280, 800);
    
    // set frequency and type
    osc = new p5.TriOsc();
    osc.amp(.5);
    
    fft = new p5.FFT();
    osc.start();
}

function draw() {
    background(0);
    
    // analyze the waveform
    var waveform = fft.waveform(); 
    beginShape();
    stroke(0, 255, 50);
    fill(0);
    strokeWeight(5);
    for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 1, height/2, 0);
        vertex(x, y);
    }
    endShape();

    // change oscillator frequency based on mouseX
    var freq = map(mouseX, 0, width, 40, 880);
    osc.freq(freq);

    var amp = map(mouseY, 0, height, 1, .01);
    osc.amp(amp);
    
    line(0, height - 425, width, height - 425);
    
    textSize(32);
    text("Welcome to the Digital Theremin", 25, height - 375);
    textSize(22);
    text("by Reece W. Griffith", 25, height - 325);
    
    noStroke();
    fill(0, 255, 50);
    textSize(22);
    text("How to use: move your mouse to interact with the program", 25, height - 225);
    
    text("Up = +Volume, Down = -Volume", 25, height - 125);
    text("Left = -Pitch, Right = +Pitch", width - 300, height - 125);
}