const timeoutRef = setTimeout(
    () => {
      main.innerHTML='From setTimeout'
    },
    2000
)

let licznik = 0

const intervalRef = setInterval(
    () => {
        main.innerHTML='From interval'+ licznik++
    },
    4000
)

//kasowanie setInterval
clearInterval(intervalRef)

//kasowanie setTimeout
clearTimeout(intervalRef)

//window.requestAnimationFrame