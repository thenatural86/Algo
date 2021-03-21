// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = [[]]
  let counter = 1
  let startCol,
    startRow = 0
  let endCol,
    endRow = n - 1

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = 0; i < endCol; i++) {
      results[startRow][i] = counter
      counter++
      startRow++
    }
    for (let i = 0; i < endRow; i++) {
      results[i][endRow] = counter
      counter++
    }
    endRow--
  }
}

module.exports = matrix
