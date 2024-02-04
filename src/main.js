loadOrFetchData('https://raw.githubusercontent.com/dwyl/english-words/master/words.txt', 'words')
    .then(data => main(data.split('\n')))
    .catch(error => console.error(error));

var wordsList = []

const main = (words) => {
    console.log(`Loaded ${words.length}`)
    wordsList = words

    displayQuickInfo(lettersTypingSpeed)

    const freq = generateFrequencies(lettersTypingSpeed, settings)

    const lesson = makeLesson({words: words, frequencies: freq, limit: 15})

    document.getElementById('lesson-data').innerHTML = lesson
    lessonData = {
        chars: []
    }
    current = document.getElementById('0_char')
}
