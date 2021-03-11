// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // create a new array for array chunks to go into
  let newArr = []

  // iterate over array
  for (let element of array) {
    // retrieve the last element in new Array and save to variable
    let last = newArr[newArr.length - 1]

    // if last element doesn't exist or is its length is equal to size
    if (!last || last.length === size) {
      // push element into new array
      newArr.push([element])
    } else {
      // othewerwise add current element into last
      last.push(element)
    }
  }

  return newArr
}

module.exports = chunk
