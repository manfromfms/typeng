/**
 * Selects a random item from a list based on their values. Items with higher values are more likely to be selected.
 * Negative values are replaced with zero.
 * @param {Array.<Object>} list - The list of items.
 * @param {number} amount - Amount of words to return
 * @returns {Array.<Object>} The selected item.
 */
function weightedRandom(list, amount) {
    let totalWeight = 0;
    let weights = [];

    // Calculate total weight and store weights in array
    for (let i = 0; i < list.length; i++) {
        totalWeight += Math.max(0, list[i].value);
        weights.push(totalWeight);
    }

    const result = []

    while(amount--) {
        // Generate a random number between 0 and total weight
        let rand = Math.random() * totalWeight;

        // Find the first weight that is greater than or equal to the random number
        // TODO: replace with binary search
        var finish = true
        for (let i = 0; i < weights.length && finish; i++) {
            if (rand <= weights[i]) {
                result.push(list[i])
                finish = false
            }
        }
    }

    return result
}