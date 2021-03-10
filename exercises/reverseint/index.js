// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let rev = ''
  let num = n.toString()

  for (let i = 0; i < num.length; i++) {
    rev = num[i] + rev
  }
  let newNum = parseInt(rev) * Math.sign(n)
  return newNum
}

module.exports = reverseInt
