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

console.log(twoSum([1, 5, 2, 10, 50, 100, 5, 1, 2], 3));

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

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(`Indices: ${result[0]}, ${result[1]}`); // Output: [0, 1]

function isValid(s: string): boolean {
  const key: string = '(){}[]';
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    // Okay I need to find the type
  }
  return true;
}
isValid('(){');
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
