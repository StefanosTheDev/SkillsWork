// Solve
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  throw new Error('No Solution Found');
}

// console.log(twoSum([1, 5, 2, 10, 50, 100, 5, 1, 2], 3));

// Review this source code more.
function hashMapApproach(nums: number[], target: number): number[] {
  // Store values and their indices
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      // Complement Found, return indices
      return [map.get(complement)!, i];
    }

    // Store current number and its index
    map.set(nums[i], i);
  }
  throw new Error('No SOlution Found ');
}

// // Example usage:
// const nums = [2, 7, 11, 15];
// const target = 9;

// const result = twoSum(nums, target);
// console.log(`Indices: ${result[0]}, ${result[1]}`); // Output: [0, 1]

// function isValid(s: string): boolean {
//   const key: string = '(){}[]';
//   for (let i = 0; i < s.length; i++) {
//     console.log(s[i]);
//     // I can do a search to make sure that i figure out uwhat value it is in my key. then I can expect the corresponding value
//   }
//   return true;
// }
// isValid('(){');
/**
   * 
   * 
   * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
  
  An input string is valid if:
  
  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.
   
  
  Example 1:
  
  Input: s = "()"
  
  Output: true
  
  Example 2:
  
  Input: s = "()[]{}"
  
  Output: true
  
  Example 3:
  
  Input: s = "(]"
  
  Output: false
  
  Example 4:
  
  Input: s = "([])"
  
  Output: true
   */

// Leet Code Problems

// Given a sorted array of distinct integers and a target value. Return the index if the target is found.
//If not return the index where it would be if it were inserted in order.

// Input: [1,3,55,7]

// Style 1: Return if found
// If Not found Return where it would have been
// We are going to need iterate over this array.
// If the value exists return that index position to target

// If it is not exists.
// Review
function searchInsertLinear(nums: number[], target: number) {
  // Loop through the array

  for (let i = 0; i < nums.length; i++) {
    // If we find a number greater than or equal to the target,
    // that is the correct insertion index.
    if (nums[i] >= target) {
      nums.splice(i, 0, target);
      return nums;
    }
  }
  // If we finish the loop without finding such a number,
  // the target should be inserted at the end of the array.
  return nums;
}
const numArr: number[] = [1, 3, 5, 6];

// Example usage:
console.log(searchInsertLinear(numArr, 2)); // Output: 2, because 5 is at index 2
// console.log(searchInsertLinear(numArr, 4)); // Output: 1, 2 should be inserted at index 1
// console.log(searchInsertLinear(numArr, 7)); // Output: 4, 7 should be inserted at the end
// console.log(searchInsertLinear(numArr, 0)); // Output: 0, 0 should be inserted at the beginning

async function sleep(millis: number): Promise<void> {
  // Given a positive Integer ```millis``` write a asynchronous function that sleeps for millis milliseconds. It can resolves any value.
  let t = Date.now();
  sleep(100).then(() => console.log(Date.now() - t));
}

sleep(100);
