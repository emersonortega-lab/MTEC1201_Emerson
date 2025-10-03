let Night = false;

function setup() {
  createCanvas(2000, 1000);
}

function draw() {
  if (Night) {
    // night sky
    background(25, 32, 36);

    // draw 200 stars
    noStroke();
    for (let stars = 0; stars < 200; stars++) {
      let x = random(width);
      let y = random(height / 2);
      let b = random(150, 255); // brightness
      fill(b);
      circle(x, y, 3);
    }

    // moon
    fill(255);
    circle(1100, 90, 200);
  } else {
    // day sky
    background(108, 183, 230);

    // sun
    fill(255, 242, 1);
    circle(1100, 90, 200);
  }

  // ground
  fill(54, 141, 66);
  rect(0, 500, 2000, 1000);

  // house
  fill(243, 243, 181);
  rect(100, 370, 130, 130);

  // roof
  fill(235, 105, 88);
  triangle(100, 370, 165, 320, 230, 370);

  // door
  fill(119, 99, 67);
  rect(155, 470, 20, 30);

  // windows
  fill(150, 215, 241);
  rect(120, 470, 20, 20);
  rect(120, 410, 20, 20);
  rect(155, 410, 20, 20);
  rect(195, 410, 20, 20);
  rect(195, 470, 20, 20);
}

function mousePressed() {
  // toggle night/day
  Night = !Night;
}
