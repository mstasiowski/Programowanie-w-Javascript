const canvas = document.querySelector('#canvas');
const drawBtn = document.querySelector('#btn');


drawBtn.addEventListener('click',draw)

function randomColor()
{
  function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }
  let r = Math.round(getRandomNum(0,255));
  let g = Math.round(getRandomNum(0,255));
  let b = Math.round(getRandomNum(0,255));

 let rgb = `"rgb(${r},${g},${b})"`;
return rgb

}

function draw() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      // ctx.fillRect(25, 25, 150, 150);
      // ctx.strokeRect(50, 50, 50, 50);
      // ctx.clearRect(45, 45, 80, 80);
      ctx.beginPath();
      ctx.arc(250,150,15,0,2*Math.PI);
      ctx.stroke();
      ctx.fillStyle = randomColor();
      ctx.fill();
      
      
      
    }
  }

  
  console.log(randomColor());
  drawBtn.style.color=randomColor();
