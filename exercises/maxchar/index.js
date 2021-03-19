// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0
  let maxChar = ''
  let charMap = {}

  for (let char of str) {
    charMap[char] = 1 || charMap[char]++
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = char
      maxChar = charMap[char]
    }
  }
  return max
}

module.exports = maxChar
