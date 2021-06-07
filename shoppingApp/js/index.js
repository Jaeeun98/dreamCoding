const input = document.querySelector('.text');
const form = document.querySelector('.form');
const section = document.getElementsByTagName('section')[0];


form.addEventListener('submit', (e) => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    const del = document.createElement('img');

    span.innerText = input.value;
    del.setAttribute('src', 'img/waste.png');
    section.appendChild(div);
    div.appendChild(span);
    div.appendChild(del);

    input.value = "";
    e.preventDefault();

    del.addEventListener('click', delFun);
})

function delFun(e){
    const del = e.target.parentNode;
    del.remove();
    
}

