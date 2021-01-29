'use strict';

/* ****Game Screen (Main Screen)*** */
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

let scores, currentScore, activePlayer, playing, playDice, player;
player = localStorage.getItem('player-0');

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


const SwitchPlayer = () => {
    console.log(activePlayer)
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerA.classList.toggle('player--active');
    playerB.classList.toggle('player--active');
    console.log(activePlayer)

    player = localStorage.getItem(`player-${activePlayer}`);
}


//When player click on Roll Dice button
const DiceRoll = () => {
    if (playing) {
        // 1 - Generating a random dice roll
        playDice = Math.trunc(Math.random() * 6 ) + 1;       

        // 2 - Display dice
        diceImg.classList.remove('hidden');
        diceImg.src = `image/dice-${playDice}.png`;

        // Check for rolled is not 1 and sum up to current score
        if (playDice !== 1) {
            currentScore += playDice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            SwitchPlayer();
            DiceRolledOne();
        }
    }
}


// When player click on Hold button
const Hold = () => {
 // 1 - Add current score to active player's score
   if (playing) {
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        

        // 2 - check if players's score is >= 100
        if (scores[activePlayer] >= 100){
            //finish the game
            playing = false;
            diceImg.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            //switch players
            PlayerHitHold();
            SwitchPlayer();
            
        }
   }
}


btnRoll.addEventListener('click', () => DiceRoll());
btnHold.addEventListener('click', () => Hold())
btnNew.addEventListener('click', () => initilization());


/** ***Modal alert (When hold, when got one Pipe*** **/
const modalDisplay = document.querySelector('.modal-alert');
const modalTitle = document.querySelector('.modal-title');
const modalText = document.querySelector('.modal-text');
const modalImg = document.querySelector('.modal-img');

const namePlayer = document.querySelector('#name--01');

const btnPlay = document.querySelector('.btn-next');

const DiceRolledOne = () => {
    modalDisplay.classList.remove('modal-alert-hidden');
    modalTitle.innerHTML = `Dude! <p> You got a pipe.</p>`;
    modalText.innerHTML = `${player}, now it's your turn. Good Luck!`
    modalImg.src = 'image/dice-one-side.png'; 
}

const PlayerHitHold = () => {
    modalDisplay.classList.remove('modal-alert-hidden');
    modalTitle.innerHTML = `Dude! <p> You scored ${currentScore}.</p>`;
    modalText.innerHTML = `${player}, now it's your turn. Good Luck!`
    modalImg.src = 'image/dice-one-side.png';

}

btnPlay.addEventListener('click', () => {
    modalDisplay.classList.add('modal-alert-hidden');
})





