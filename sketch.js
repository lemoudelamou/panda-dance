let b1;
let c;
let n1;
let n2;
let shape = [];
let song;
let song1;
let amp;
let direction;
let freq;
let length;
let stars = [];
let rectangles = [];
let backgroundImage;
let blink = false;
let currentShape = "circle";
let img1;
let img2;
let playButton;
let stopButton;
let volumeSlider;

function preload() {
  song = loadSound("fun.mp3");
  song1 = loadSound("baby-shark.mp3");
  backgroundImage = loadImage("moon3.jpeg");
  img1 = loadImage("mil.jpeg");
  img2 = loadImage("mi.jpeg");

}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  background(252, 186, 211);
  b1 = new Panda(width / 2, height / 2, -49, -24, 49, -24, 17, 32, 100, 1);
  n1 = new Frame(width * 1.5 / 5, height / 2 - 50, 3, img1);
  n2 = new Frame(width * 4 / 5, height / 2 - 50, 3, img2);

  amp = new p5.Amplitude();
  length = 10;

  playButton = createButton("Play Fun");
  playButton.position(20, 20);
  playButton.mousePressed(playFunMusic);

  playButton1 = createButton("Play Baby Shark");
  playButton1.position(20, 50);
  playButton1.mousePressed(playBabySharkMusic);

  stopButton = createButton("Stop");
  stopButton.position(20, 80);
  stopButton.mousePressed(stopMusic);

  volumeSlider = createSlider(0, 1, 0.5, 0.01);
  volumeSlider.position(20, 110);
  volumeSlider.style("width", "120px");
  volumeSlider.input(updateVolume);

  

  for (let x = 150; x < width; x += 250) {
    for (let y = 100; y < height; y += 250) {
      shape.push(new Shapes(x, y, 1));
    }
  }

  setInterval(toggleShapes, 5000);


}

function draw() {



  if (blink) {
    if (millis() % 1000 < 500) {
      background(242, 150, 159);
    } else {
      background(backgroundImage);
    }
  } else {
    background(backgroundImage);
  }

  song.setVolume(volumeSlider.value());
  song1.setVolume(volumeSlider.value());


  if ((song.isPlaying() || song1.isPlaying()) && currentShape === "circle") {
    drawCircles();
  } else if ((song.isPlaying() || song1.isPlaying()) && currentShape === "triangle") {
    drawTriangles();
  } else if ((song.isPlaying() || song1.isPlaying()) && currentShape === "pentagon") {
    drawPentagons();
  }

  if (random(1) < 0.08) {
    let x = width / 2;
    let y = height;
    let rad = random(10, 30);
    stars.push(new Star(x, y, rad));
  }

  for (let i = stars.length - 1; i >= 0; i--) {
    let b = stars[i];
    b.move();
    b.fall();
    b.checkEdge();
    b.display();

    if (b.isDone) {
      stars.splice(i, 1);
    }
  }

  switch (direction) {
    case "UP":
      for (let i = shape.length - 1; i >= 0; i--) {
        let c = shape[i];
        c.sizeChange();
        c.display();
      }

      if (song1.isPlaying()) {
        b1.textBubble();
      }

      b1.dance1();
      break;

    case "DOWN":
      for (let i = shape.length - 1; i >= 0; i--) {
        let c = shape[i];
        c.sizeChange();
        c.display2();

        if (c.isDone) {
          shape.splice(i, 1);
        }
      }

      if (song1.isPlaying()) {
        b1.textBubble();
      }

      b1.dance2();
      break;

    case "LEFT":
      n1.sizeChange();
      n1.display();
      n2.sizeChange();
      n2.display();

      b1.move();
      b1.dance3();
      b1.sizeChange();

      b1.y += sin(frameCount * 0.1) * 2;

      break;

    case "RIGHT":
      n1.sizeChange();
      n2.sizeChange();
      n1.display2();
      n2.display2();

      b1.move();
      b1.dance4();
      b1.sizeChange();
      break;

    default:
      break;
  }

  if (song1.isPlaying()) {
    b1.textBubble();
  }

  b1.display();

  drawTitle();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    direction = "UP";
    toggleShapes();
  } else if (keyCode === DOWN_ARROW) {
    direction = "DOWN";
    toggleShapes();
  } else if (keyCode === LEFT_ARROW) {
    direction = "LEFT";
    toggleShapes();
  } else if (keyCode === RIGHT_ARROW) {
    direction = "RIGHT";
    toggleShapes();
  }
}

function playFunMusic() {
  if (!song.isPlaying()) {
    song1.stop();
    song.play();
    blink = true;
  }
}

function playBabySharkMusic() {
  if (!song1.isPlaying()) {
    song.stop(); 
    song1.play();
    blink = true;
  }
}

function stopMusic() {
  song.stop();
  song1.stop();
  blink = false;
}

function updateVolume() {
  song.setVolume(volumeSlider.value());
  song1.setVolume(volumeSlider.value());
}


function drawCircles() {
  push();
  let level = amp.getLevel();
  let dia = map(level, 0, 1, 0, 10000);

  noFill();
  stroke(242, 150, 159);
  strokeWeight(30);
  let outerDia = dia * 1.5;
  ellipse(width / 2, height / 2 - 50, outerDia, outerDia);

  noFill();
  stroke(255);
  strokeWeight(10);
  let innerDia = dia * 0.5;
  ellipse(width / 2, height / 2 - 50, innerDia, innerDia);

  noFill();
  stroke(255);
  strokeWeight(5);
  let anotherDia = dia * 0.3;
  ellipse(width / 2, height / 2 - 50, anotherDia, anotherDia);
  pop();
}

function drawTriangles() {
  push();
  let level = amp.getLevel();
  let dia = map(level, 0, 1, 0, 10000);

  noFill();
  stroke(242, 150, 159);
  strokeWeight(30);
  let outerDia = dia * 1.5;
  drawTriangle(width / 2, height / 2 - 50, outerDia);

  noFill();
  stroke(255);
  strokeWeight(10);
  let innerDia = dia * 0.5;
  drawTriangle(width / 2, height / 2 - 50, innerDia);

  noFill();
  stroke(255);
  strokeWeight(5);
  let anotherDia = dia * 0.3;
  drawTriangle(width / 2, height / 2 - 50, anotherDia);
  pop();
}

function drawPentagons() {
  push();
  let level = amp.getLevel();
  let dia = map(level, 0, 1, 0, 10000);

  noFill();
  stroke(242, 150, 159);
  strokeWeight(30);
  let outerDia = dia * 1.5;
  drawPentagon(width / 2, height / 2 - 50, outerDia);

  noFill();
  stroke(255);
  strokeWeight(10);
  let innerDia = dia * 0.5;
  drawPentagon(width / 2, height / 2 - 50, innerDia);

  noFill();
  stroke(255);
  strokeWeight(5);
  let anotherDia = dia * 0.3;
  drawPentagon(width / 2, height / 2 - 50, anotherDia);
  pop();
}

function drawTriangle(x, y, sideLength) {
  const heightMultiplier = Math.sqrt(3) / 2; // Height of an equilateral triangle
  const halfSide = sideLength / 2;
  const height = sideLength * heightMultiplier;

  triangle(x, y - height / 2, x - halfSide, y + height / 2, x + halfSide, y + height / 2);
}

function drawPentagon(x, y, sideLength) {
  const angle = TWO_PI / 5;
  const radius = sideLength / (2 * sin(angle / 2));

  beginShape();
  for (let i = 0; i < 5; i++) {
    const theta = i * angle;
    const px = x + cos(theta) * radius;
    const py = y + sin(theta) * radius;
    vertex(px, py);
  }
  endShape(CLOSE);
}

function toggleShapes() {
  if (currentShape === "circle") {
    currentShape = "triangle";
  } else if (currentShape === "triangle") {
    currentShape = "pentagon";
  } else if (currentShape === "pentagon") {
    currentShape = "circle";
  }
}

function drawTitle() {
	let title = "▁ ▂ ▄ ▅ ▆ ▇ █   🎀  𝒫𝒶𝓃𝒹𝒶 𝒟𝒶𝓃𝒸𝑒 𝒫𝒶𝓇𝓉𝓎  🎀   █ ▇ ▆ ▅ ▄ ▂ ▁";
	let titleSize = 32;
	let titleX = width / 2;
	let titleY = 40;
	textAlign(CENTER);
	textSize(titleSize);
	fill(255);
	text(title, titleX, titleY);
  }