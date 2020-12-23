'use strict';
// selecting elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const outcome = document.getElementById('outcome');
const reset = document.querySelector('.play-again');
const playerChoiceDisplay = document.getElementById('player');
const computerChoiceDisplay = document.getElementById('computer');

// element listeners
rock.addEventListener('click', () => compareChoices('rock'));
paper.addEventListener('click', () => compareChoices('paper'));
scissors.addEventListener('click', () => compareChoices('scissors'));
reset.addEventListener('click', () => {
  document.location.reload();
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function renderResults(userChoice, computerChoice) {
  rock.classList.add('hidden');
  paper.classList.add('hidden');
  scissors.classList.add('hidden');

  // display computer choice
  const renderComputerChoice = document.getElementById('computerChoice');
  renderComputerChoice.src = `Images/rps-${computerChoice}.png`;
  renderComputerChoice.classList.remove('hidden');

  const renderPlayerChoice = document.getElementById('playerChoice');
  renderPlayerChoice.src = `Images/rps-${userChoice}.png`;
  renderPlayerChoice.classList.remove('hidden');

  outcome.classList.remove('hidden');
  reset.classList.remove('hidden');
  computerChoiceDisplay.classList.remove('hidden');
  playerChoiceDisplay.classList.remove('hidden');
}

function compareChoices(userChoice) {
  const computerChoice = getComputerChoice();
  renderResults(userChoice, computerChoice);
  // Player chooses Rock
  // draw
  switch (userChoice + computerChoice) {
    case 'rockscissors':
      outcome.innerText = 'Rock beats scissors. \n \n You win.';
      break;
    case 'paperrock':
      outcome.innerText = 'Paper covers rock. \n \n You win.';
      break;
    case 'scissorspaper':
      outcome.innerText = 'Scissors cuts paper. \n \n You win.';
      break;

    case 'scissorsrock':
      outcome.innerText = 'Rock beats scissors. \n \n You lose.';
      break;
    case 'rockpaper':
      outcome.innerText = 'Paper covers rock. \n \n You lose.';
      break;
    case 'paperscissors':
      outcome.innerText = 'Scissors cuts paper. \n \n You lose.';
      break;
    case 'rockrock':
      outcome.innerText = 'Draw.';
      break;
    case 'paperpaper':
      outcome.innerText = 'Draw.';
      break;
    case 'scissorsscissors':
      outcome.innerText = 'Draw.';
      break;
    default:
      return;
  }
}
