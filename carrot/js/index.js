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

    button[0].removeEventListener('click', play);
}

function replay(){
    for(let i=0; i<li.length-7; i++){
        li[i].style.display = 'block';
    }
    
    popup.style.display = 'none';
    play();
}

function popupAdd(text){
    const result = document.querySelector('.result');

    popup.style.display = 'block';
    result.innerText = text
    resultCount = 0; 
}

function del(e){
    
    const count = document.querySelector('.count');

    if(e.target.tagName !== 'IMG') return;

    if(e.target.getAttribute('alt') == 'carrot'){
        e.path[1].style.display = 'none';

        resultCount++;
        if(resultCount == 10)  popupAdd('You Win🥇');
        
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