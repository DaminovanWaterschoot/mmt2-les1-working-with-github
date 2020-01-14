var rood = 100;
var groen = 265;
var blauw = 10;

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(100,255,0);
  frameRate(5);
}

function draw() {
rood = random (255);

stroke (255,255);
strokeWeight(5);

fill (0,0,255);
ellipse(200,200,400,400);


rect (100,100,200,200);

line (0,200,400,200);

fill (rood, 0,0);
ellipse(200,200,50,50);

}