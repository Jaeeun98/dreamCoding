'use strict';

export default class Popup {
    constructor(){
        this.popup = document.querySelector('.popup');
        this.popupText = document.querySelector('.message');
        this.popupRefresh = document.querySelector('.refresh');
        this.popupRefresh.addEventListener('click', () => {
            this.onClick();
            //this.onClick && this.onClick()  
            //onClick이 할당되어 있을 때 this.onClick을 호출해라 this.onClick = startGame()
            this.hide();
        });
    }

    setClickListener(onClick){
        this.onClick = onClick;
    }
    showWithText(text){
        this.popupText.innerText = text;
        this.popup.classList.remove('popup_hide');
    }
    hide(){
        this.popup.classList.add('popup_hide');
    }

    
}