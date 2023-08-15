class Bird {
  constructor(x, y, radius, color, gravity, lift) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = 0;
    this.lift = lift;
    this.gravity = gravity;
  }

  fly() {
    this.velocity += this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;
  }

  bottomTop(height) {
    return this.y > height - this.r || this.y < this.r;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
