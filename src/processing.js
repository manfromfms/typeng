const keys = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '
var current = document.getElementById('undefined')
var lessonData = {
    chars: []
}


const lessonEnded = () => {
    console.log('Lesson ended')
    console.log(lessonData)

    for(let i = 1; i < lessonData.chars.length; i++) {
        const { char, start, end } = lessonData.chars[i]

        if(char === ' ') continue

        const delta = end - start

        lettersTypingSpeed[char].latest.push(delta)
        if(lettersTypingSpeed[char].latest.length > 150) lettersTypingSpeed[char].latest.shift()
    }

    saveUserData()
    displayQuickInfo(lettersTypingSpeed)

    const freq = generateFrequencies(lettersTypingSpeed, settings)
    console.log(freq)

    current = document.getElementById('undefined')
    const lesson = makeLesson({words: wordsList, frequencies: freq, limit: 15})
    document.getElementById('lesson-data').innerHTML = lesson
    lessonData = {
        chars: []
    }
    current = document.getElementById('0_char')
}


document.onkeyup = ({ key }) => {
    if(!keys.includes(key)) return
    console.log(key)

    if(!current) return

    if(key === current.innerHTML) {
        current.classList.add('char-done')
        current.classList.remove('char-current')

        if(lessonData.chars.length === 0) {
            lessonData.chars.push({
                start: Date.now(),
                end: Date.now(),
                char: key,
            })
        } else {
            lessonData.chars.push({
                start: lessonData.chars[lessonData.chars.length - 1].end,
                end: Date.now(),
                char: key,
            })
        }

        current = document.getElementById(`${Number(current.id.split('_')[0])+1}_char`)

        if(!current) return lessonEnded()

        current.classList.add('char-current')
    } else {
        current.classList.add('char-mistake')
    }
}