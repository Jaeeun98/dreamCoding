const button = document.getElementsByTagName('button');
const ul = document.getElementsByTagName('ul')[0];
const li = document.getElementsByTagName('li');
const popup = document.querySelector('.popup');
let resultCount = 0;

function play(){
    for(let i=0; i<li.length; i++){
        const randomX = Math.floor(Math.random() * 730);
        const randomY = Math.floor(Math.random() * 130);

        li[i].style.transform = `translate(${randomX}px, ${randomY}px)`;
    }  
    ul.style.display = 'block';
}

function replay(){
    for(let i=0; i<li.length-7; i++){
        li[i].style.display = 'block';
    }
    
    popup.style.display = 'none';
    play();
}

function del(e){
    const result = document.querySelector('.result');

    if(e.target.tagName !== 'IMG') return;

    if(e.target.getAttribute('alt') == 'carrot'){
        e.path[1].style.display = 'none';

        resultCount++;

        if(resultCount == 10) {
            popup.style.display = 'block';
            result.innerText = `You Win🥇 `;
            resultCount = 0;
        }
    } else {
        popup.style.display = 'block';
        result.innerText = `You Loser😂 ` 
    }
}

button[0].addEventListener('click', play);
button[1].addEventListener('click', (e) => {
    replay(e);
});
ul.addEventListener('click', (e) => {
    del(e);
})