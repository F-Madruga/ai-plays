class Button {
  constructor(
    text,
    x,
    y,
    width,
    height,
    backgroundColor,
    textColor,
    textSize,
    textFont
  ) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
    this.textFont = textFont;
    this.textSize = textSize;
  }

  draw() {
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(this.x, this.y, canvas.width, canvas.height);

    ctx.font = `${this.textSize} ${this.textFont}`;
    ctx.fillStyle = this.textColor;
    ctx.textAlign = "center";
    ctx.fillText(this.text, this.x, this.y);
  }
}
