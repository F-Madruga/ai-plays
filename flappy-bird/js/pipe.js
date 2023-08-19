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

    this.hitted = false;
    this.counted = false;
  }

  hits(bird) {
    if (
      bird.y - bird.radius < this.top ||
      bird.y + bird.radius > this.canvasHeight - this.bottom
    ) {
      if (
        bird.x + bird.radius > this.x &&
        bird.x - bird.radius < this.x + this.width
      ) {
        this.hitted = true;
        return true;
      }
    }
    return false;
  }

  scored(bird) {
    if (bird.x > this.x && !this.hitted && !this.counted) {
      this.counted = true;
      return true;
    }
    return false;
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
