// window.addEventListener('deviceorientation', onDeviceMove)
let ball = document.querySelector('#ball');
let hole =document.querySelector('#hole');
let game = document.querySelector('#startgame');
let map = document.querySelector('#map');
let menu = document.querySelector('#menu');
let timeListDiv = document.querySelector('#timeListDiv');


let hourDigit = document.querySelector('#hour');
let minuteDigit = document.querySelector('#minute');
let secondDigit = document.querySelector('#second');

const MaxX = map.clientWidth - ball.clientWidth;
const MaxY = map.clientHeight - ball.clientHeight;

console.log(`map size X :${MaxX}`);
console.log(`map size Y: ${MaxY}`);


// function onDeviceMove(event) {
//     console.log(event)
// }

// function animate() { 
//     console.log(Date.now())
//     requestAnimationFrame(animate)      
// }
// requestAnimationFrame(animate)
function getRandomNum(min, max) {
   return Math.random() * (max - min) + min;
 }


 

let SpeedX = 0;
let SpeedY = 0;
let positionX = 350;
let positionY = 380;


let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;

let bestTime = [];


let bestTimeList = document.createElement('ol');
bestTimeList.classList ="bestTimeList";
timeListDiv.appendChild(bestTimeList);



let startgame = false;


window.addEventListener('deviceorientation', BallSpeed)
       
function BallSpeed(move){
   SpeedX = move.gamma /45;
   SpeedY = move.beta /45;
   //console.log(SpeedX);
   //console.log(SpeedY);
}


function BallMove(){

   if(startgame == true)
   {

      if(positionX<MaxX)
   {
         if(positionX<0)
         {
          positionX = positionX + 1;
         }else{

            positionX= positionX + SpeedX;
            ball.style.left = `${positionX}px`;
         }

      
   }else
   {
      positionX = positionX-1;
   }

   if(positionY<MaxY)
   {
            if(positionY<0)
            {
               positionY = positionY + 1;
            }else
            {
               positionY= positionY + SpeedY;
               ball.style.top = `${positionY}px`;
            }

      
   }else
   {
      positionY = positionY - 1;
   }

   collisionDetection();
      
window.requestAnimationFrame(BallMove);

   }  

}



game.addEventListener('click',start)

function start(){
   startgame = true;
   positionX = 350;
   positionY = 380;

 
   hole.style.left=getRandomNum(0,730)+"px";
   hole.style.top=getRandomNum(0,830)+"px";


   

   resetTimer();

   startTimer();
   BallMove();

   

   
   while (bestTimeList.firstChild) 
   {
     bestTimeList.removeChild(bestTimeList.firstChild);
   }
   
}

function endGame(){
   
   startgame = false;
   stopTimer();
   
   console.log(`Your time: hour:${hour} minute:${minute} second:${second}`);
   saveBestTime();
   
   
   bestTime.forEach(e=>{
         
         let TimeList = document.createElement('li');
         TimeList.className ="bestTimeListLi";
         TimeList.innerText=`${e[0]}:${e[1]}:${e[2]}`;
         bestTimeList.appendChild(TimeList);
                                     
  })
  
}



function startTimer(){
   
   stopTimer();
   cron = setInterval(() => {timer();},10)
}

function stopTimer(){
   
   clearInterval(cron);
}

function resetTimer(){
   hour = 0;
   minute = 0;
   second = 0;
   millisecond = 0;

   hourDigit.innerHTML ='00:';
   minuteDigit.innerHTML ='00:';
   secondDigit.innerHTML ='00';
}


function timer(){ 

if((millisecond +=10) ==1000){
      
   millisecond = 0;
   second++;
}

if(second == 60)
{
   second = 0;
   minute++;
}

if(minute == 60)
{
   minute = 0;
   hour++;
}

hourDigit.innerHTML = returnTimerData(hour);
minuteDigit.innerHTML = returnTimerData(minute);
secondDigit.innerHTML = returnTimerData(second);
}

function returnTimerData(input) {

   if(input >=10)
   {
      return input;
   }else if(input == second)
   {
      return `0${input}`;
   }else
   {
      return `0${input}:`
   }
   
 }


 function collisionDetection(){
   let holeCord = hole.getBoundingClientRect();
   let ballCord = ball.getBoundingClientRect();

   // console.log(`BallCordLeft: ${ballCord.left} + BallCordWidth: ${ballCord.width}`);
   // console.log(`BallCordTop: ${ballCord.top} + BallCordHeight: ${ballCord.height}`);
   // console.log(`HoleCordLeft: ${holeCord.left} + HallCordWidth: ${holeCord.width}`);
   // console.log(`HoleCordTop: ${holeCord.top} + HallCordHeight: ${holeCord.height}`);

   if(ballCord.left < (holeCord.left+ holeCord.width)-20 && ballCord.left + ballCord.width > holeCord.left +20 &&
   ballCord.top < (holeCord.top + holeCord.height)-20 && ballCord.top + ballCord.height > holeCord.top + 20) 
   {
      
      hole.style.backgroundColor="rgb(30, 156, 30)";
      endGame();  

   } else
   hole.style.backgroundColor="rgba(37, 37, 37, 0.973)";
   
   


 }

 function saveBestTime(){

   bestTime.push([hour,minute,second]);

 }

 








      


   
    








