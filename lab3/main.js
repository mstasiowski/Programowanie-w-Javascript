document.addEventListener('keypress', onKeyPress);

let startrecordbtn = document.querySelector('#startrecord');
let stoprecordbtn = document.querySelector('#stoprecord');
let playrecordbtn = document.querySelector('#playtrack1')

let recordingStartTime;
let firstchannel= [];
let secondchannel= [];
let thirdchannel= [];
let fourthchannel= [];

startrecordbtn.addEventListener('click',startrecording);
stoprecordbtn.addEventListener('click',stoprecording);
playrecordbtn.addEventListener('click',playTrack1)


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

function startrecording(){
  console.log("recording!");
  console.log()
  recordStatus = true;

  recordingStartTime = Date.now();
  firstchannel = [];
  
}

function stoprecording() {
  console.log("stop record!");
  recordStatus = false;
  
}

function playTrack1(){
   if(firstchannel.length === 0) return 
 console.log(firstchannel)

firstchannel.forEach(track1 =>{
  setTimeout(() => {
    playSound(track1.key)
  }, track1.startTime);
})

}


function recordSound(sound){
  firstchannel.push({
    key:sound,
    startTime: Date.now() - recordingStartTime
  })
}
//Date.now()