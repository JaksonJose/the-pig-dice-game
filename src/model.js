'use strict';
const namePlayerA = document.querySelector('#playerA');
const namePlayerB = document.querySelector('#playerB');

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
        const guySelector = document.querySelector(`.switch-0${a}`);
        const girlSelector = document.querySelector(`.switch-0${b}`);
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

document.querySelector('#playerA').addEventListener('click', () => namePlayerA.select());
document.querySelector('#playerB').addEventListener('click', () => namePlayerB.select());

/* Start the game */
document.querySelector('.btn-start-game').addEventListener('click', () => {
    document.querySelector('.modal').classList.add('modal-hidden');
    document.querySelector('#name--0').textContent = namePlayerA.value;
    document.querySelector('#name--1').textContent = namePlayerB.value;
})
