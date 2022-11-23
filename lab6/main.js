//window.addEventListener('deviceorientation', onDeviceMove)
let ball = document.querySelector('#ball');
let  hole =document.querySelector('#hole');
let map = document.querySelector('#map');


const MaxX = map.clientWidth - ball.clientWidth;
const MaxY = map.clientHeight - ball.clientHeight;
// function onDeviceMove(event) {
//     console.log(event)
    
// }





function animate() {
       //console.log(Date.now())
    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)


let SpeedX = 0;
let SpeedY = 0;
let positionX = 20;
let positionY = 20;



window.addEventListener('deviceorientation', (move)=>{
    ball.style.top = `${(MaxY * positionY) / 180 - 10}px`;
  ball.style.left = `${(MaxX * positionX) / 180 - 10}px`;

   SpeedX = move.gamma/45;
   SpeedY = move.beta/45;

   



    
   if(positionX + SpeedX >0)
   {
    positionX= positionX +SpeedX;
    ball.style.left = `${positionX}px`;
   }

   if(positionY + SpeedY >0)
   {
    positionY= positionY +SpeedY;
    ball.style.top = `${positionY}px`;
   }
    
   
   
    
})


