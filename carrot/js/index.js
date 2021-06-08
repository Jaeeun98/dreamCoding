const button = document.getElementsByTagName('button');
const ul = document.getElementsByTagName('ul')[0];
const popup = document.querySelector('.popup');

function play(){
    const li = document.getElementsByTagName('li')

    for(let i=0; i<li.length; i++){
        const randomX = Math.floor(Math.random() * 730);
        const randomY = Math.floor(Math.random() * 130);

        li[i].style.transform = `translate(${randomX}px, ${randomY}px)`;
    }  
    ul.style.display = 'block';
}

function replay(){
    const img = document.getElementsByTagName('img');

    for(let i=0; i<img.length-7; i++){
        img[i].style.display = 'block';
    }
    
    popup.style.display = 'none';
    play();
}

function del(e){
    const result = document.querySelector('.result');

    if(e.target.tagName !== 'IMG') return;

    if(e.target.getAttribute('alt') == 'carrot'){
        e.target.style.display = 'none';
    } else {
        popup.style.display = 'block';
        result.innerText = `You Loser😂 ` 
    }
}

button[0].addEventListener('click', play)
button[1].addEventListener('click', (e) => {
    replay(e);
});
ul.addEventListener('click', (e) => {
    del(e);
})