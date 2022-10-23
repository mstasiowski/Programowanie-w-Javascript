document.addEventListener('keypress', onKeyPress)

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

//    const key = event.key
//     logika mapowania key -> sound 
//   switch
// switch (ev.key) {
//     case 'a':
//     //clap
//     sound = Sounds.clap
//     break;

//     case 's':
//         sound = Sounds.clap2
//     //clap2
//     break;
// }
//   const sound = "clap"
  playSound(sound)
}




function playSound(sound) {
    if(!sound){
        return 
    }
    console.log(sound)
  const audioTag = document.querySelector(`#${sound}`);
  audioTag.currentTime = 0
  audioTag.play()
}

//Date.now()