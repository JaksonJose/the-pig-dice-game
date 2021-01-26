'use strict';

const playerA = document.querySelector('.player--0');
const playerB = document.querySelector('.player--1');
const scorePlayerA = document.querySelector('#score--0');
const scorePlayerB = document.querySelector('#score--1');
const currentPlayerA = document.querySelector('#current--0');
const currentPlayerB = document.querySelector('#current--1');
const diceImg = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const initilization = () => {
    // Starting condition
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    scorePlayerA.textContent = 0;
    scorePlayerB.textContent = 0;
    diceImg.classList.add('hidden');

    scorePlayerA.textContent = 0;
    scorePlayerB.textContent = 0;
    currentPlayerA.textContent = 0;
    currentPlayerB.textContent = 0;
    playerA.classList.remove('player--winner');
    playerB.classList.remove('player--winner');
    playerA.classList.add('player--active');
    playerB.classList.remove('player--active');
}

initilization();

const switchPlayer = () => {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerA.classList.toggle('player--active');
    playerB.classList.toggle('player--active');
}

//When player click on Roll Dice button
btnRoll.addEventListener('click', () => {
    if (playing) {
        // 1 - Generating a random dice roll
        let playDice = Math.trunc(Math.random() * 6 ) + 1;
        
        // 2 - Display dice
        diceImg.classList.remove('hidden');
        diceImg.src = `image/dice-${playDice}.png`;

        // Check for rolled 1
        if (playDice !== 1) {
            // Add dice to current score
            currentScore += playDice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {  
            switchPlayer();   
        }
    }
});

btnHold.addEventListener('click', () => {
   // 1 - Add current score to active player's score
   if (playing) {
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        console.log(activePlayer);
        
    
        // 2 - check if players's score is >= 100
        if (scores[activePlayer] >= 100){
            //finish the game
            playing = false;
            diceImg.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            //switch players
            switchPlayer();
        }
   }
})

btnNew.addEventListener('click', () => initilization());