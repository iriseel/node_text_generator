
let font;
let points = [];
let t = 0;

function preload() {
  font = loadFont("assets/fonts/MoMA-Sans-Bold.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  points = font.textToPoints('Please make sure this person and their nurse acquaintance are all well and good and awesome for manyfold days ahead.', 100, 300, 200, {
    sampleFactor: 0.2,
    simplifyThreshold: 0
  });
  noStroke();
}

function draw() {
  background(255);
  
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let offset = sin(t + i * 0.3) * 10;
    let x = pt.x + cos(t + i);
    let y = pt.y + sin(t + i);

    // Draw radial gradient effect with fading circles
    for (let r = 10; r > 0; r--) {
      fill(lerpColor(color('#ff0080'), color('#00cfff'), r / 10));
      rect(x, y, r, r);
    }
  }

  t += 0.01;
}
