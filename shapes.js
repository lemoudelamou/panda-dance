class Shapes {
	constructor(x, y, scale) {
		this.x = x;
		this.y = y;
		this.speed = 1;
		this.angleSpeed = 0.1;
		this.scale = scale;
		this.sizeSpeed = 0.01;
	}

	sizeChange() {
		this.scale += this.sizeSpeed;
		if (this.scale > 1.5 || this.scale < 0.7) {
			this.sizeSpeed *= -1;
		}
	}

	display() {
		push();
		translate(this.x, this.y);
		scale(this.scale);
		this.speed += 10;
		rotate(radians(this.speed * this.angleSpeed));
		noStroke();
		fill(236, 229, 206);

		scale(0.4);
		// Ears
		triangle(65, 75, 60, 200, 200, 200);
		triangle(235, 75, 240, 200, 100, 200);
		fill(241, 212, 175);
		triangle(75, 100, 65, 200, 250, 190);
		triangle(225, 100, 240, 200, 50, 190);

		// Whiskers
		stroke(224, 142, 121);
		strokeWeight(4);
		line(60, 190, 20, 170);
		line(240, 190, 280, 170);
		line(60, 200, 30, 200);
		line(240, 200, 270, 200);
		line(60, 210, 20, 230);
		line(240, 210, 280, 230);

		// Face
		fill(236, 229, 206);
		ellipse(150, 200, 200, 150);

		// Nose
		fill(224, 142, 121);
		triangle(150, 220, 140, 205, 160, 205);
		line(150, 220, 130, 235);
		line(150, 220, 170, 235);

		// Eyes
		noStroke();
		fill(0);
		ellipse(100, 190, 15, 15);
		ellipse(200, 190, 15, 15);

		pop();
	}

	display2() {
		push();
		translate(this.x, this.y);
		scale(this.scale);
		this.speed += 10;
		rotate(-radians(this.speed * this.angleSpeed));
		noStroke();
		fill(254, 113, 113);
		const x = 350;
		const y = 350;

		scale(0.2);

		stroke(93, 45, 0);
		strokeWeight(8);
		fill(175, 92, 14);
		ellipse(x - 150, y - 150, 110, 110);
		ellipse(x + 150, y - 150, 110, 110);
		stroke(198, 123, 0);
		fill(247, 194, 0);
		ellipse(x + 145, y - 145, 60, 60);
		ellipse(x - 145, y - 145, 60, 60);
		stroke(93, 45, 0);
		fill(175, 92, 14);
		ellipse(x, y, 400, 380);

		stroke(0);
		line(x - 100, y - 50, x - 60, y - 50);
		line(x + 100, y - 50, x + 60, y - 50);
		fill(0);
		ellipse(x - 80, y - 10, 25, 25);
		ellipse(x + 80, y - 10, 25, 25);

		fill(85, 47, 9);
		triangle(x - 20, y + 20, x + 20, y + 20, x, y + 40);
		line(x, y + 40, x, y + 65);
		line(x, y + 65, x - 30, y + 90);
		line(x, y + 65, x + 30, y + 90);

		stroke(222, 20, 84);
		fill(255, 85, 139);
		ellipse(x - 120, y + 50, 70, 40);
		ellipse(x + 120, y + 50, 70, 40);

		noStroke();
		fill(255);
		ellipse(x - 75, y - 15, 5, 5);
		ellipse(x + 75, y - 15, 5, 5);

		pop();
	}
}
