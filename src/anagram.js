/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    if (s1.length !== s2.length) return false;

    let charCount = new Map();

    for (let i = 0; i < s1.length; i++) {
        charCount.set(s1[i], (charCount.get(s1[i]) || 0) + 1);
        charCount.set(s2[i], (charCount.get(s2[i]) || 0) - 1);
    }

    for (let count of charCount.values()) {
        if (count !== 0) return false;
    }

    return true;
}

module.exports = anagram;
