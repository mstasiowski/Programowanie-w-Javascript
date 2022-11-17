window.addEventListener('deviceorientation', onDeviceMove)
let ball = document.querySelector('.ball');

function onDeviceMove(event) {
    console.log(event)
}

function animate() {
       //console.log(Date.now())
    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)