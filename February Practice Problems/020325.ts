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
