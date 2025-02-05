const heart = document.getElementById("heart");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

let score = 0;
let timeLeft = 30; // Game time in seconds
let xSpeed = 4;
let ySpeed = 4;
let xPosition = Math.random() * (gameArea.offsetWidth - 50);
let yPosition = Math.random() * (gameArea.offsetHeight - 50);

// Start the game timer
let gameTimer = setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    timerDisplay.innerText = timeLeft;
  } else {
    clearInterval(gameTimer);
    alert(`Game Over! Your score: ${score}`);
  }
}, 1000);

function moveHeart() {
  // Move the heart
  xPosition += xSpeed;
  yPosition += ySpeed;

  // Check for collisions with walls
  if (xPosition <= 0 || xPosition >= gameArea.offsetWidth - 50) {
    xSpeed = -xSpeed; // Change direction
  }
  if (yPosition <= 0 || yPosition >= gameArea.offsetHeight - 50) {
    ySpeed = -ySpeed; // Change direction
  }

  // Update the heart's position
  heart.style.left = `${xPosition}px`;
  heart.style.top = `${yPosition}px`;

  requestAnimationFrame(moveHeart);
}

// Check for heart click
heart.addEventListener("click", () => {
  score++;  // Increase score on click
  scoreDisplay.innerText = score;  // Update score display
  // Move the heart to a new random position after being clicked
  xPosition = Math.random() * (gameArea.offsetWidth - 50);
  yPosition = Math.random() * (gameArea.offsetHeight - 50);
});

// Start the game loop
moveHeart();
