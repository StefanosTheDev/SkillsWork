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
