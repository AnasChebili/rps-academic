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

const choiceIcons = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

controlBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const choice = btn.dataset.choice;
        playRound(choice);
    });
});


function playRound(playerChoice) {
    playerChoiceEl.querySelector('.icon').textContent = choiceIcons[playerChoice];
    playerChoiceEl.classList.add('selected');
    playerResultEl.classList.remove('visible', 'win', 'lose', 'draw');


    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceEl.querySelector('.icon').textContent = choiceIcons[computerChoice];
    computerChoiceEl.classList.add('selected');


}