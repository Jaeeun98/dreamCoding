const target = document.querySelector('.target');
const text = document.querySelector('.text');
const xLine = document.querySelector('.xLine');
const yLine = document.querySelector('.yLine');




document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  xLine.style.top = `${y}px`;
  yLine.style.left = `${x}px`;
  
  text.innerText = `${x}px, ${y}px`;
  text.style.left = `${x}px`;
  text.style.top = `${y}px`;

 

      
 })