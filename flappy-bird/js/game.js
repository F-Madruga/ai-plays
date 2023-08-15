class Game {
  constructor(canvas, ctx, backgroundColor) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.backgroundColor = backgroundColor;
    this.bird = new Bird(0, 0, BIRD_RADIUS, BIRD_COLOR);
    this.pipe = new Pipe(0, 0, PIPE_WIDTH, 30, PIPE_COLOR);
  }

  update() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.pipe.draw(this.ctx);
    this.bird.draw(this.ctx);
    this.bird.x += 1;
  }
}