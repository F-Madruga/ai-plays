class Bird {
  constructor(x, y, radius, color, gravity, lift, canvasHeight) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = 0;
    this.lift = lift;
    this.gravity = gravity;
    this.canvasHeight = canvasHeight;
  }

  fly() {
    this.velocity += this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;
  }

  bottomTop() {
    return this.y > this.canvasHeight - this.radius || this.y < this.radius;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
