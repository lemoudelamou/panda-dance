class Panda {
	constructor(x, y, x1, y1, x2, y2, x3, y3, d, sc) {
		this.x = x;
		this.y = y;
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.x3 = x3;
		this.y3 = y3;
		this.dia = d;
		this.xSpd = 0.5;
		this.ySpd = 0.5;
		this.scale = sc;
		this.sizeSpd = 0.005;
		this.r = random(255);
		this.g = random(255);
		this.b = random(255);
		this.bodyOffset = 0; // Variable for body offset in dance4
	}

	move() {
		this.x += this.xSpd;
		if (this.x > width / 2 + 50 || this.x < width / 2 - 50) {
			this.xSpd *= -1;
		}
	}

	dance1() {
		freq = radians(frameCount * 2.5);
		let sinValue = sin(freq) * length;
		let cosValue = cos(freq) * length;
		this.x1 = sinValue - 19;
		this.y1 = cosValue - 52;
		this.x2 = -(sinValue - 19);
		this.y2 = cosValue - 52;

		// Update body offset
		this.bodyOffset = sin(freq) * 5;
	}

	dance2() {
		freq = radians(frameCount * 2.5);
		let sinValue = sin(freq) * length;
		let cosValue = cos(freq) * length;
		if (this.y1 > -50) {
			this.x1 = sinValue - 19;
			this.y1 = cosValue - 52;
			this.x2 = sinValue + 19;
			this.y2 = cosValue - 52;
		} else {
			sinValue = -sinValue;
			this.x1 = sinValue - 19;
			this.y1 = cosValue - 52;
			this.x2 = sinValue + 19;
			this.y2 = cosValue - 52;
		}

		// Update body offset
		this.bodyOffset = sin(freq) * 5;
	}

	dance3() {
		this.y += this.ySpd;
		this.y3 -= this.ySpd;
		if (this.y > 7 + height / 2 || this.y < height / 2 - 7) {
			this.ySpd *= -1;
		}
		if (mouseY < height / 2) {
			this.x1 = -49;
			this.y1 = -24;
			this.x2 = 49;
			this.y2 = -79;
		} else {
			this.x1 = -49;
			this.y1 = -79;
			this.x2 = 49;
			this.y2 = -24;
		}
	}

	dance4() {
		this.y += this.ySpd;
		this.y3 -= this.ySpd;
		if (this.y > 7 + height / 2 || this.y < height / 2 - 7) {
			this.ySpd *= -1;
		}
		if (mouseX < width / 2) {
			this.x1 = -49;
			this.y1 = -24;
			this.x2 = -11;
			this.y2 = -24;
		} else {
			this.x1 = 11;
			this.y1 = -24;
			this.x2 = 49;
			this.y2 = -24;
		}

		// Update body offset
		this.bodyOffset = sin(frameCount * 0.1) * 5;
	}

	sizeChange() {
		this.scale += this.sizeSpd;
		if (this.scale > 1.1 || this.scale < 0.9) {
			this.sizeSpd *= -1;
		}
	}

	textBubble() {
		push();
		noStroke();
		translate(this.x, this.y);
		fill(254, 113, 113);
		ellipse(130, -150, 125, 80);
		beginShape();
		vertex(90, -140);
		vertex(140, -140);
		vertex(75, -110);
		endShape();
		stroke(255);
		strokeWeight(1);
		fill(255);
		textSize(13);
		textAlign(CENTER);
		text("Baby Shark,", 130, -165);
		text("doo-doo, doo-doo", 130, -145);
		pop();
	}

	display() {
		this.drawPanda();
	}

	drawPanda() {
		push();
		translate(this.x, this.y);
		this.drawRightLeg();
		this.drawLeftLeg();
		this.drawBody();
		this.drawHead();
		this.drawLeftArm();
		this.drawRightArm();
		pop();
	}

	drawHead() {
		push();
		noStroke();
		rectMode(CENTER);
		fill(0);
		ellipse(50, -130, 30, 30);

		fill(0);
		ellipse(-50, -130, 30, 30);

		//ear
		fill(255);
		ellipse(0, -100, 120, 100);
		//head

		fill(0);
		circle(-28, -105, 35);
		circle(28, -105, 35);
		stroke(254, 113, 113);
		noStroke();
		fill(255);
		circle(32, -110, 13);
		circle(-24, -110, 13);

		fill(0);
		ellipse(0, -70, 15, 10);

		var faceColor = color(231, 74, 57);
		fill(faceColor);
		ellipse(30, -80, 20, 10);
		ellipse(-30, -80, 20, 10);
		noStroke();
		fill(160, 240, 240);
		pop();
	}

	drawBody() {
		push();
		noStroke();
		fill(0);
		ellipse(0, -30 + this.bodyOffset, 80, 80);
		fill(255);
		ellipse(0, -15 + this.bodyOffset, 40, 30);
		pop();
	}

	drawRightArm() {
		push();
		stroke(255);
		strokeWeight(20);
		line(25, -40, this.x2, this.y2);
		stroke(0);
		ellipse(this.x2, this.y2, 15, 15);
		pop();
	}

	drawLeftArm() {
		push();
		stroke(255);
		strokeWeight(20);
		line(-19, -40, this.x1, this.y1);
		stroke(0);
		ellipse(this.x1, this.y1, 15, 15);
		pop();
	}

	drawRightLeg() {
		push();
		stroke(255);
		strokeWeight(20);
		line(19, -40, 25, 0); // Connect leg to body
		stroke(0);
		ellipse(25, 0, 15, 15); // Draw leg
		pop();
	  }
	  
	  drawLeftLeg() {
		push();
		stroke(255);
		strokeWeight(20);
		line(-19, -40, -25, 0); // Connect leg to body
		stroke(0);
		ellipse(-25, 0, 15, 15); // Draw leg
		pop();
	  }
}
