//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//06_Exercise02 - Geometric Universe

function setup() {
  createCanvas(400, 400);
}

function draw () {
  background(0);
  var X = width/2
  var Y = height/2

  fill(mouseX, mouseY, mouseX);
  rect(0, 0, X, Y);

  fill(mouseX / 3, mouseY +28, mouseX * 5);
  rect(X, Y, X, Y);

  fill(mouseY / 2, mouseX * 6, mouseY / 5);
  rect(0, Y, X, Y);
  
  fill(mouseX / 4, mouseX / 3, mouseY * 5);
  rect(X, 0, X, Y);
}
