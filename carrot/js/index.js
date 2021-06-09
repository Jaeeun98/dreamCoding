const button = document.getElementsByTagName('button');
const ul = document.getElementsByTagName('ul')[0];
const li = document.getElementsByTagName('li');
const popup = document.querySelector('.popup');
const count = document.querySelector('.count');
let timeout;
let resultCount = 0;

function timerCountDown(){
    let timer = document.querySelector('.timer');
    let timerCount = 10;
    timer.innerText = `0:${timerCount}`;
     
    timeout = setInterval(() => {
        timerCount--;
        timer.innerText = `0:${timerCount}`;
    
        if(timerCount == 0){
            clearInterval(timeout);
            popupAdd('You Loser😂');
        }
    }, 1000)
}

function play(){
    if(button[0].className == `play stopBtn`){
        button[0].innerHTML = `&#9632;`
        clearInterval(timeout);
        popupAdd('Replay?!');

        return;
    } else {
        button[0].classList.add('stopBtn');
        button[0].innerHTML = `&#9654;`
    }

    for(let i=0; i<li.length; i++){
        const randomX = Math.floor(Math.random() * 730);
        const randomY = Math.floor(Math.random() * 130);

        li[i].style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    resultCount = 0;
    count.innerText = resultCount;
    
    timerCountDown();
    ul.style.display = 'block';   
}

function replay(){
    for(let i=0; i<li.length-7; i++){
        li[i].style.display = 'block';
    }
    
    popup.style.display = 'none';
    play();
}

function popupAdd(text){
    clearInterval(timeout);
    button[0].classList.remove('stopBtn');

    const result = document.querySelector('.result');

    popup.style.display = 'block';
    result.innerText = text

    text == 'You Win🥇' ? audioPlay('game_win') : audioPlay('bug_pull')
}

function audioPlay(sound){
    const audio = new Audio(`sound/${sound}.mp3`);
    audio.play();
}

function del(e){
    if(e.target.tagName !== 'IMG') return;
    if(e.target.getAttribute('alt') == 'carrot'){
        e.path[1].style.display = 'none';

        resultCount++;
        if(resultCount == 10) popupAdd('You Win🥇');

        audioPlay('carrot_pull');
        
    } else popupAdd('You Loser😂');

    count.innerText = resultCount;
}

button[0].addEventListener('click', play);
button[1].addEventListener('click', (e) => {
    replay(e);
});
ul.addEventListener('click', (e) => {
    del(e);
})