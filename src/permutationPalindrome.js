/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
    let counts = new Map();

    for (let char of word) {
        counts.set(char, (counts.get(char) || 0) + 1);
    }

    let oddCount = 0;
    for (let count of counts.values()) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount <= 1;
}

module.exports = permutationPalindrome;
