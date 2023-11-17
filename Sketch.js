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

//tail
  fill(125, 255, 125)
  arc(200, 80, 40, 40, 90, 0, OPEN)
  fill(0, 0, 0)
  rect(160, 80, 60, 1)

//flower

  rect(50, 330, 5, 60)
  fill(255, 255, 255)
  circle(52.5, 330, 30)
  fill(255, 255, 0)
  circle(52.5, 330, 15)

//cow
  fill(255, 42, 42)
  rect(330, 330, 10, 60)
  rect(370, 330, 10, 60)
  circle(355, 330, 80)
  ellipse(350, 310, 5, 10)
  ellipse(360, 310, 5, 10)
  circle(355, 330, 40)
  fill(255, 255, 255)
  circle(348, 325, 10)
  circle(362, 325, 10)
  fill(0, 0, 0)
  circle(348, 325, 0.25)
  circle(362, 325, 0.25)
  rect(350, 340, 10, 1)
  fill(255, 255, 255)
  circle(325, 330, 15)
  circle(375, 305, 10)
  circle(375, 350, 10)
}
