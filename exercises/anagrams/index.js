// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let string1 = stringA.replace(/[^\w]/g, '').toLowerCase()
  let string2 = stringB.replace(/[^\w]/g, '').toLowerCase()

  let charMap1 = {}
  let charMap2 = {}

  for (let char of string1) {
    charMap1[char] = 1 || charMap1[char]++
  }
  for (let char of string2) {
    charMap2[char] = 1 || charMap2[char]++
  }

  for (let char in charMap1) {
    if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
      return false
    }
    if (charMap1[char] !== charMap2[char]) {
      return false
    }
  }
  return true
}

module.exports = anagrams
