// Game state
const choices = ["rock", "paper", "scissors"];
const score = { player: 0, computer: 0, draw: 0 };

// DOM elements
const choiceButtons = document.querySelectorAll(".choice-btn");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const drawScoreEl = document.getElementById("draw-score");
const playerPickEl = document.getElementById("player-pick");
const computerPickEl = document.getElementById("computer-pick");
const messageEl = document.getElementById("message");
const resetBtn = document.getElementById("reset-btn");

// Computer picks a random item from the choices array
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Compare two choices and return "win", "lose" or "draw" (from the player's view)
function getWinner(player, computer) {
  if (player === computer) {
    return "draw";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }

  return "lose";
}

function updateScoreDisplay() {
  playerScoreEl.textContent = score.player;
  computerScoreEl.textContent = score.computer;
  drawScoreEl.textContent = score.draw;
}

function showMessage(text, type) {
  messageEl.textContent = text;
  messageEl.className = "message " + type;
}

// Play one round
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getWinner(playerChoice, computerChoice);

  playerPickEl.textContent = playerChoice;
  computerPickEl.textContent = computerChoice;

  if (result === "win") {
    score.player++;
    showMessage("You win! " + playerChoice + " beats " + computerChoice + ".", "win");
  } else if (result === "lose") {
    score.computer++;
    showMessage("You lose! " + computerChoice + " beats " + playerChoice + ".", "lose");
  } else {
    score.draw++;
    showMessage("It's a draw! You both chose " + playerChoice + ".", "draw");
  }

  updateScoreDisplay();
}

function resetGame() {
  score.player = 0;
  score.computer = 0;
  score.draw = 0;
  updateScoreDisplay();
  playerPickEl.textContent = "-";
  computerPickEl.textContent = "-";
  showMessage("Make your move!", "");
}

// Event listeners
choiceButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    playRound(button.dataset.choice);
  });
});

resetBtn.addEventListener("click", resetGame);