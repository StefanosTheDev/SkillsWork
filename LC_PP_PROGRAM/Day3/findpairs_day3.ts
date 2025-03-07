/* Problem: Find Pairs with Given Sum
Write a function that finds all unique pairs in an array of integers that sum up to a specific target number.

The function should return an array of arrays, where each inner array contains a pair of numbers that add up to the target sum.
Requirements:
Input will be an array of integers and a target sum (integer)

Output should be an array containing pairs (each pair as an array of 2 numbers)

Each number in the array can only be used once in a pair

Pairs should be unique (don't return [2,3] and [3,2])

If no pairs are found, return an empty array

Input: arr = [2, 4, 3, 5, 7, 8, 9], target = 7
Output: [[2, 5], [3, 4]]

Input: arr = [1, 1, 2, 3, 4], target = 5
Output: [[1, 4], [2, 3]]

Input: arr = [1, 2, 3, 4], target = 10
Output: []


*/

function findPairs(arr: number[], val: number): number[][] {
  let pairs: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === val) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs; // Always return pairs, empty or not
}

// Test cases
console.log(findPairs([1, 1, 2, 3, 4], 5)); // Output: [[1, 4], [2, 3]]
console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 7)); // Output: [[2, 5], [3, 4]]
console.log(findPairs([1, 2, 3, 4], 10)); // Output: []
