const state = {
    playerScore: 0,
    computerScore: 0,
    playerChoice: null,
    computerChoice: null
  };

  const playerScoreEl = document.getElementById('player-score');
  const computerScoreEl = document.getElementById('computer-score');
  const playerChoiceEl = document.getElementById('player-choice');
  const computerChoiceEl = document.getElementById('computer-choice');
  const playerResultEl = document.getElementById('player-result');
  const controlBtns = document.querySelectorAll('.control-btn');

controlBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const choice = btn.dataset.choice;
        playRound(choice);
    });
});

function playRound(playerChoice) {
    console.log('Player picked:', playerChoice);
}

function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log('Computer picked:', computerChoice);
}


let result;
if (playerChoice === computerChoice) {
    result = 'draw';
} else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
) {
    result = 'win';
    state.playerScore++;
} else {
    result = 'lose';
    state.computerScore++;
}

playerScoreEl.textContent = state.playerScore;
computerScoreEl.textContent = state.computerScore;


const choiceIcons = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
  };

  document.getElementById('player-choice').querySelector('.icon').textContent = choiceIcons[playerChoice];
  document.getElementById('computer-choice').querySelector('.icon').textContent = choiceIcons[computerChoice];


  const playerResultEl = document.getElementById('player-result');

  playerResultEl.textContent = result.toUpperCase();
  playerResultEl.classList.add('visible', result);

  setTimeout(() => {
    playerResultEl.classList.remove('visible');
  }, 2000);