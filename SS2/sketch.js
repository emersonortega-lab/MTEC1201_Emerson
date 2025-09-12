function setup() {
  createCanvas(2000, 1000);

  // Six-digit hex RGB notation.
  background('#6CB7E6');

  // Ground
;fill('#368d42ff');
  rect(0, 500, 2000, 1000);

// Sun
fill('#fff201ff');
  circle(1100, 90, 200);

  // House
  
fill('#f3f3b5ff');
  rect(100, 370, 130, 130);

fill('#eb6958ff');
  triangle(100, 370, 165, 320, 230, 370);


  fill('#776343ff');
  rect(155, 470, 20, 30);

  // windows
fill('#96d7f1ff');
  rect(120, 470, 20, 20);
  
  fill('#96d7f1ff');
  rect(120, 410, 20, 20);

   fill('#96d7f1ff');
  rect(155, 410, 20, 20);

  fill('#96d7f1ff');
  rect(195, 410, 20, 20);

  fill('#96d7f1ff');
  rect(195, 470, 20, 20);
}
