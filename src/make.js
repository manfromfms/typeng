const makeLesson = (params) => {
    const { limit, frequencies, words } = params;

    console.time('Generating a lesson')
    const list = getWords(words, frequencies, limit)

    var string = ""

    var charsCounter = 0
    var wordsCounter = 0
    for(let item of list) {
        const { word } = item;

        for(let letter of word) {
            string += `<span class="char queue-char ${charsCounter === 0 ? 'char-current' : ''}" id="${charsCounter}_char">${letter}</span>`
            charsCounter++
        }

        if(wordsCounter === limit - 1) break

        string += `<span class="char queue-char" id="${charsCounter}_char"> </span>`

        wordsCounter++
        charsCounter++
    }

    console.timeEnd('Generating a lesson')
    return string
}


const generateFrequencies = (letters, settings) => {
    const result = {
        'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0,
        'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0,
        's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0,
    }

    for(let letter in result) {
        if(letters[letter].latest.length === 0) result[letter] = 1000
        else result[letter] = Math.max(0, letters[letter].latest.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / letters[letter].latest.length - 12000 / settings["goal-speed"])
    }

    for(let i = settings["letters-in-use"]; i < 26; i++) {
        result[settings["letters-order"][i]] = -100
    }

    return result
}