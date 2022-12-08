const canvas = document.querySelector('#canvas');
const drawBtn = document.querySelector('#btn');


drawBtn.addEventListener('click',draw)

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
      ctx.fill();
    }
  }