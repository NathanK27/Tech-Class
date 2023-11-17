function setup() {

createCanvas(400, 400);

strokeWeight(4);

}

function draw()

{

  background(125, 255, 125);

  fill(255, 192, 203);

// legs

  rect(125, 250, 25, 125);
  rect(250, 250, 25, 125);

  fill(0, 0, 0)
  rect(125, 340, 25, 40);
  rect(250, 340, 25, 40);

// body

  fill(255, 192, 203)

  ellipse(200, 200, 250, 200);
  
// ears

  ellipse(175, 150, 25, 50);
  ellipse(225, 150, 25, 50);

// face

  circle(200, 200, 120);

// left eye

  fill(255, 255, 255)

  circle(180, 175, 30)

  fill(0, 0, 0)

  circle(180, 175, 15)

// right eye

  fill(255, 255, 255)

  circle(220, 175, 30)

  fill(0, 0, 0)

  circle(220, 175, 15)

// nose

  fill(255, 192, 203)

  ellipse(200, 210, 40, 25)

  fill(0, 0, 0)

  circle(190, 210, 10, 10)

  circle(210, 210, 10, 10)

// mouth

  fill(255, 192, 203)

  angleMode(DEGREES)
  arc(200, 230, 60, 40, 0, 180, OPEN)

}
