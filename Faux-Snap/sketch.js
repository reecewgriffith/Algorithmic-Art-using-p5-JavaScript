var ctracker;

function setup() {

    // setup camera capture
    createCanvas(390, 240);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
  
    // hide video feed
    // capture.hide();
  
    // setup canvas
    var cnv = createCanvas(390, 240);
    cnv.position(0, 0);

    // setup tracker
    ctracker = new clm.tracker();
    ctracker.init(pModel);
    ctracker.start(capture.elt);

    noStroke();
}

function draw() {
    background(255);
    image(capture, 0, 0, 320, 240);
  
    // get array of face marker positions [x, y] format
    var positions = ctracker.getCurrentPosition();
  
    for (var i = 0; i < positions.length; i++) {
      // set the color of the ellipse based on position on screen
      fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);
      // draw ellipse at each position point
      ellipse(positions[i][0], positions[i][1], 10, 10);
    }
  
  fill(255,0,0);
  
  // make sure that the array is there
    if (positions.length > 0) {
      
      // position 63 is the center of the nose
      // you can see with live preview, that i have made a sort of clown nose
      var noseX = positions[62][0]; 
      var noseY = positions[62][1];
      ellipse(noseX, noseY, 25, 25);
    }
  
    /* NOTE: I have mapped all the positions with the dots spread across your
    face. Each position can be a location for a shape, or what have you. In 
    this way, we can make a simple snapchat type filter. Enjoy! Also note, 
    that if the position you desire is not on the face map, for example the
    cheeks, you can do some math ie: add pixel units to a tracking position
    in order to draw a shape that "seemingly follows" the cheek location. */
}