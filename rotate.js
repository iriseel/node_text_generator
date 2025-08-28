let font;
let points = [];
let tracker = 0; // Time tracker for animation

function preload() {
      font = loadFont("assets/fonts/moma-sans-bold.otf");
    icon = loadImage('assets/img/morakana_cleo.png');     // Your custom icon/image
}

function setup() {
  createCanvas(1000, 1000);
  textSize(450);

  // Generate points along the text path
  points = font.textToPoints('A', 50, 200, 200, {
    sampleFactor: 0.25, // controls the number of points
    simplifyThreshold: 0
  });

  noFill();
  imageMode(CENTER); // Center the icon on each point
}

function draw() {
  background(255);

  // Animate circle along points
  let speed = 1;
  let idx = floor((tracker % points.length));
  let pt = points[idx];

  // Draw circle or icon
  fill("orange");
  noStroke();
  
  for (let i = 0; i < 40; i++) {
    let offset = (tracker + i * 10) % points.length;
    let pt = points[offset];
    image(icon, pt.x, pt.y, 20, 20);
  }

  tracker += speed;
}
