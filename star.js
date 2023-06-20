class Star {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.xSpd = random(-3, 3);
		this.ySpd = random(-10, -8);
		this.size = size;
		this.r = 255;
		this.g = 255;
		this.b = 255;
		this.isDone = false;
	}

	move() {
		this.x += this.xSpd;
		this.y += this.ySpd;
	}

	fall() {
		this.ySpd += 0.07;
	}

	checkEdge() {
		if (this.y > height) {
			this.isDone = true;
		}
	}

	display() {
		push();
		translate(this.x, this.y);
		noStroke();
		fill(this.r, this.g, this.b);
		star(0, 0, this.size, this.size / 2, 5);
		pop();
	}
}

// Helper function to draw a star
function star(x, y, radius1, radius2, npoints) {
	let angle = TWO_PI / npoints;
	let halfAngle = angle / 2.0;
	beginShape();
	for (let a = 0; a < TWO_PI; a += angle) {
		let sx = x + cos(a) * radius2;
		let sy = y + sin(a) * radius2;
		vertex(sx, sy);
		sx = x + cos(a + halfAngle) * radius1;
		sy = y + sin(a + halfAngle) * radius1;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}
