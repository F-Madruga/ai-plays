const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const game = new Game(canvas, ctx, BACKGROUND_COLOR);

function animate() {
  requestAnimationFrame(animate);
  game.update();
}

animate();
