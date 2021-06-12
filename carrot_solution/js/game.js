'use strict';

import { Field, ItemType } from './field.js';
import * as sound from './sound.js';


//오타 줄이기 
export const Reason = Object.freeze({
    win : 'win',
    lost : 'lose',
    cancel : 'cancel',
});

//builder patten 'class Game'을 공유x(외부에 공유하지 않음)
export class GameBuilder {
    gameDuration(duration) {
        this.gameDuration = duration;
        return this;
    }

    carrotCount(num){
        this.carrotCount = num;
        return this;
    }

    bugCount(num){
        this.bugCount = num;
        return this;
    }

    build(){
        return new Game(
            this.gameDuration,
            this.carrotCount,
            this.bugCount
        );
    }
}

class Game {
    constructor(gameDuration, carrotCount, bugCount){
        this.gameDuration = gameDuration;
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.gameTimer = document.querySelector('.timer');
        this.gameScore = document.querySelector('.score');
        this.gameBtn = document.querySelector('.gameBtn');
        this.gameBtn.addEventListener('click', () => {
            if(this.started){
                this.stop(Reason.cancel);
            } else {
                this.start();
            }
        });

        this.gameField = new Field(carrotCount, bugCount);
        this.gameField.setClickListener(this.onItemClick);

        this.started = false;
        this.score = 0;
        this.timer = undefined;
    }

    setGameStopListener(onGameStop){
        this.onGameStop = onGameStop;
    }

    onItemClick = item => {
        if(!this.started){
            return;
        }
        if(item === ItemType.carrot){
            this.score++;
            this.updateScoreBoard();
            if(this.score === this.carrotCount){
                this.stop(Reason.win);
            }
        } else if(item === ItemType.bug){
            this.stop(Reason.lose);
        }  
    }

    start(){
        this.started = true; 
        this.initGame();
        this.showStopButton();
        this.showTinerAndScore();
        this.startGameTimer();
        sound.playBackground();
    }
    
    stop(reason){
        this.started = false; 
        this.stopGameTimer();
        this.hideGameButton();
        sound.stopBackground();

        this.onGameStop && this.onGameStop(reason);
    }

    showStopButton(){
        const icon = this.gameBtn.querySelector('.fas');
        icon.classList.add('fa-stop');
        icon.classList.remove('fa-play');
        this.gameBtn.style.visibility = 'visible';
    }
    
    hideGameButton(){
        this.gameBtn.style.visibility = 'hidden';
    }
    
    showTinerAndScore(){
        this.gameTimer.style.visibility = 'visible'
        this.gameScore.style.visibility = 'visible'
    }
    
    updateTimerText(time){
        const minutes = Math.floor(time / 60);
        const secondes = time % 60;
    
        this.gameTimer.innerText = `${minutes}:${secondes}`
    }
    
    startGameTimer(){
        let remainingTimeSec = this.gameDuration;
        this.updateTimerText(remainingTimeSec);
        this.timer = setInterval(() => {
            if(remainingTimeSec <= 0){
                clearInterval(this.timer);
                this.stop(this.carrotCount === this.score ? Reason.win : Reason.lose);
                return;
            }
            this.updateTimerText(--remainingTimeSec);
        }, 1000)
    }
    
    stopGameTimer(){
        clearInterval(this.timer);
    }
    
    initGame(){
        this.score = 0;
        this.gameScore.innerText = this.carrotCount;
        this.gameField.init();
    }
    
    updateScoreBoard(){
        this.gameScore.innerText = this.carrotCount - this.score;
    }
    
    
    
}