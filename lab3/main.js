document.addEventListener('keypress', onKeyPress)

const Sounds = {
    'clap':'clap',
    'clap2':'clap2'
}

const KeyToSound = {
    'a': 'clap',
    's': 'clap2',
}

function onKeyPress(ev){
   // const key = event.key
    // logika mapowania key -> sound 
  // switch
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

const sound = KeyToSound[ev.key]
  playSound(sound)
}




function playSound(event) {
    if(!sound){
        return
    }
  const audioTag = document.querySelector('#${clap}')
  audioTag.currentTime = 0
  audioTag.play()
}

//Date.now()