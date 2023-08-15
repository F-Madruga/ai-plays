class Game {
  constructor(canvas, ctx, backgroundColor) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.backgroundColor = backgroundColor;
    this.bird = new Bird(
      this.canvas.width / 5,
      this.canvas.height / 2,
      this.canvas.width / BIRD_RADIUS,
      BIRD_COLOR,
      GRAVITY,
      LIFT
    );
    this.pipes = [];
    this.keys = {
      space: false,
    };
    this.frames = 0;
  }

  drawBackground() {
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  update() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawBackground();

    this.bird.update();
    if (this.bird.bottomTop(this.canvas.height)) {
      this.bird.x = this.canvas.width / 5;
      this.bird.y = this.canvas.height / 2;
    }
    if (this.keys.space === true) {
      this.keys.space = false;
      this.bird.fly();
    }

    if (this.frames % FRAMES_PER_PIPE == 0) {
      this.pipes.push(
        new Pipe(
          this.canvas.width,
          this.canvas.height,
          this.canvas.width / PIPE_WIDTH,
          this.canvas.height,
          PIPE_SPACING
        )
      );
    }

    for (let i = 0; i < this.pipes.length; i++) {
      this.pipes[i].update();
      if (this.pipes[i].offscreen()) {
        this.pipes.splice(i, 1);
      }
      this.pipes[i].draw(this.ctx);
    }

    this.bird.draw(this.ctx);
    // this.bird.x += 1;
  }
}
