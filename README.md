Rock Paper Scissors Game

A simple Rock Paper Scissors game played against the computer, with a running score. Built as Day 24 (Task 24) of the Veda Technology Web Development internship.

Description

The player picks Rock, Paper or Scissors, the computer picks randomly, and the winner of each round is shown straight away. Wins, losses and draws are tracked in a running score that can be reset at any time.

Objective

Practice conditional logic, random choice, and simple game state.

Features
Three choice buttons (Rock, Paper, Scissors)
Random computer choice
Win / lose / draw logic
Running score display (You, Draws, Computer)
Reset Score button
Responsive layout for desktop and mobile
Tools Used
HTML5
CSS3
JavaScript
Project Structure
rock-paper-scissors/
├── index.html
├── style.css
├── script.js
└── README.md
How to Run
Download or clone the project and keep all files in the same folder.
Open index.html in any modern web browser (or use the Live Server extension in VS Code).
Click Rock, Paper or Scissors to play.
How It Works
Random computer choice: the choices are stored in an array (["rock", "paper", "scissors"]). Math.random() is multiplied by the array length and rounded down with Math.floor() to pick a random index.
Deciding the winner: the getWinner() function compares the two choices. If they are the same, it is a draw. Otherwise the player wins if their choice beats the computer's (rock beats scissors, paper beats rock, scissors beats paper), and loses in every other case.
Game state: a score object keeps the player, computer and draw counts, and the display is updated after every round.
Reset: the Reset Score button sets all counts back to zero and clears the last round's result.
Author

Anna Makgabo Thantsha# rock-paper-scissors-game
