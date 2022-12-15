const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

const window_height = window.innerHeight;
const window_width = window.innerWidth;

canvas.height = window_height;
canvas.width = window_width;
canvas.style.background ="grey";

console.log(window_height);
console.log(window_width);

function randomNum()
{
  function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }
  let num = Math.round(getRandomNum(0,255));
  
  return num;
}



class Ball {
  constructor(xpos, ypos, radius,speed){
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.speed = speed;
    // this.color = color;

    this.moveX = 1 * this.speed;
    this.moveY = 1 * this.speed;

  }

  draw(context)
  {
    let r = randomNum();
    let g = randomNum();
    let b = randomNum();
  
    context.beginPath();
    context.lineWidth = 4;
    context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI*2);
    context.stroke();
    // context.fillStyle = `rgb(${r},${g},${b})`;
    context.fillStyle = "green";
    context.fill();
    context.closePath();
  }

  move()
  {
    

    this.draw(context);
    
    if((this.xpos + this.radius) > window_width)
    {
      this.moveX = -this.moveX;
    }

    if((this.xpos - this.radius) < 0)
    {
      this.moveX = -this.moveX;
    }

    if((this.ypos + this.radius) > window_height)
    {
      this.moveY = -this.moveY;
    }

    if((this.ypos - this.radius) < 0)
    {
      this.moveY = -this.moveY;
    }
    
    this.xpos += this.moveX;
    this.ypos += this.moveY;

  }

}

class Line {
  constructor(moveToX,moveToY,lineToX,lineToY){
    this.moveToX = moveToX;
    this.moveToY = moveToY;
    this.lineToX = lineToX;
    this.lineToY = lineToY;
  }

  draw(context){
    context.beginPath();
    context.moveTo(this.moveToX,this.moveToY);
    context.lineTo(this.lineToX,this.lineToY);
    context.lineTo(this.lineToX,this.lineToY);
    context.closePath();
    context.stroke();
  }

  move(){
    this.draw(context);
  }
}

let balls =[];
let lines =[];

// let createBall = function(ball)
// {
//   ball.draw(context);
// }

let RandomNumMinMax = function(min,max)
{
  let result = Math.random() *(max- min) -min;
  return result;
}

for(let i = 0 ;i<10;i++)
{
  

  
  let random_radius = randomNum();
  // let random_xpos = Math.random() * window_width;
  // let random_ypos = Math.random() * window_height;
  let random_xpos = RandomNumMinMax(random_radius,(window_width - random_radius));
  let random_ypos = RandomNumMinMax(random_radius,(window_height - random_radius));

  let balltest = new Ball(random_xpos, random_ypos, random_radius, 1);
  balls.push(balltest);

  let lineTest = new Line(RandomNumMinMax(20,500),RandomNumMinMax(20,500),random_xpos,random_ypos);
  lines.push(lineTest);
  
  
}

function moveBall(){
  requestAnimationFrame(moveBall);
  context.clearRect(0, 0, window_width, window_height)

balls.forEach(e =>{
  e.move();
})



}

function moveLine(){
  requestAnimationFrame(moveLine);
  context.clearRect(0, 0, window_width, window_height)

  lines.forEach(l =>{
    l.move();
  })
}

// lineTest.move();


// moveBall();
moveLine();




// let ball1 = new Ball(100,100,50);
// ball1.draw(context);




// function draw() {
//     const canvas = document.querySelector('#canvas');
//     if (canvas.getContext) {
//       const ctx = canvas.getContext('2d');
//       // ctx.fillRect(25, 25, 150, 150);
//       // ctx.strokeRect(50, 50, 50, 50);
//       // ctx.clearRect(45, 45, 80, 80);

//       ctx.beginPath();
//       ctx.arc(250,150,15,0,2*Math.PI);
//       ctx.stroke();
//       ctx.fillStyle = randomColor();
//       ctx.fill();
      
      
      
//     }
//   }

  
//   console.log(randomColor());
//   drawBtn.style.color=randomColor();
