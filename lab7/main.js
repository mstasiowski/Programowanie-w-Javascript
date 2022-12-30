const startbtn = document.querySelector('#start');
const resetbtn = document.querySelector('#resetbtn');

startbtn.addEventListener('click',startGame)
resetbtn.addEventListener('click',startGame)

function startGame(){
  startbtn.style.display = "none";
  resetbtn.style.display = "block";


const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

const window_height = window.innerHeight;
const window_width = window.innerWidth;

canvas.height = window_height;
canvas.width = window_width;

canvas.style.background ="rgba(10, 20, 0, 0.35)";
ballsCount = 10;
ballMinSpeed = 2;
ballMaxSpeed = 8;

console.log(`Height: ${window_height}`);
console.log(`Width: ${window_width}`);

function randomNum()
{
  function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }
  let num = Math.round(getRandomNum(5,55));
  
  return num;
}





class Ball {
  constructor(xpos, ypos, radius,speed,color){
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.speed = speed;
    this.color = color;

    this.moveX = 1 * this.speed;
    this.moveY = 1 * this.speed;

  }

  draw(context)
  {
    
  

    context.beginPath();
    context.lineWidth = 3;
    context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI*2);
    context.stroke();
    context.fillStyle = this.color;
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
    context.closePath();
    context.stroke();
  }

  movee(){
    this.draw(context);
  }
}

let balls =[];
let lines =[];



let RandomNumMinMax = function(min,max)
{
  let result = Math.random() *(max- min) + min;
  return result;
}

for(let i = 0 ;i<ballsCount ;i++)
{
  
  
  let random_radius = randomNum();
  let random_xpos = RandomNumMinMax(random_radius,(window_width - random_radius));
  let random_ypos = RandomNumMinMax(random_radius,(window_height - random_radius));
  let random_speed = RandomNumMinMax(ballMinSpeed,ballMaxSpeed);

  let balltest = new Ball(random_xpos, random_ypos, random_radius, random_speed,color = `rgb(${RandomNumMinMax(0,255)},${RandomNumMinMax(0,255)},${RandomNumMinMax(0,255)})`);
  balls.push(balltest);
  // console.log(balltest.xpos);

}




function moveBall(){
  requestAnimationFrame(moveBall);
  context.clearRect(0, 0, window_width, window_height)

  lineCheck()
  lines.forEach(l =>{
    l.movee();
    
  })

balls.forEach(e =>{
  e.move();
})
}




// console.log(balls)

function lineCheck()
{

for(let i= 0 ; i<balls.length;i++)
{
  // console.log(" ");
  // console.log("i : "+balls[i].xpos);
  
  for(let j =0;j<balls.length;j++)
  {
    
    if(balls[i].xpos != balls[j].xpos && balls[i].ypos != balls[j].ypos )
    {
    
      // console.log("j : "+balls[j].xpos)
      let xA = 0;
      let xB = 0;
      let yA = 0;
      let yB = 0;
      if(balls[i].xpos > balls[j].xpos)
      {
        xA = balls[i].xpos;
        xB = balls[j].xpos;
        yA = balls[i].ypos;
        yB = balls[j].ypos; 

        
      }else
      {
        xA = balls[j].xpos;
        xB = balls[i].xpos;
        yA = balls[j].ypos;
        yB = balls[i].ypos; 
      }

      // console.log("=========")
      // console.log("xA: "+xA);
      // console.log("xB: "+xB);
      // console.log("yA: "+yA);
      // console.log("yB: "+yB);

      let A = Math.pow((xA - xB),2);
      let B = Math.pow((yA - yB),2);
      let C = Math.sqrt(A + B);

      // console.log("++++++++++++");
      // console.log("A = "+A);
      // console.log("B = "+B);
      // console.log("C = "+C);


      if(C<200)
    {

  let linee = new Line(xA,yA,xB,yB)
  lines.push(linee);

  lines.forEach(l =>{
    l.movee();
  })

    }else
    {
    lines = [];
    }
      
    }
    
    
  }
}

}


moveBall(); 

let pointerX = 0;
let pointerY = 0;



canvas.addEventListener('mousemove',(e)=>{
    // console.log("")
    // console.log("X : "+e.clientX);
    // console.log("Y : "+e.clientY);
     pointerX = e.clientX ;
     pointerY = e.clientY ;


    for(let i =0;i<balls.length;i++)
    {
      let a =e.clientY - balls[i].ypos;
      let b =e.clientX - balls[i].xpos;
      let c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2))

        // console.log(balls[i].xpos)
        // console.log(balls[i].ypos)
      // console.log(i+" Distance: "+c);

      if(c< 125)
      {
        // console.log(i+" Very close");
        // console.log("BALL.MOVEX= "+balls[i].moveX)
        // console.log("BALL.MOVEY= "+balls[i].moveY)
        // if(balls[i].moveToX > 0)
        // {
        //   balls[i].moveX = -balls[i].moveX
          
        // }
        

       
       if(balls[i].moveX>0 && balls[i].moveY > 0)
       {
        balls[i].moveY = -balls[i].moveY;
        //  console.log("moveX DP: "+balls[i].moveX)
        // console.log("moveY DP: "+balls[i].moveY)
       }
       
       
       if(balls[i].moveX< 0 && balls[i].moveY > 0 )
       {
        balls[i].moveY = -balls[i].moveY;
        // console.log("moveX DL: "+balls[i].moveX)
        // console.log("moveY DL: "+balls[i].moveY)
       }

       if(balls[i].moveX>0 && balls[i].moveY < 0)
       { 
        balls[i].moveX = -balls[i].moveX;
        //  console.log("moveX GP: "+balls[i].moveX)
        // console.log("moveY GP: "+balls[i].moveY)
       }
       
       
       if(balls[i].moveX< 0 && balls[i].moveY < 0 )
       {
        balls[i].moveX = -balls[i].moveX;
        // console.log("moveX GL: "+balls[i].moveX)
        // console.log("moveY GL: "+balls[i].moveY)
       }


      }
    }
    
  })  




  const getCursorPosition = (canvas, event) => {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const canvax = event.offsetX
    const canvay = event.offsetY
    
    // console.log(`Real X,Y:${x}, ${y} `)
    // console.log(`Real canvaX,canvaY:${canvax}, ${canvay} `)
    for(let i =0;i<balls.length;i++){
      // fieldC = 3.14*Math.pow(balls[i].radius,2);
      // if(x>balls[i].xpos - balls[i].radius && x<balls[i].xpos + balls[i].radius && y>balls[i].ypos - balls[i].radius && y< balls[i].ypos + balls[i].radius)
      // {
      //   console.log("click");
      // }

      // console.log("Ball X "+balls[i].xpos);
      // console.log("Ball Y "+balls[i].ypos);
      // console.log("Ball radius "+balls[i].radius)
      // console.log("Ball X xpos - radius "+ (balls[i].xpos- balls[i].radius))
      // console.log("Ball X xpos + radius "+ (balls[i].xpos+ balls[i].radius))
      // console.log("Ball Y ypos - radius "+ (balls[i].ypos- balls[i].radius))
      // console.log("Ball Y ypos + radius "+ (balls[i].ypos+ balls[i].radius))

      if(x>(balls[i].xpos - balls[i].radius) && x<(balls[i].xpos + balls[i].radius) && y > (balls[i].ypos - balls[i].radius) && y < (balls[i].ypos + balls[i].radius))
      {
      
      balls.splice(i,1)
    
     
      for(let i =0;i<2;i++)
      {
        let balltest = new Ball((balls[i].xpos/2),(balls[i].ypos/2) , (balls[i].radius), balls[i].speed,color = `rgb(${RandomNumMinMax(0,255)},${RandomNumMinMax(0,255)},${RandomNumMinMax(0,255)})`);
        balls.push(balltest);
     
      }
        
      
      }
    }
  
  }
  
  canvas.addEventListener('mousedown', (e) => {
    getCursorPosition(canvas, e)
  })

}