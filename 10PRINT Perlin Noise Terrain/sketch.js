var inc = 0.05;

var sizeSquared = 600;
var slashSize = 6;

function setup()
{
  createCanvas(sizeSquared, sizeSquared);
}

function draw()
{
  clear();
  background(0);

  var yoff = 0;
  for(var x = 0; x < sizeSquared; x += slashSize)
  {
    var xoff = 0;
    
    for(var y = 0; y < sizeSquared; y += slashSize)
    {
        var n = noise(xoff, yoff) * 100;

        stroke(n * 255 / 100);

        if(n < 50)
        {
          line(x, y, x + slashSize, y + slashSize);
        }
        //For added effect...
        /*
        if(n >= 0 && n < 25)
          line(x, y, x + slashSize, y + slashSize);
        else if(n >= 25 && n < 50)
          line(x + slashSize / 2, y + slashSize, x + slashSize / 2, y);
        else if(n >= 50 && n < 75)
          line(x + slashSize, y + slashSize / 2, x, y + slashSize / 2);
        */
        else
        {
          line(x, y + slashSize, x + slashSize, y);
        }

        xoff += inc;
    }

    yoff += inc;
  }

  noLoop();
}
