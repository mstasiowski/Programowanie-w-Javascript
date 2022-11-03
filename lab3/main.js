document.addEventListener('keypress', onKeyPress);

let startrecordbtn = document.querySelector('#startrecord');
let stoprecordbtn = document.querySelector('#stoprecord');
let playrecordbtn = document.querySelector('#playtrack1');

let startrecordbtn2 = document.querySelector('#startrecord2');
let stoprecordbtn2 = document.querySelector('#stoprecord2');
let playrecordbtn2 = document.querySelector('#playtrack2');

let startrecordbtn3 = document.querySelector('#startrecord3');
let stoprecordbtn3 = document.querySelector('#stoprecord3');
let playrecordbtn3 = document.querySelector('#playtrack3');

let startrecordbtn4 = document.querySelector('#startrecord4');
let stoprecordbtn4 = document.querySelector('#stoprecord4');
let playrecordbtn4 = document.querySelector('#playtrack4');

let playcompletetrack = document.querySelector('#playall');

let recordingStartTime;
let firstchannel= [];
let secondchannel= [];
let thirdchannel= [];
let fourthchannel= [];
let channel = [];



startrecordbtn.addEventListener('click',startrecording);
stoprecordbtn.addEventListener('click',stoprecording);
playrecordbtn.addEventListener('click',playTrack)

startrecordbtn2.addEventListener("click",startrecording)
stoprecordbtn2.addEventListener("click",stoprecording)
playrecordbtn2.addEventListener('click',playTrack)

startrecordbtn3.addEventListener("click",startrecording)
stoprecordbtn3.addEventListener("click",stoprecording)
playrecordbtn3.addEventListener('click',playTrack)

startrecordbtn4.addEventListener("click",startrecording)
stoprecordbtn4.addEventListener("click",stoprecording)
playrecordbtn4.addEventListener('click',playTrack)

playcompletetrack.addEventListener('click', playall)


// const Sounds = {
//     'clap':'clap',
//     'hithat':'hithat'
// }


const KeyToSound = {
    'a': 'clap',
    's': 'hithat',
    'd': 'kick',
    'f': 'openhat',
    'g': 'boom',
    'h': 'ride',
    'j': 'snare',
    'k': 'tom',
    'l': 'tink',
}

function onKeyPress(ev){
 const  sound = KeyToSound[ev.key]

  /* const key = event.key
    logika mapowania key -> sound 
  switch
switch (ev.key) {
    case 'a':
    //clap
    sound = Sounds.clap
    break;

    case 's':
        sound = Sounds.clap2
    //clap2
    break;
}
  const sound = "clap" */


  playSound(sound)
}




function playSound(sound) {
    if(!sound){
        return 
    }
    
    if(recordStatus === true){
      recordSound(sound)
    }

  const audioTag = document.querySelector(`#${sound}`);
  audioTag.currentTime = 0
  audioTag.play()
}


let recordStatus = false;
let channelCheck = "";


function startrecording(){
   channelCheck = this.id;
  

if(channelCheck === "startrecord")
{
  firstchannel = [];
}else if(channelCheck ==="startrecord2")
{
  secondchannel =[];
}else if(channelCheck ==="startrecord3")
{
  thirdchannel = [];
}else if(channelCheck ==="startrecord4")
{
  fourthchannel = [];
}else
{
  console.log(err);
}

  console.log("recording!");
  
  
  recordStatus = true;

  recordingStartTime = Date.now();
  
}

function stoprecording() {
  console.log("stop record!");
  recordStatus = false;
  
}

function playTrack(){

  channel = [];
  let channelCheck = this.id;
  

  if(channelCheck === "playtrack1")
{
  channel = firstchannel
}else if(channelCheck ==="playtrack2")
{
  channel = secondchannel
}else if(channelCheck ==="playtrack3")
{
  channel = thirdchannel
}else if(channelCheck ==="playtrack4")
{
  channel = fourthchannel
}else
{
  console.log("error");
}

  


//    if(firstchannel.length === 0) return 
 

// firstchannel.forEach(track1 =>{
//   setTimeout(() => {
//     playSound(track1.key)
//   }, track1.startTime);
// })

if(channel.length === 0) return 
 

channel.forEach(track =>{
  setTimeout(() => {
    playSound(track.key)
  }, track.startTime);
})


}


function recordSound(sound){

  
  let channel = [];

  if(channelCheck === "startrecord")
  {
    channel = firstchannel;
  }else if(channelCheck ==="startrecord2")
  {
    channel = secondchannel;
  }else if(channelCheck ==="startrecord3")
  {
    channel = thirdchannel;
  }else if(channelCheck ==="startrecord4")
  {
    channel = fourthchannel
  }else
  {
    console.log(err);
  }



  channel.push({
    key:sound,
    startTime: Date.now() - recordingStartTime
  })
}


// function recordSound(sound,channel){
//   firstchannel.push({
//     key:sound,
//     startTime: Date.now() - recordingStartTime
//   })
// }



//Date.now()


function playall(){

  
 
  firstchannel.forEach(track =>{
    setTimeout(() => {
      playSound(track.key)
    }, track.startTime);
  })

  
 
  secondchannel.forEach(track =>{
    setTimeout(() => {
      playSound(track.key)
    }, track.startTime);
  })

  
 
  thirdchannel.forEach(track =>{
    setTimeout(() => {
      playSound(track.key)
    }, track.startTime);
  })

  
 
  fourthchannel.forEach(track =>{
    setTimeout(() => {
      playSound(track.key)
    }, track.startTime);
  })

}