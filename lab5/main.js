function interval() {
    let timer = 1
    setInterval(()=>{
        //mamy coupling - interval ma na sztywno zaszyty w sobie C i D (...i logger)
        saveCTiSessionStorage(timer)
        discoverPowerBallNumber(timer)
        timer++
    }, 2000)
}

class Logger {
    static log(data) {
        console.log(data)
    }
}

function saveCTiSessionStorage(data) {
    console.log('[reader C]', data)
    const storageData = {data}
    sessionStorage.setItem('C', JSON.stringify(storageData))
    //brudzimy funkcje loggerem - to nie jest jej funkcjonalność
    Logger.log(`[log from C ${data}`)
}

function discoverPowerBallNumber(data) {
    const number = Math.floor(Math.random() * data * 100)
    console.log('[powerball number', number)
}