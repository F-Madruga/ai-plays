const canvas = document.getElementById("canvas");

if (navigator.userAgentData.mobile) {
  canvas.height = innerHeight - 20;
  canvas.width = innerWidth - 20;
} else {
  canvas.height = innerHeight - 20;
  canvas.width = ((innerHeight - 20) * 9) / 16;
}

const ctx = canvas.getContext("2d");

const game = new Game(canvas, ctx, BACKGROUND_COLOR);

function animate() {
  requestAnimationFrame(animate);
  game.update();
}

animate();
