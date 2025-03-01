// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
//   throw new Error('No Solution Found');
// }

// function hashMapApproach(nums: number[], target: number): number[] {
//   const map = new Map<number, number>();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (map.has(complement)) {
//       return [map.get(complement)!, i];
//     }

//     map.set(nums[i], i);
//   }
//   throw new Error('No SOlution Found ');
// }

// function searchInsertLinear(nums: number[], target: number) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       nums.splice(i, 0, target);
//       return nums;
//     }
//   }
//   return nums;
// }

// const numArr: number[] = [1, 3, 5, 6];
// console.log(searchInsertLinear(numArr, 2));

// async function sleep(millis: number): Promise<void> {
//   let t = Date.now();
//   sleep(100).then(() => console.log(Date.now() - t));
// }
