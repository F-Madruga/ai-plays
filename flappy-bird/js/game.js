class Game {
  constructor(canvas, ctx, backgroundColor) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.backgroundColor = backgroundColor;
    this.frames = 0;
    this.score = 0;
    this.keys = {
      space: false,
    };

    this.bird = new Bird(
      this.canvas.width / 5,
      this.canvas.height / 2,
      this.canvas.width / BIRD_RADIUS,
      BIRD_COLOR,
      GRAVITY,
      LIFT,
      this.canvas.height
    );

    this.pipes = [];

    this.pipe = new Pipe(
      this.canvas.width,
      this.canvas.width / PIPE_WIDTH,
      this.canvas.height / PIPE_SPACING,
      PIPE_SPEED,
      PIPE_COLOR,
      this.canvas.height
    );

    this.pipesToRemove = [];
  }

  drawBackground() {
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  update() {
    this.frames++;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawBackground();

    this.bird.update();
    if (this.bird.bottomTop()) {
      // console.log("hit top or bottom");
    }
    if (this.keys.space === true) {
      this.keys.space = false;
      this.bird.fly();
    }

    this.bird.draw(this.ctx);

    if (this.frames % FRAMES_PER_PIPE == 0) {
      this.pipes.push(
        new Pipe(
          this.canvas.width,
          this.canvas.width / PIPE_WIDTH,
          this.canvas.height / PIPE_SPACING,
          PIPE_SPEED,
          PIPE_COLOR,
          this.canvas.height
        )
      );
    }

    for (let i = 0; i < this.pipes.length; i++) {
      if (this.pipes[i].hits(this.bird)) {
        // console.log("hit");
      }
      if (this.pipes[0].scored(this.bird)) {
        this.score++;
      }
      this.pipes[i].update();
      this.pipes[i].draw(this.ctx);
      if (this.pipes[i].offscreen()) {
        this.pipesToRemove.push(i);
      }
    }

    for (const i in this.pipesToRemove) {
      this.pipes.splice(i, 1);
    }

    this.pipesToRemove = [];

    console.log(this.score);
  }
}
