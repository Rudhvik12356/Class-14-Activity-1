var ball={
  x: 39,
  y: 45,
  r: 123,
  color: ["red","lime","blue","yellow"]
};

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(220);
  ball.x = 200;
  ball.y = 200;
  
  circle(ball.x,ball.y,ball.r);
  fill(ball.color[3]);
}