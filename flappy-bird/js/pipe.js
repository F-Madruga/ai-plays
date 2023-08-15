class Pipe {
  constructor(x, y, width, height, spacing, speed, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.color = color;
    // this.centery = random(spacing, height - spacing);
    this.centery =
      Math.floor(Math.random() * (height - spacing - spacing + 1)) + spacing;
    this.speed = speed;
  }

  update() {}

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  offscreen() {
    return false;
  }
}
