const info = document.getElementById('info')

const displayQuickInfo = (times) => {
    info.innerHTML = ''

    for(let i in times) {
        if(times[i].latest.length === 0) {
            info.innerHTML += `<span class="letter-info letter-info-NED" title="Not enough data">${i}</span>`
            continue
        }
        const value = times[i].latest.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / times[i].latest.length

        const speed = Math.floor(60000 / value)

        // TODO: Background gradient
        info.innerHTML += `<span class="letter-info" title="${speed} wpm">${i}</span>`
    }
}