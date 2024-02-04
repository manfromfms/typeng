/**
 * Calculates the frequency score of a word based on an object containing English key frequencies.
 * Each occurrence of a letter after the first is halved in its contribution to the score.
 * @param {string} word - The word to calculate the frequency score for.
 * @param {Object.<string, number>} keyFrequencies - An object mapping English keys to their frequencies.
 * @returns {number} The calculated frequency score.
 */
function calculateWordFrequencyScore(word, keyFrequencies) {
    let score = 0;
    const letterCounts = {};

    for (const letter of word) {
        if(keyFrequencies[letter] < 0) return -100

        if (!letterCounts[letter]) {
            letterCounts[letter] = 1;
        } else {
            letterCounts[letter]++;
        }
    }

    for (const [letter, count] of Object.entries(letterCounts)) {
        const frequency = keyFrequencies[letter] || 0;
        const halvingFactor = 1 / Math.pow(2, count);
        score += frequency * halvingFactor;
    }

    return score / Math.pow(word.length, 1.4);
}


/**
 * Chooses a word from the list
 * @param {Array.<string>} words
 * @param {Object.<string, number>} keys - frequencies
 * @param {number} amount - An amount of words to get
 * @returns {Array.<Object<string, number>>}
 */
function getWords(words, keys, amount) {
    const scores = []
    for(let i in words) {
        scores.push({ word: words[i], value: calculateWordFrequencyScore(words[i], keys)})
    }

    return weightedRandom(scores, amount)
}