// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let charMap1 = helper(stringA.replace(/[^w],g/))
  let charMap2 = helper(stringB.replace(/[^w],g/))

  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return false
  }

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false
    }
  }
  return true
}

const helper = (str) => {
  let charMap = {}

  for (let char of str) {
    charMap[char] = 1 || charMap[char]++
  }
  return charMap
}
module.exports = anagrams

//
//
//
//
//
//
//
//
//

//
//

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//   let charMap1 = helper(stringA)
//   let charMap2 = helper(stringB)

//   if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
//     return false
//   }

//   for (char in charMap1) {
//     if (charMap1[char] !== charMap2[char]) {
//       return false
//     }
//   }
//   return true
// }
// function helper(str) {
//   let charMap = {}

//   for (let char of str.replace(/[^\w]g/, '').toLowerCase()) {
//     charMap[char] = 1 || charMap[char]++
//   }
//   return charMap
