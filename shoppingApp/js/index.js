const input = document.querySelector('.text');
const form = document.querySelector('.form');
const section = document.getElementsByTagName('section')[0];


form.addEventListener('submit', (e) => {
    const div = document.createElement('div');
    const del = document.createElement('button');

    div.innerText = input.value;
    
    section.appendChild(div);
    section.appendChild(del);





    input.value = "";
    e.preventDefault();
})