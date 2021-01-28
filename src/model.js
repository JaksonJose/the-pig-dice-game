'use strict';
const namePlayerA = document.querySelector('#playerA');
const namePlayerB = document.querySelector('#playerB');
const avatar = document.querySelector('#switch-01');

/* When user pass the mouse arrow over the player */
let playerSide = 0;
let playerAvatar = [];

const PlayerSideA = () => {
    playerSide = 0;
    SideSelector();
}

const PlayerSideB = () => {
    playerSide = 1;
    SideSelector();
}

const SideSelector = () => {
    if (playerSide === 0){
        playerAvatar = [1, 2];
        Player();
    } else {
        playerAvatar = [3, 4];
        Player();
    }
}

document.querySelector('.img-avatar-01').addEventListener('mouseover', () => PlayerSideA());
document.querySelector('.img-avatar-02').addEventListener('mouseover', () => PlayerSideB());


/* Switch the palyer avatar */
const Player = () => {
        let [a, b] = playerAvatar;
        const guySelector = document.querySelector(`#switch-0${a}`);
        const girlSelector = document.querySelector(`#switch-0${b}`);
    // Select the boy
    guySelector.addEventListener('click', () => {
        guySelector.classList.add(`avatar-guy-position-active--0${a}`);
        guySelector.classList.remove(`avatar-guy-position-non-active--0${a}`);

        girlSelector.classList.add(`avatar-girl-position-non-active--0${b}`);
        girlSelector.classList.remove(`avatar-girl-position-active--0${b}`);
    });
    // Select the girl
    girlSelector.addEventListener('click', () => {
        guySelector.classList.remove(`avatar-guy-position-active--0${a}`);
        guySelector.classList.add(`avatar-guy-position-non-active--0${a}`);

        girlSelector.classList.remove(`avatar-girl-position-non-active--0${b}`);
        girlSelector.classList.add(`avatar-girl-position-active--0${b}`);
    });
}

namePlayerA.addEventListener('click', () => namePlayerA.select());
namePlayerB.addEventListener('click', () => namePlayerB.select());

/* Start the game */
document.querySelector('.btn-start-game').addEventListener('click', () => {
    document.querySelector('.modal').classList.add('modal-hidden');
    document.querySelector('#name--0').textContent = namePlayerA.value;
    document.querySelector('#name--1').textContent = namePlayerB.value;
})


/* ********************************************************************* */
/* Modal Start Game Constructors */
document.querySelector('h1').innerHTML = '<span>Welcome to</span> The Pig Dice Game';
document.querySelector('h3').textContent = `Choose your Avatar and write your Name`;

document.querySelector('#switch-01').src = 'image/avatar-guy.png';
document.querySelector('#switch-02').src = 'image/avatar-girl.png';
document.querySelector('#switch-03').src = 'image/avatar-guy.png';
document.querySelector('#switch-04').src = 'image/avatar-girl.png';

/* ****** Modal Alert Constructors **** */
document.querySelector('.modal-title').innerHTML = `Dude! <p> You got a pipe.</p>`;
document.querySelector('.modal-img').src = 'image/dice-one-side.png';
document.querySelector('.modal-text').innerHTML = `<p>Now is your buddy turn. Good Luck!</p>`;

/*** Modal Play Button ***** */

document.querySelector('.btn-next').addEventListener('click', () => {
    document.querySelector('.modal-alert').classList.add('modal-alert-hidden');
})
