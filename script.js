const state = {
    playerScore: 0,
    computerScore: 0,
};

const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
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
