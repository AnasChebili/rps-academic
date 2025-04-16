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
