const target = document.querySelector('.target');
const text = document.querySelector('.text');
const xLine = document.querySelector('.xLine');
const yLine = document.querySelector('.yLine');
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`;

  xLine.style.transform = `translateY(${y}px)`;
  yLine.style.transform = `translateX(${x}px)`;
  
  text.innerText = `${x}px, ${y}px`;
  text.style.transform = `translate(${x - 40}px, ${y + 20}px)`;
   
 })


 /*
 
 why position이 반드시 있어야 하는지
 */