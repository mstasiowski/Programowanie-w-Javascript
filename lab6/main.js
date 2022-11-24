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
let positionX = 350;
let positionY = 380;



window.addEventListener('deviceorientation', (move)=>{

       

        



  console.log(`map size X :${MaxX}`);
  console.log(`map size Y: ${MaxY}`);

   SpeedX = move.gamma/45;
   SpeedY = move.beta/45;

   



    
   if(positionX + SpeedX >0)
   {
        

    if(positionX> MaxX && positionX != 740)
    {
        console.log("colision X");
        ball.style.left = `${(MaxX * positionX) / 750 - 10}px`;
        
    }else
    {
        positionX= positionX +SpeedX;
        ball.style.left = `${positionX}px`;
    }

    
   }

   if(positionY + SpeedY >0)
   {


    if(positionY> MaxY  && positionY != 840)
        {
            console.log("colision Y");
            ball.style.top = `${(MaxY * positionY) / 850 - 10}px`;
            

        }else
        {
            positionY= positionY +SpeedY;
            ball.style.top = `${positionY}px`;

        }

 
   }
    
   
   
    
})


