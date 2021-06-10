'use strict';

import Popup from './popup.js';
import Field from './field.js';
import * as sound from './sound.js';

const carrot_count = 5;
const bug_count = 5;
const game_buration_sec = 5;  //게임 시간 


const gameBtn = document.querySelector('.gameBtn');
const gameTimer = document.querySelector('.timer');
const gameScore = document.querySelector('.score');


let started = false;
let score = 0;
let timer = undefined;

const gameFinishBanner = new Popup(); 
gameFinishBanner.setClickListener(() => {
    startGame();
})

const gameField = new Field(carrot_count, bug_count);
gameField.setClickListener(onItemClick);

function onItemClick(item){
    if(!started){
        return;
    }
    if(item === 'carrot'){
        score++;
        updateScoreBoard();
        if(score === carrot_count){
            finishGame(true)
        }
    } else if(item === 'bug'){
        console.log('bug');
        finishGame(false);
    }  
}
gameBtn.addEventListener('click', () => {
    if(started){
        stopGame();
    } else {
        startGame();
    }
});

function startGame(){
    score = 0;
    started = true; 
    initGame();
    showStopButton();
    showTinerAndScore();
    startGameTimer();
    sound.playBackground();
}

function stopGame(){
    started = false; 
    stopGameTimer();
    hideGameButton();
    gameFinishBanner.showWithText('REPLAY❓');
    sound.playAlert();
    sound.stopBackground();
}

function finishGame(win){
    started = false;
    stopGameTimer();
    hideGameButton();
    if(win){
        sound.playWin();
    } else {
        sound.playBug();
    }
    stopSound(bgSound);
    gameFinishBanner.showWithText(win ? 'YOU WON 🥇' : 'YOU LOST😂');
}

function showStopButton(){
    gameBtn.style.visibility = 'visible';
    const icon = gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
}

function hideGameButton(){
    gameBtn.style.visibility = 'hidden';
}

function showTinerAndScore(){
    gameTimer.style.visibility = 'visible'
    gameScore.style.visibility = 'visible'
}

function updateTimerText(time){
    const minutes = Math.floor(time / 60);
    const secondes = time % 60;

    gameTimer.innerText = `${minutes}:${secondes}`
}

function startGameTimer(){
    let remainingTimeSec = game_buration_sec;
    updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
        if(remainingTimeSec <= 0){
            clearInterval(timer);
            finishGame(carrot_count === score);
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000)
}

function stopGameTimer(){
    clearInterval(timer);
}

function initGame(){
    score = 0;
    gameScore.innerText = carrot_count;
    gameField.init();
    
}

function updateScoreBoard(){
    gameScore.innerText = carrot_count - score;
}


initGame();




/*

*css tip*

css의 경우 크기나 색상 같은것은 root를 통해 변수로 만든 후 작성하는 것이 좋음
▶와 같은 것들은 폰트어썸을 통해 만드는 것이좋음
세로 정렬하는 방법 : inline-block or display:flex, colum으로 정렬
position을 사용하지 않고, transform의 translate를 사용하면 위치를 이동시킬 수 있음
visibility: hidden;

user-select: none;  //선택 없애기
cursor:auto;


*js tip*

기능 단위로 function을 쪼개서 만드는 것이 좋음 + 모듈처럼 기능별로 나눠서 저장하는게 좋음 

started = !started;  //클릭할때마다 반대로 할당, game의 상태를 지정하는 변수

const icon = gameBtn.querySelector('.fa-play');
icon.classList.add('fa-stop');
icon.classList.remove('fa-play');
→ icon 변경 방법 폰트어썸의 경우 class를 통해서 icon을 삽입하기 대문에 classlist를 이용하면 바꿀 수 있음

export default

class로 모듈 분배하기 → index.js의 script type을 module로 지정해야함

*/