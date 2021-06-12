'use strict';

import Popup from './popup.js';
import { GameBuilder, Reason } from './game.js'
import * as sound from './sound.js';

const gameFinishBanner = new Popup(); 
const game = new GameBuilder()
.gameDuration(5)
.carrotCount(3)
.bugCount(3)
.build();

game.setGameStopListener(reason => {
    let message;
    switch(reason){
        case Reason.cancel : 
            message = 'Replay?';
            sound.playAlert();
            break;
        case Reason.win : 
            message = 'YOU WIN';
            sound.playWin();
            break;
        case Reason.lose : 
            message = 'YOU LOST';
            sound.playBug();
            break;
        default:
            throw new Error('not valid reason') ;
    }

gameFinishBanner.showWithText(message);
})

gameFinishBanner.setClickListener(() => {
    game.start();
})



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