var inc = 0.05;

var sizeSquared = 600;
var slashSize = 12;

var x = 0, y = 0;
var xoff = 0, yoff = 0;

function setup()
{
  createCanvas(sizeSquared, sizeSquared);
  background(0);
}

function draw()
{
  var n = noise(xoff, yoff) * 100;

  stroke(n * 255 / 100);

  if(n < 50)
  {
    line(x, y, x + slashSize, y + slashSize);
  }
  else
  {
    line(x, y + slashSize, x + slashSize, y);
  }

  x += slashSize;

  xoff += inc;

  if(x >= sizeSquared)
  {
    x = 0;
    xoff = 0;

    y += slashSize;
    yoff += inc;
  }
}
