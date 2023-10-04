/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
    let groups = new Map();

    for (let word of words) {
        let sorted = [...word].sort().join('');

        if (!groups.has(sorted)) {
            groups.set(sorted, []);
        }

        groups.get(sorted).push(word);
    }

    return Array.from(groups.values());
}

module.exports = anagramGroups;
