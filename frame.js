class Frame {
	constructor(x, y, scale, image) {
		this.x = x;
		this.y = y;
		this.speed = 1;
		this.angleSpeed = 0.1;
		this.sizeSpeed = 0.01;
		this.scale = scale;
		this.image = image;
	}

	sizeChange() {
		this.scale += this.sizeSpeed;
		if (this.scale > 4 || this.scale < 0.7) {
			this.sizeSpeed *= -1;
		}
	}

	display() {
		push();
		imageMode(CENTER);
		translate(this.x, this.y);
		scale(this.scale);
		this.speed += 10;
		rotate(radians(this.speed * this.angleSpeed));
		image(this.image, -35, 52, 80, 65);
		pop();
	}

	display2() {
		push();
		imageMode(CENTER);
		translate(this.x, this.y);
		scale(this.scale);
		this.speed += 10;
		rotate(-radians(this.speed * this.angleSpeed));
		image(this.image, -35, 52, 80, 65);
		pop();
	}
}
