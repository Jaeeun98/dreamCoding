'use strict';
import Popup from './popup.js';
import * as sound from './sound.js';

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const carrotSize = 80;

export default class Field {
    constructor(carrotCount, bugCount) {
        this.carrotCount = carrotCount
        this.bugCount = bugCount;
        this.field = document.querySelector('.field');
        this.fieldRect = this.field.getBoundingClientRect();
        this.onClick = this.onClick.bind(this);
        this.field.addEventListener('click', this.onClick);
        
        /* 
          클래스에 있는 함수를 인자로 전달하게 되면, 함수만 전달되고, class 정보는 함께 전달되지 않음
          onClick = field 클래스 안에 있는 멤버 함수.
          따라서 'this'가 붙은 것들은 정보가 없기 때문에 사용할 수 없음
          클래스 정보를 무시하고 싶지 않다면 따로 조치를 취해줘야 함 = this 바인딩
          this와 함수를 묶어 주는 것 = 바인딩
          
            방법1 : 직접적인 바인딩(bind 사용)
            this.onClick = this.onClick.bind(this);

            방법2 : 화살표 함수 / 화살표 함수는 this가 유지 됨
            (event) => this.onClick(event);

            방법3 : onClick 함수를 화살표 함수로 변수에 담기
          */
        

    }

    init(){
        this.field.innerHTML = '';
        this._addItem('carrot', this.carrotCount, 'img/carrot.png');
        this._addItem('bug', this.bugCount, 'img/bug.png');
    }

    setClickListener(onItemClick){
        this.onItemClick = onItemClick;
    }

    _addItem(className, count, imgPath){
        const x1 = 0;
        const y1 = 0;
        const x2 = this.fieldRect.width - carrotSize;
        const y2 = this.fieldRect.height - carrotSize;
    
        for(let i=0; i<count; i++){
            const item = document.createElement('img');
            item.setAttribute('class', className);
            item.setAttribute('src', imgPath);
            item.style.position = 'absolute';
            const x = randomNumber(x1, x2);
            const y = randomNumber(y1, y2);
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            this.field.appendChild(item);
        }
    }

    onClick = event => {
        const target = event.target;
        if(target.matches('.carrot')){
            target.remove();
            sound.playCarrot();
            this.onItemClick && this.onItemClick('carrot');
        } else if(target.matches('.bug')){
            this.onItemClick && this.onItemClick('bug');
        }
    }
}

function randomNumber(min, max){
    return Math.random() * (max-min)+min;
} 





//class와 상관 없는 함수들은 class 밖에 만들어두는게 좋음