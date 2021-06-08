const playBtn = document.querySelector('.play');
const ul = document.getElementsByTagName('ul')[0];

function play(){
    const li = document.getElementsByTagName('li');
    
    for(let i=0; i<li.length; i++){
        const randomX = Math.floor(Math.random() * 730);
        const randomY = Math.floor(Math.random() * 130);

        li[i].style.transform = `translate(${randomX}px, ${randomY}px)`;
    }  
}

function del(e){
    console.log(e);
}

playBtn.addEventListener('click', play)
ul.addEventListener('click', (e) => {
    
    e.target.style.display = 'none';
})