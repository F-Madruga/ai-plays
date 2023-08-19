class Pipe {
  constructor(x, width, spacing, speed, color, canvasHeight) {
    this.x = x;
    this.width = width;
    this.color = color;

    this.canvasHeight = canvasHeight;
    // random(spacing, canvasHeight - spacing);

    const centery =
      Math.random() * (canvasHeight - spacing - spacing) + spacing;

    this.top = centery - spacing / 2;
    this.bottom = canvasHeight - (centery + spacing / 2);

    this.speed = speed;
  }

  update() {
    this.x -= this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, 0, this.width, this.top);
    ctx.fillRect(
      this.x,
      this.canvasHeight - this.bottom,
      this.width,
      this.bottom
    );
  }

  offscreen() {
    if (this.x < -this.width) {
      return true;
    } else {
      return false;
    }
  }
}
