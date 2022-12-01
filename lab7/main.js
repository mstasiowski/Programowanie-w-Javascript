const canvas = document.querySelector('#canvas');
const drawBtn = document.querySelector('#btn');


drawBtn.addEventListener('click',draw)

function draw() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
  
      ctx.fillRect(25, 25, 5, 0);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
  }