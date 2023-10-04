/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
    let counts = new Map();

    for (let char of word) {
        counts.set(char, (counts.get(char) || 0) + 1);
    }

    for (let char of word) {
        if (counts.get(char) === 1) {
            return char;
        }
    }

    return null;
}

module.exports = firstSingleCharacter;
